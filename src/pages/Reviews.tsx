import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TextTestimonials } from '@/components/TextTestimonials';
import { VideoTestimonials } from '@/components/VideoTestimonials';

export const Reviews = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Client Reviews & Testimonials | Nexcypher</title>
        <meta name="description" content="Read verified client reviews and video testimonials from Shopify brands scaling revenue and automation with Nexcypher." />
        <meta name="keywords" content="Nexcypher reviews, client testimonials, Shopify agency reviews" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Client Reviews & Testimonials | Nexcypher" />
        <meta property="og:description" content="Read verified client reviews and video testimonials from Shopify brands scaling with Nexcypher." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <h1 className="sr-only">Client Reviews & Testimonials | Nexcypher</h1>

      <section className="pt-48 md:pt-60 pb-20 md:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                Reviews
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight mx-auto max-w-4xl">
              Client Reviews & Testimonials
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              See what our clients have to say. Read real reviews and testimonials from brands that scaled with Nexcypher.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest shadow-lg shadow-accent-blue/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <TextTestimonials />
      <VideoTestimonials />
    </>
  );
};
