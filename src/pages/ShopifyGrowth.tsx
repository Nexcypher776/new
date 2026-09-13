import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ShopifyGrowthPreview } from '../components/ShopifyGrowthPreview';
import { SalesProofSection } from '../components/SalesProofSection';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, TrendingUp, Target, BarChart3, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ShopifyGrowth = () => {
  const canonicalUrl = "https://nexcypher.us/shopify-growth";

  return (
    <>
      <Helmet>
        <title>Shopify Growth Systems | 0 to $1M/mo Scaling & CRO - Nexcypher</title>
        <meta name="description" content="Scale your Shopify store with high-velocity sales engines, custom 2.0 architectures, speed optimization, and CRO strategies engineered for 7-8 figure brands." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Shopify Growth Systems | Nexcypher" />
        <meta property="og:description" content="Billion-dollar Shopify systems engineered for rapid revenue scaling and conversion rate optimization." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-44 md:pt-64 pb-32">
        <h1 className="sr-only">Shopify Growth & Scale Architecture - Nexcypher</h1>
        <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Scaling Logic
        </Badge>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          Billion-Dollar <br /> <span className="text-accent-cyan">Shopify Systems.</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          We don't just build stores. We engineer high-velocity sales engines. From 0 to $1M/mo, we have the roadmap.
        </p>
      </div>

      <ShopifyGrowthPreview />

      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-4">
                      <div className="glass-card p-8 bg-accent-blue/10 border-accent-blue/20">
                         <h3 className="text-3xl font-black text-white mb-1">94%</h3>
                         <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Avg Conversion Lift</p>
                      </div>
                      <div className="glass-card p-8 bg-green-500/10 border-green-500/20">
                         <h3 className="text-3xl font-black text-white mb-1">4.2x</h3>
                         <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Avg Ad ROAS</p>
                      </div>
                   </div>
                   <div className="space-y-4 translate-y-8">
                      <div className="glass-card p-8 bg-accent-purple/10 border-accent-purple/20">
                         <h3 className="text-3xl font-black text-white mb-1">₹850M+</h3>
                         <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Client Revenue</p>
                      </div>
                      <div className="glass-card p-8 bg-white/5 border-white/10">
                         <h3 className="text-3xl font-black text-white mb-1">1000+</h3>
                         <p className="text-xs text-text-secondary uppercase font-bold tracking-widest">Stores Built</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="space-y-8">
                <h2 className="text-4xl font-bold text-white tracking-tighter">Your Full-Stack <br /> Growth Partner.</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Most agencies hand you a store and leave. We hand you a machine. Our Shopify Growth service includes:
                </p>
                <div className="grid gap-6">
                   {[
                     "Custom Shopify 2.0 Theme Engineering",
                     "Multi-Channel Ad Management (Meta, TikTok, Google)",
                     "Landing Page Optimization & CRO",
                     "Backend LTV & E-mail Automations"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-white font-medium italic">
                        <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0" />
                        {item}
                     </div>
                   ))}
                </div>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent-cyan hover:bg-accent-cyan/90 text-black rounded-full px-10 h-16 font-bold text-lg shadow-xl shadow-accent-cyan/20">
                    Audit My Store <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>

      <SalesProofSection />
      </div>
    </>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
