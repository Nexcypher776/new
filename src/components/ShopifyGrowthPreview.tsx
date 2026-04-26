import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, Target, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export const ShopifyGrowthPreview = () => {
  return (
    <section id="shopify-growth" className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 glass-card p-6 border-accent-blue/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200" 
                  alt="Shopify Growth Dashboard"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-12 text-center">
                   <div className="w-16 h-16 bg-accent-blue/30 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-4xl font-bold text-white mb-2">+450%</h3>
                   <p className="text-accent-cyan font-bold uppercase tracking-widest text-sm">Revenue Growth</p>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-accent-blue/20 rounded-full blur-[100px] -z-10 opacity-30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <Badge className="bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                Scaling Logic
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
                Shopify Growth <br />
                <span className="text-accent-blue">Powered by Data.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                We don't just build stores; we engineer growth engines. From high-converting UI/UX to aggressive multi-channel marketing, we scale your Shopify brand through evidence-based strategies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShoppingBag, title: 'Premium Theme Dev', desc: 'Custom 2.0 themes built for speed.' },
                { icon: BarChart3, title: 'ROAS Optimization', desc: 'Squeeze every cent from your ad spend.' },
                { icon: Target, title: 'Market Dominance', desc: 'Crush your competitors in any niche.' },
                { icon: TrendingUp, title: 'Retention Systems', desc: 'Turn one-time buyers into loyal fans.' },
              ].map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">{feature.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 max-w-full w-full">
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="url" 
                    placeholder="Enter your store URL" 
                    className="bg-white/5 border-white/10 text-white h-14 flex-1 rounded-2xl focus:border-accent-blue/50 focus:ring-accent-blue/20"
                    required
                  />
                  <Button type="submit" size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white font-bold h-14 rounded-2xl px-8 shadow-xl shadow-accent-blue/10 shrink-0 group w-full sm:w-auto">
                    Get Free Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-xs text-text-secondary/70 pl-2">Provide your exact Shopify URL (e.g., storename.myshopify.com) or custom domain for a comprehensive growth analysis.</p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
