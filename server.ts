import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import zlib from 'node:zlib';

const COMPRESSIBLE_CONTENT_TYPE =
  /^(text\/|application\/(javascript|json|xml|wasm|manifest\+json)|image\/svg\+xml)/i;

function compressionMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.method === 'HEAD') return next();
  const acceptEncoding = String(req.headers['accept-encoding'] || '');
  const supportsBrotli = /\bbr\b/i.test(acceptEncoding);
  const supportsGzip = /\bgzip\b/i.test(acceptEncoding);
  if (!supportsBrotli && !supportsGzip) return next();

  const encoding = supportsBrotli ? 'br' : 'gzip';
  const originalWrite = res.write.bind(res);
  const originalEnd = res.end.bind(res);
  let compressor: zlib.BrotliCompress | zlib.Gzip | null = null;
  let bypass = false;

  const initStream = () => {
    if (compressor || bypass) return;
    const contentType = String(res.getHeader('Content-Type') || '');
    const existingEncoding = res.getHeader('Content-Encoding');
    if (
      existingEncoding ||
      !COMPRESSIBLE_CONTENT_TYPE.test(contentType) ||
      res.statusCode === 204 ||
      res.statusCode === 304
    ) {
      bypass = true;
      return;
    }

    res.removeHeader('Content-Length');
    res.setHeader('Content-Encoding', encoding);
    const vary = res.getHeader('Vary');
    if (!vary) {
      res.setHeader('Vary', 'Accept-Encoding');
    } else if (!String(vary).toLowerCase().includes('accept-encoding')) {
      res.setHeader('Vary', `${vary}, Accept-Encoding`);
    }

    compressor =
      encoding === 'br'
        ? zlib.createBrotliCompress({
            params: {
              [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
            },
          })
        : zlib.createGzip({ level: 6 });

    compressor.on('data', (chunk: Buffer) => {
      originalWrite(chunk);
    });
    compressor.on('end', () => {
      originalEnd();
    });
  };

  (res as any).write = (chunk: any, enc?: any, cb?: any) => {
    initStream();
    if (bypass || !compressor) {
      return originalWrite(chunk, enc, cb);
    }
    return compressor.write(chunk, enc, cb);
  };

  (res as any).end = (chunk?: any, enc?: any, cb?: any) => {
    initStream();
    if (bypass || !compressor) {
      return originalEnd(chunk, enc, cb);
    }
    if (chunk !== undefined) {
      if (typeof chunk === 'function') {
        return compressor.end(chunk);
      }
      return compressor.end(chunk, enc, cb);
    }
    return compressor.end();
  };

  next();
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.disable('x-powered-by');
  app.use(compressionMiddleware);

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
      const { email, firstName, lastName, phone, business, service, budget, notes, source } = req.body;
      const listId = process.env.VITE_KLAVIYO_LIST_ID;
      const privateApiKey = process.env.KLAVIYO_PRIVATE_API_KEY;

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

      const klaviyoUrl = 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/';
      const payloadString = JSON.stringify(payload);
      
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

      const responseText = await subscribeRes.text();

      if (!subscribeRes.ok) {
        let failureReason = 'unknown';
        if (subscribeRes.status === 401) failureReason = 'auth error (invalid API key)';
        else if (subscribeRes.status === 403) failureReason = 'missing scope (ensure key has Subscriptions:Write)';
        else if (subscribeRes.status === 404) failureReason = 'wrong endpoint or wrong list ID';
        else if (subscribeRes.status === 400) failureReason = 'wrong payload schema or invalid data format';

        console.error(`Klaviyo API failure (${subscribeRes.status}): ${failureReason}`);
        return res.status(subscribeRes.status).json({ 
          error: 'Klaviyo API error', 
          details: responseText,
          failureReason: failureReason
        });
      }

      return res.status(200).json({ success: true, klaviyoResponse: responseText });

    } catch (error) {
      console.error('Klaviyo subscribe error:', error);
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
    // Static serving for production with aggressive immutable caching for hashed bundles
    const distPath = path.join(process.cwd(), 'dist');
    app.use(
      '/assets',
      express.static(path.join(distPath, 'assets'), {
        maxAge: '1y',
        immutable: true,
        etag: true,
      })
    );
    app.use(
      express.static(distPath, {
        etag: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
          } else if (/\.(jpg|jpeg|png|webp|avif|svg|ico|woff2)$/i.test(filePath)) {
            res.setHeader(
              'Cache-Control',
              'public, max-age=604800, stale-while-revalidate=86400'
            );
          } else {
            res.setHeader('Cache-Control', 'public, max-age=3600');
          }
        },
      })
    );
    app.get('*', (req, res) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
