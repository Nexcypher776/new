import { motion } from 'motion/react';
import { Pricing as PricingGrid } from '../components/Pricing';
import { Badge } from '@/components/ui/badge';

export const Pricing = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
             
        <h1 className="sr-only">Scale Your Shopify Store with AI Automation & Proven Marketing Systems</h1>
<div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          The Investment
        </Badge>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          Premium <br /> <span className="text-accent-blue">Value.</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          We don't offer cheap services. We offer high-ROI investments that pay for themselves through growth and efficiency.
        </p>
      </div>

      <PricingGrid />

      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-white mb-8">Custom Enterprise Solutions?</h2>
           <p className="text-text-secondary mb-10 leading-relaxed">
             Need a bespoke solution that doesn't fit into our standard packages? 
             We build custom enterprise-grade Shopify architectures and private AI infrastructures.
           </p>
           <button className="text-accent-blue font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto hover:gap-4 transition-all">
             Contact for Enterprise Quote →
           </button>
        </div>
      </section>
    </div>
  );
};
