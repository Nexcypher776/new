import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FAQS } from '@/constants';
import { useState } from 'react';

export const FAQ = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Nexcypher</title>
        <meta name="description" content="Find answers to common questions about our Shopify services, AI calling agents, pricing, and how we help brands scale." />
        <meta name="keywords" content="Nexcypher FAQ, Shopify agency questions, AI automation FAQ" />
        <link rel="canonical" href={canonicalUrl} />
        {schemaData && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
        )}
      </Helmet>
      
      <h1 className="sr-only">Frequently Asked Questions (FAQ) | Nexcypher</h1>

      <section className="pt-32 pb-24 bg-background min-h-[50vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                F A Q
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Frequently Asked Questions
            </h2>
            
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              Find answers to common questions about our Shopify services, AI calling agents, pricing, and how we help brands scale.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
      
      <section className="py-24 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-bold text-white pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-accent-blue flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-text-secondary text-lg leading-relaxed border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
