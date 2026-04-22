import { motion } from 'motion/react';
import { AboutSection } from '../components/AboutSection';
import { TrustSection } from '../components/TrustSection';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Who We Are
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          The Architects <br /> of Growth.
        </h1>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          Nexcypher was founded on a simple principle: conventional digital services don't cut it for elite brands. 
          We engineer systems that don't just work—they dominate.
        </p>
      </div>

      <AboutSection />
      
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter leading-tight">
            Our Vision for the <br /> <span className="text-accent-blue uppercase font-black italic">Next Cypher</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-xl flex items-center gap-3 italic">
                <span className="text-accent-blue">/01</span> Radical Innovation
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We don't follow trends. We use cutting-edge AI and advanced Shopify architectures to stay 2 years ahead of the market.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold text-xl flex items-center gap-3 italic">
                <span className="text-accent-blue">/02</span> Relentless Execution
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Strategy is nothing without speed. We build fast, move fast, and scale faster. Your growth is our only KPI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
    </div>
  );
};
