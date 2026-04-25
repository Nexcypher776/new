import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Redirect www to non-www
  app.use((req, res, next) => {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    if (host === 'www.nexcypher.us') {
      return res.redirect(301, `https://nexcypher.us${req.originalUrl}`);
    }
    next();
  });

  app.use(express.json());

  // API Route for Klaviyo Subscription (renamed to avoid ad-blocker "subscribe" keyword filters)
  app.post('/api/contact-strategy', async (req, res) => {
    try {
      console.log('--- DEBUG: POST /api/subscribe triggered ---');
      console.log('Received subscription request:', req.body.email);

      const { email, firstName, lastName, phone, business, service, budget, notes, source } = req.body;
      const listId = process.env.VITE_KLAVIYO_LIST_ID;
      const privateApiKey = process.env.KLAVIYO_PRIVATE_API_KEY;

      console.log('DEBUG: KLAVIYO_PRIVATE_API_KEY present:', !!privateApiKey);
      console.log('DEBUG: VITE_KLAVIYO_LIST_ID present:', !!listId);

      if (!listId || !privateApiKey) {
        console.error('Missing KLAVIYO_PRIVATE_API_KEY or VITE_KLAVIYO_LIST_ID environment variables.');
        return res.status(500).json({ error: 'Server configuration error' });
      }

      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      const payload = {
        data: {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            custom_source: source || 'Website Form',
            profiles: {
              data: [
                {
                  type: 'profile',
                  attributes: {
                    email: email,
                    ...(phone ? { phone_number: phone } : {}),
                    ...(firstName ? { first_name: firstName } : {}),
                    ...(lastName ? { last_name: lastName } : {}),
                    ...(business ? { organization: business } : {}),
                    properties: {
                      service_needed: service,
                      budget: budget,
                      notes: notes
                    }
                  }
                }
              ]
            }
          },
          relationships: {
            list: {
              data: {
                type: 'list',
                id: listId
              }
            }
          }
        }
      };

      console.log('DEBUG: Sending payload to Klaviyo endpoint...');
      const klaviyoUrl = 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/';
      
      const payloadString = JSON.stringify(payload);
      console.log('DEBUG: Exact Payload Sent to Klaviyo:', payloadString);
      
      const subscribeRes = await fetch(klaviyoUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Revision': '2024-02-15',
          'Authorization': `Klaviyo-API-Key ${privateApiKey}`,
          'Accept': 'application/json'
        },
        body: payloadString
      });

      console.log('DEBUG: Klaviyo Exact Status Code:', subscribeRes.status);
      const responseText = await subscribeRes.text();
      console.log('DEBUG: Klaviyo Exact Response Body:', responseText);

      if (!subscribeRes.ok) {
        let failureReason = 'unknown';
        if (subscribeRes.status === 401) failureReason = 'auth error (invalid API key)';
        else if (subscribeRes.status === 403) failureReason = 'missing scope (ensure key has Subscriptions:Write)';
        else if (subscribeRes.status === 404) failureReason = 'wrong endpoint or wrong list ID';
        else if (subscribeRes.status === 400) failureReason = 'wrong payload schema or invalid data format';

        console.error(`--- DEBUG: End of Request (Failed) ---`);
        console.error(`Failure Analysis: ${failureReason}`);
        return res.status(subscribeRes.status).json({ 
          error: 'Klaviyo API error', 
          details: responseText,
          failureReason: failureReason
        });
      }

      console.log('Klaviyo subscribe success for:', email);
      console.log('--- DEBUG: End of Request (Success) ---');
      return res.status(200).json({ success: true, klaviyoResponse: responseText });

    } catch (error) {
      console.error('Klaviyo subscribe error:', error);
      console.log('--- DEBUG: End of Request (Exception) ---');
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Static serving for production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
