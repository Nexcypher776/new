import { motion } from 'motion/react';
import { Bot, Phone, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MaskedWords,
  PREMIUM_EASE,
  VIEWPORT_ONCE,
  staggerContainerVariants,
  fastStaggerContainerVariants,
  textFadeUpVariants,
} from './MotionText';

export const AiCallingAgentsPreview = () => {
  return (
    <section id="ai-calling-agents" className="py-32 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div variants={textFadeUpVariants}>
                <Badge className="bg-accent-gold/10 text-accent-gold border-accent-gold/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  The Future of Sales
                </Badge>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
                <MaskedWords text="AI Voice Agents That" />
                <br />
                <MaskedWords text="Close Deals 24/7." baseDelay={0.18} className="text-accent-gold" />
              </h2>
              <motion.p
                variants={textFadeUpVariants}
                className="text-text-secondary text-lg leading-relaxed max-w-xl"
              >
                Replace your expensive call center with high-performance AI agents. They handle lead qualification, appointment booking, and customer support with perfect human-like speed and tone.
              </motion.p>
            </div>

            <motion.div
              variants={fastStaggerContainerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Phone, title: 'Inbound & Outbound', desc: 'Place calls and receive inquiries instantly.' },
                { icon: Zap, title: '100% Latency-Free', desc: 'Conversations as smooth as real humans.' },
                { icon: ShieldCheck, title: 'CRM Integration', desc: 'Sync leads directly to your database.' },
                { icon: Bot, title: 'Bilingual Support', desc: 'Speak to customers in 50+ languages.' },
              ].map((feature, i) => (
                <motion.div key={i} variants={textFadeUpVariants} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold">{feature.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={textFadeUpVariants}>
              <Button size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-black font-bold h-14 rounded-full px-8 shadow-xl shadow-accent-gold/10 group">
                Explore AI Agents <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: PREMIUM_EASE }}
            viewport={VIEWPORT_ONCE}
            className="relative"
          >
            <div className="relative z-10 glass-card p-6 border-accent-gold/20">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200" 
                  alt="AI Agent Visualization"
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                loading="lazy" decoding="async" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                   <div className="text-center p-8">
                      <Bot className="w-16 h-16 text-accent-gold mx-auto mb-4 animate-bounce" />
                      <p className="text-white font-mono text-sm uppercase tracking-widest bg-black/60 px-4 py-2 rounded-full border border-accent-gold/30">
                        Agent Active _
                      </p>
                   </div>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-accent-gold/20 rounded-full blur-[100px] -z-10 opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
