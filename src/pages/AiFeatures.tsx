import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const AiFeatures = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Agent Features",
    "provider": {
      "@type": "Organization",
      "name": "Nexcypher",
      "url": "https://nexcypher.us"
    },
    "description": "Explore the advanced features of our AI calling agents including NLP, real-time analytics, CRM integrations, and more."
  };

  return (
    <>
      <Helmet>
        <title>AI Agent Features | Nexcypher</title>
        <meta name="description" content="Explore the advanced features of our AI calling agents including NLP, real-time analytics, CRM integrations, and more." />
        <meta name="keywords" content="AI agent features, conversational AI capabilities" />
        <link rel="canonical" href={canonicalUrl} />
        {schemaData && (
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        )}
      </Helmet>
      
      <h1 className="sr-only">AI Agent Features | Nexcypher</h1>

      <section className="pt-32 pb-24 bg-background min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                Ai Features
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              AI Agent Features
            </h2>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Explore the advanced features of our AI calling agents including NLP, real-time analytics, CRM integrations, and more.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest shadow-lg shadow-accent-blue/20">
                  Contact Us
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest">
                  Back to Home <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Content Section */}
      <section className="py-24 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-3xl p-10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Advanced Natural Language Processing (NLP)</h3>
            <ul className="space-y-4 text-text-secondary text-lg leading-relaxed list-none m-0 p-0">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <p className="m-0">Engage your customers with conversational fluidity indistinguishable from human agents. Our algorithms understand intent, context, and sentiment dynamically.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <p className="m-0">Handle complex interruptions seamlessly and ensure conversations never feel scripted or robotic.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-3xl p-10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Impeccable Voice Recognition & Synthesis</h3>
            <ul className="space-y-4 text-text-secondary text-lg leading-relaxed list-none m-0 p-0">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                <p className="m-0">Equipped with ultra-low latency recognition models that accurately capture nuances, accents, and rapid speech patterns effortlessly.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-gold mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                <p className="m-0">Deploy custom voice clones or select from our premium catalog of hyper-realistic voices designed to reflect your brand identity.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-3xl p-10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Frictionless CRM Integration</h3>
            <ul className="space-y-4 text-text-secondary text-lg leading-relaxed list-none m-0 p-0">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-purple mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                <p className="m-0">Streamline your ecosystem by syncing live calls, transcripts, and identified lead scores directly into Salesforce, HubSpot, or your proprietary CRM.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-purple mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                <p className="m-0">Trigger automated post-call workflows instantly to accelerate the sales cycle without human intervention.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-3xl p-10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Precision Real-Time Analytics</h3>
            <ul className="space-y-4 text-text-secondary text-lg leading-relaxed list-none m-0 p-0">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-cyan mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <p className="m-0">Monitor performance at a granular level through a comprehensive command center tracking metrics like conversion rates and objection handling efficiency.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-cyan mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <p className="m-0">Leverage AI-driven insights generated after every call to continually refine scripts and optimize operational strategy.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-3xl p-10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Native Bilingual Support</h3>
            <ul className="space-y-4 text-text-secondary text-lg leading-relaxed list-none m-0 p-0">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <p className="m-0">Break geographical barriers with agents capable of switching effortlessly between languages natively, maintaining cultural context throughout.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-accent-blue mt-2.5 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <p className="m-0">Expand your total addressable market instantly and service international accounts with uncompromising quality 24/7.</p>
              </li>
            </ul>
          </motion.div>

        </div>
      </section>
    </>
  );
};
