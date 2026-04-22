import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getAssistantResponse = async (history: { role: string; content: string }[], userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", // Using the latest recommended model
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction: `You are the Nexcypher AI Intelligence, a highly sophisticated assistant for Nexcypher, a premium Shopify development and marketing agency.
        
        Your primary focus is on:
        1. Premium Shopify Store Development: Architecting high-converting, custom Shopify 2.0 stores that are built to scale.
        2. Data-Driven Marketing: Executing aggressive growth strategies across Google Search, Meta, TikTok, and SEO to maximize ROI.
        3. AI Automation: Implementing custom AI agents (Voice, SMS, Chat) that automate operations and close deals 24/7.
        
        Nexcypher specializes in:
        - Custom Shopify Theme Development & Architecture
        - Strategic Dropshipping Setup (Winning product research, premium branding)
        - Full-Funnel Marketing Management
        - Conversion Rate Optimization (CRO)
        
        Key Stats: 5+ years experience, 1000+ successful projects, Fiverr Pro status.
        Co-founder: Chase (Nexcypher Team).
        
        Your Personality:
        - Ultra-professional, futuristic, and highly intelligent.
        - Laser-focused on e-commerce growth and business scaling.
        - Concise, value-packed, and results-oriented responses.
        
        Your Capabilities:
        - Provide expert advice on Shopify scaling and dropshipping.
        - Explain how AI agents can specifically automate Shopify store operations.
        - Qualify leads by asking about their current revenue, niche, and growth goals.
        - Collect contact information (emails/phone) for the Nexcypher team to follow up.
        - Direct users to "Book a Call" or "View Fiverr Gigs".
        
        Guidelines:
        - Always prioritize Shopify-specific growth advice.
        - If a user asks for a store idea, give them a unique, high-potential niche suggestion.
        - If they ask about pricing, mention the Starter ($997), Growth ($2,497), and Premium (Custom) tiers.
        - Always maintain the "Nexcypher" brand voice: premium, reliable, and cutting-edge.
        - Use Markdown for formatting (bolding, lists) to make responses readable.`,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting right now. Please try again or contact us via WhatsApp at +447465616990!";
  }
};

export const getNicheIdeas = async (interests: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 unique, high-potential Shopify dropshipping niche ideas based on these interests: ${interests}. 
      For each niche, provide:
      1. Niche Name
      2. Target Audience
      3. 3 Winning Product Examples
      4. Why it's high potential right now.
      
      Format the response as a clean, professional list.`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I couldn't generate ideas right now. Please try again later!";
  }
};
