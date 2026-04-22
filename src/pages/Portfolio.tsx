import { motion } from 'motion/react';
import { NichePortfolio } from '../components/NichePortfolio';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { SalesProofSection } from '../components/SalesProofSection';
import { Badge } from '@/components/ui/badge';

export const Portfolio = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
       <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          The Proof
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          Built to <br /> <span className="text-accent-blue">Perform.</span>
        </h1>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          From high-end fashion to innovative tech startups, we've built the foundations for hundreds of global brands.
        </p>
      </div>

      <CaseStudiesSection />
      <NichePortfolio />
      <SalesProofSection />
      <VideoTestimonials />

      <section className="py-32 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter">Trusted Across Industries</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Partner logos or industry icons could go here */}
             <span className="text-white text-xl font-black tracking-tighter uppercase italic">E-COM</span>
             <span className="text-white text-xl font-black tracking-tighter uppercase italic">SAAS</span>
             <span className="text-white text-xl font-black tracking-tighter uppercase italic">TECH</span>
             <span className="text-white text-xl font-black tracking-tighter uppercase italic">LUXURY</span>
             <span className="text-white text-xl font-black tracking-tighter uppercase italic">HEALTH</span>
          </div>
        </div>
      </section>
    </div>
  );
};
