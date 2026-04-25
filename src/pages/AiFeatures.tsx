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
      
      {/* Content Placeholder Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 prose prose-invert prose-lg">
          <p className="text-text-secondary">
            More detailed information regarding Ai Features will be updated here. 
            Our team is engineering the best experience.
          </p>
        </div>
      </section>
    </>
  );
};
