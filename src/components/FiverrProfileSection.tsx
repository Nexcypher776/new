import { motion } from 'motion/react';
import { Star, CheckCircle2, Clock, Users, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { LOGO_URL } from '../constants';
import {
  MaskedWords,
  PREMIUM_EASE,
  VIEWPORT_ONCE,
  staggerContainerVariants,
  fastStaggerContainerVariants,
  textFadeUpVariants,
} from './MotionText';

export const FiverrProfileSection = () => {
  const fiverrUrl = "https://www.fiverr.com/nexcypher_us";
  
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1dbf73]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          whileHover={{ 
            scale: 1.01, 
            y: -8,
            transition: { type: "spring", stiffness: 400, damping: 17 } 
          }}
          transition={{ duration: 0.75, ease: PREMIUM_EASE }}
          className="glass-card p-8 md:p-16 relative overflow-hidden border-[#1dbf73]/20 shadow-2xl shadow-[#1dbf73]/5 cursor-default"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1dbf73] to-transparent opacity-50" />
          
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={textFadeUpVariants} className="relative mb-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-[#1dbf73] to-accent-blue shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-white/5 flex items-center justify-center p-4">
                  <img src={LOGO_URL} alt="Chase" className="w-full h-full object-contain" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#1dbf73] p-2 rounded-full shadow-lg border-2 border-background">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>

            <motion.div variants={textFadeUpVariants} className="mb-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">Chase</h3>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#1dbf73] text-[#1dbf73]" />
                ))}
                <span className="ml-2 text-white/60 text-sm font-bold uppercase tracking-widest">5.0 Rating</span>
              </div>
              <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
                Helping businesses build high-converting Shopify stores, AI agents, and scalable marketing systems
              </p>
            </motion.div>

            <motion.div variants={textFadeUpVariants} className="mb-12">
              <Badge className="mb-6 bg-[#1dbf73]/10 text-[#1dbf73] border-[#1dbf73]/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                Fiverr Pro Status
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-none">
                <MaskedWords text="Hire Me on" className="justify-center" />{' '}
                <MaskedWords text="Fiverr" baseDelay={0.14} className="text-[#1dbf73] justify-center" />
              </h2>
            </motion.div>

            <motion.div
              variants={fastStaggerContainerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12"
            >
              {[
                { icon: Clock, label: "5+ Years Experience", color: "text-blue-400" },
                { icon: Users, label: "1000+ Client Reviews", color: "text-[#1dbf73]" },
                { icon: Trophy, label: "Proven Results", color: "text-amber-400" }
              ].map((item, i) => (
                <motion.div key={i} variants={textFadeUpVariants} className="flex flex-col items-center p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group">
                  <item.icon className={`w-8 h-8 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <span className="text-white font-bold text-sm uppercase tracking-widest">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a variants={textFadeUpVariants} href={fiverrUrl} target="_blank" rel="noopener noreferrer" className="w-full group">
              <button className="w-full h-16 bg-[#1dbf73] hover:bg-[#1dbf73]/90 text-white rounded-2xl font-black text-xl tracking-tighter transition-all shadow-xl shadow-[#1dbf73]/20 flex items-center justify-center gap-3">
                View My Fiverr Profile
                <Star className="w-6 h-6 fill-white" />
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
