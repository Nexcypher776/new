import { motion } from 'motion/react';
import { ShoppingCart, Cloud, Cpu, Gem, Heart } from 'lucide-react';
import { NichePortfolio } from '../components/NichePortfolio';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { SalesVideoProofSection } from '../components/SalesVideoProofSection';
import { SalesProofSection } from '../components/SalesProofSection';
import { Badge } from '@/components/ui/badge';

export const Portfolio = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
             
        <h1 className="sr-only">Scale Your Shopify Store with AI Automation & Proven Marketing Systems</h1>
<div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          The Proof
        </Badge>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          Built to <br /> <span className="text-accent-blue">Perform.</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          From high-end fashion to innovative tech startups, we've built the foundations for hundreds of global brands.
        </p>
      </div>

      <CaseStudiesSection />
      <NichePortfolio />
      <SalesProofSection />
      <SalesVideoProofSection />
      <VideoTestimonials />

      <section className="py-32 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter">Trusted Across Industries</h2>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
             <div className="group flex flex-col items-center gap-4 cursor-pointer">
               <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                 <ShoppingCart className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
               </div>
               <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">E-commerce</span>
             </div>
             <div className="group flex flex-col items-center gap-4 cursor-pointer">
               <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                 <Cloud className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
               </div>
               <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">SaaS</span>
             </div>
             <div className="group flex flex-col items-center gap-4 cursor-pointer">
               <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                 <Cpu className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
               </div>
               <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">Tech</span>
             </div>
             <div className="group flex flex-col items-center gap-4 cursor-pointer">
               <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                 <Gem className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
               </div>
               <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">Luxury</span>
             </div>
             <div className="group flex flex-col items-center gap-4 cursor-pointer">
               <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                 <Heart className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
               </div>
               <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">Health</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
