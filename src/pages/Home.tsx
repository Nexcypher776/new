import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { HeroSlider } from '../components/HeroSlider';
import { TrustedBrands } from '../components/TrustedBrands';
import { TrustSection } from '../components/TrustSection';
import { AiCallingAgentsPreview } from '../components/AiCallingAgentsPreview';
import { ShopifyGrowthPreview } from '../components/ShopifyGrowthPreview';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { FiverrProfileSection } from '../components/FiverrProfileSection';
import { GrowthChart } from '../components/GrowthChart';
import { Services } from '../components/Services';
import {
  MaskedWords,
  VIEWPORT_ONCE,
  staggerContainerVariants,
  textFadeUpVariants,
  cardFadeUpVariants,
} from '../components/MotionText';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nexcypher | Scale Your Shopify Store | High-Converting 2.0 Themes & AI Voice Agents</title>
        <meta name="description" content="Scale your e-commerce revenue with custom Shopify 2.0 stores engineered for high conversion rates (CRO), sub-second load speeds, and 24/7 autonomous AI calling agents. Trusted by 7-figure brand founders." />
        <meta name="keywords" content="Shopify store development, Shopify CRO agency, Shopify speed optimization, custom Shopify 2.0 themes, Shopify dropshipping scale, AI voice agents for ecommerce, Shopify Plus experts, high converting Shopify design, ecommerce revenue optimization, DTC Shopify agency" />
        <link rel="canonical" href="https://nexcypher.us/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcypher" />
        <meta property="og:title" content="Scale Your Shopify Store to $1M/mo | Custom 2.0 Design & AI Agents - Nexcypher" />
        <meta property="og:description" content="Turn ad clicks into profitable orders. Custom Shopify 2.0 architectures, conversion-focused UI/UX, checkout optimization, and autonomous AI sales callers." />
        <meta property="og:url" content="https://nexcypher.us/" />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nexcypher - High-Converting Shopify 2.0 Architecture & Autonomous AI Voice Agents" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nexcypher" />
        <meta name="twitter:creator" content="@nexcypher" />
        <meta name="twitter:title" content="Scale Your Shopify Store to $1M/mo | High-Converting 2.0 Themes - Nexcypher" />
        <meta name="twitter:description" content="Engineered for serious 6-8 figure e-commerce founders. Custom Shopify 2.0 stores, sub-second load times, CRO, and 24/7 autonomous AI voice agents." />
        <meta name="twitter:image" content="https://nexcypher.us/og-image.jpg" />
        <meta name="twitter:image:alt" content="Nexcypher High-Converting Shopify Agency Preview" />
      </Helmet>

      <h1 className="sr-only">Nexcypher - Scale Your Shopify Store with AI Automation & Proven Marketing Systems</h1>
      <HeroSlider />
      <TrustedBrands />
      <TrustSection />
      
      {/* Shortened About summary for home */}
      <section className="py-24 bg-background">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <MaskedWords text="Built for Billion-Dollar Scaling." className="justify-center" />
          </h2>
          <motion.p
            variants={textFadeUpVariants}
            className="text-text-secondary text-lg max-w-2xl mx-auto mb-10"
          >
            Nexcypher engineers high-performance Shopify ecosystems and AI voice agents for elite brands.
          </motion.p>
          <motion.div variants={textFadeUpVariants}>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white/10 text-white rounded-full px-8">
                Learn Our Mission <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Services />
      <AiCallingAgentsPreview />
      <ShopifyGrowthPreview />
      
      {/* Tools Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              <MaskedWords text="Explore Our Tools & Gallery" className="justify-center" />
            </h2>
            <motion.p
              variants={textFadeUpVariants}
              className="text-text-secondary text-lg max-w-2xl mx-auto border-b border-white/5 pb-10"
            >
              Discover opportunities, analyze your storefront, or find inspiration for your next Shopify build.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={cardFadeUpVariants} className="flex">
              <Link to="/store-design-gallery" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col items-center text-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Store Design Gallery</h3>
                <p className="text-text-secondary text-sm mb-6 flex-1">Explore premium Shopify homepage designs across multiple niches.</p>
                <div className="text-accent-blue font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Browse Designs <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>

            <motion.div variants={cardFadeUpVariants} className="flex">
              <Link to="/niche-research" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col items-center text-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 text-accent-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Niche Research Tool</h3>
                <p className="text-text-secondary text-sm mb-6 flex-1">Get a structural opportunity report and demand insights for your niche.</p>
                <div className="text-accent-gold font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Analyze Niche <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>

            <motion.div variants={cardFadeUpVariants} className="flex">
              <Link to="/store-audit" className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col items-center text-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Free Store Audit</h3>
                <p className="text-text-secondary text-sm mb-6 flex-1">Discover performance signals, SEO issues, and speed metrics.</p>
                <div className="text-accent-cyan font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Scan Store <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <VideoTestimonials />
      <FiverrProfileSection />

      <GrowthChart />

      {/* Global CTA */}
      <section className="py-32 bg-accent-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="max-w-7xl mx-auto px-6 relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
            <MaskedWords text="Ready to Dominate" className="justify-center" />
            <br className="hidden md:block" />
            <MaskedWords text="Your Niche?" baseDelay={0.18} className="justify-center" />
          </h2>
          <motion.div variants={textFadeUpVariants}>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 rounded-full px-12 h-16 text-xl font-bold">
                Start Your Project Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
