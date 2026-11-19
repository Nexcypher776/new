import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, Target, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  MaskedWords,
  PREMIUM_EASE,
  VIEWPORT_ONCE,
  staggerContainerVariants,
  fastStaggerContainerVariants,
  textFadeUpVariants,
} from './MotionText';

export const ShopifyGrowthPreview = () => {
  return (
    <section id="shopify-growth" className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: PREMIUM_EASE }}
            viewport={VIEWPORT_ONCE}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 glass-card p-6 border-accent-blue/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=75&w=900" 
                  alt="Shopify Growth Dashboard"
                  width={900}
                  height={675}
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT_ONCE}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm p-12 text-center"
                >
                   <motion.div variants={textFadeUpVariants} className="w-16 h-16 bg-accent-blue/30 rounded-full flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                   </motion.div>
                   <motion.h3 variants={textFadeUpVariants} className="text-4xl font-bold text-white mb-2 tabular-nums">+450%</motion.h3>
                   <motion.p variants={textFadeUpVariants} className="text-accent-cyan font-bold uppercase tracking-widest text-sm">Revenue Growth</motion.p>
                </motion.div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16)_0%,transparent_65%)] -z-10 pointer-events-none" />
          </motion.div>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.div variants={textFadeUpVariants}>
                <Badge className="bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  Scaling Logic
                </Badge>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
                <MaskedWords text="Shopify Growth" />
                <br />
                <MaskedWords text="Powered by Data." baseDelay={0.14} className="text-accent-blue" />
              </h2>
              <motion.p
                variants={textFadeUpVariants}
                className="text-text-secondary text-lg leading-relaxed max-w-xl"
              >
                We don't just build stores; we engineer growth engines. From high-converting UI/UX to aggressive multi-channel marketing, we scale your Shopify brand through evidence-based strategies.
              </motion.p>
            </div>

            <motion.div
              variants={fastStaggerContainerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                { icon: ShoppingBag, title: 'Premium Theme Dev', desc: 'Custom 2.0 themes built for speed.' },
                { icon: BarChart3, title: 'ROAS Optimization', desc: 'Squeeze every cent from your ad spend.' },
                { icon: Target, title: 'Market Dominance', desc: 'Crush your competitors in any niche.' },
                { icon: TrendingUp, title: 'Retention Systems', desc: 'Turn one-time buyers into loyal fans.' },
              ].map((feature, i) => (
                <motion.div key={i} variants={textFadeUpVariants} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">{feature.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={textFadeUpVariants} className="pt-2 max-w-full w-full">
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
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
