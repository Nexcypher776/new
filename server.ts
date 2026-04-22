import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { 
  Profiles, 
  Events, 
  Auth,
  ProfileCreateQueryResourceObjectAttributes,
  EventCreateQueryV2ResourceObjectAttributes
} from "klaviyo-api";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Klaviyo SDK Initialization (v14+)
  Auth.GlobalApiKeySettings.apiKey = process.env.KLAVIYO_PRIVATE_API_KEY || '';
  
  // API Route for Klaviyo Lead Capture
  app.post("/api/klaviyo/subscribe", async (req, res) => {
    const { email, name, phone, business, service, budget, notes, message, source } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // 1. Create or Update Profile
      const nameParts = (name || "").split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      const attributes: ProfileCreateQueryResourceObjectAttributes = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone || undefined,
        properties: {
          business_name: business || "",
          interested_service: service || "",
          budget_range: budget || "",
          notes: notes || message || "",
          source: source || 'unknown_source'
        }
      };

      try {
        await Profiles.createProfile({
          data: {
            type: 'profile',
            attributes: attributes
          }
        });
      } catch (profileError: any) {
        // If profile already exists (409 Conflict), we can ignore or update
        // Klaviyo API returns 409 if email is already in use
        if (profileError.response?.status !== 409) {
          throw profileError;
        }
        console.log(`Profile already exists for ${email}, proceeding to track event.`);
      }

      // 2. Track an Event
      const eventAttributes: EventCreateQueryV2ResourceObjectAttributes = {
        properties: {
          email,
          name,
          phone,
          business,
          service,
          budget,
          notes,
          source: source || 'unknown_source'
        },
        metric: {
          data: {
            type: 'metric',
            attributes: {
              name: 'Submitted Lead Form'
            }
          }
        },
        profile: {
          data: {
            type: 'profile',
            attributes: attributes
          }
        }
      };

      await Events.createEvent({
        data: {
          type: 'event',
          attributes: eventAttributes
        }
      });

      console.log(`Lead captured in Klaviyo: ${email} from ${source}`);
      res.status(200).json({ success: true, message: "Lead captured in Klaviyo" });
    } catch (error: any) {
      console.error("Klaviyo API Error:", error.response?.data || error.message);
      // We return success to the user to keep the UX smooth, unless it's a catastrophic failure
      // (Optionally could return 500 but for marketing leads usually better to not show error to user)
      res.status(200).json({ success: true, message: "Processed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
