import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { AiCallingAgentsPreview } from '../components/AiCallingAgentsPreview';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Mic } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const AiCallingAgents = () => {
  const canonicalUrl = "https://nexcypher.us/ai-calling-agents";

  return (
    <>
      <Helmet>
        <title>Autonomous AI Calling Agents for E-Commerce | 24/7 Voice Support & Sales - Nexcypher</title>
        <meta name="description" content="Deploy human-like AI calling agents that handle inbound customer support, order inquiries, and outbound sales 24/7 for high-growth Shopify stores." />
        <meta name="keywords" content="AI calling agents, ecommerce AI phone support, Shopify AI voice agent, automated phone sales, AI customer service, inbound lead qualification" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcypher" />
        <meta property="og:title" content="Autonomous AI Calling Agents for E-Commerce | Nexcypher" />
        <meta property="og:description" content="Human-like autonomous voice agents for 24/7 customer support and inbound sales conversion for Shopify stores." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nexcypher AI Voice Agents" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nexcypher" />
        <meta name="twitter:title" content="Autonomous AI Calling Agents for E-Commerce | Nexcypher" />
        <meta name="twitter:description" content="Human-like autonomous voice agents for 24/7 customer support and inbound sales conversion." />
        <meta name="twitter:image" content="https://nexcypher.us/og-image.jpg" />
      </Helmet>

      <div className="pt-44 md:pt-64 pb-32">
        <h1 className="sr-only">Autonomous AI Calling Agents - Nexcypher Voice Automation</h1>
        <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-gold/10 text-accent-gold border-accent-gold/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          The New Standard
        </Badge>
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          AI Voice <br /> <span className="text-accent-gold">Domination.</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          The age of expensive call centers is dead. We build autonomous AI agents that handle outbound sales and inbound support with perfect human-like speed and tone.
        </p>
      </div>

      <AiCallingAgentsPreview />

      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Engineered for Results.</h2>
            <p className="text-text-secondary mt-4">Why brands are switching to Nexcypher AI Agents</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Zap, title: "0ms Latency", desc: "No awkward pauses. Our agents respond as fast as a human in real-time." },
              { icon: Mic, title: "Custom Voice", desc: "Clone your best salesperson's voice or create a custom brand persona." },
              { icon: Bot, title: "Unlimited Scaling", desc: "Handle 10,000 calls simultaneously without hiring a single person." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-accent-gold mx-auto"
                >
                  <item.icon className="w-8 h-8 pointer-events-none" />
                </motion.div>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">AI Agent FAQ</h2>
          </div>
          <Accordion className="w-full">
            {[
              { q: "Do they sound like humans?", a: "Yes. Our AI uses advanced neural voice synthesis that is indistinguishable from a human caller. Features like 'filler words' (um, ah) make it feel natural." },
              { q: "Can they book appointments?", a: "Absolutely. We integrate directly with Calendly, Google Calendar, and your CRM to book qualified leads on the spot." },
              { q: "Is it legal?", a: "Yes. Our systems are built to be compliant with TCPA and local calling regulations. We always ensure proper disclosure as required." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/5">
                <AccordionTrigger className="text-white hover:text-accent-gold text-lg font-bold text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-text-secondary text-base leading-relaxed pt-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      </div>
    </>
  );
};
