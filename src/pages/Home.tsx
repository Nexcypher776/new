import { motion } from 'motion/react';
import { HeroSlider } from '../components/HeroSlider';
import { TrustSection } from '../components/TrustSection';
import { AboutSection } from '../components/AboutSection';
import { AiCallingAgentsPreview } from '../components/AiCallingAgentsPreview';
import { ShopifyGrowthPreview } from '../components/ShopifyGrowthPreview';
import { NicheResearchTool } from '../components/NicheResearchTool';
import { WebsiteAuditTool } from '../components/WebsiteAuditTool';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { FiverrProfileSection } from '../components/FiverrProfileSection';
import { GrowthChart } from '../components/GrowthChart';
import { Services } from '../components/Services';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <TrustSection />
      
      {/* Shortened About summary for home */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Billion-Dollar Scaling.</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            Nexcypher engineers high-performance Shopify ecosystems and AI voice agents for elite brands.
          </p>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-white/10 text-white rounded-full px-8">
              Learn Our Mission <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Services />
      <AiCallingAgentsPreview />
      <ShopifyGrowthPreview />
      
      <NicheResearchTool />
      <WebsiteAuditTool />

      <VideoTestimonials />
      <FiverrProfileSection />

      <GrowthChart />

      {/* Global CTA */}
      <section className="py-32 bg-accent-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
            Ready to Dominate <br className="hidden md:block" /> Your Niche?
          </h2>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 rounded-full px-12 h-16 text-xl font-bold">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
