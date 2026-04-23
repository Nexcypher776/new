import { motion } from 'motion/react';
import { Clock, Briefcase, ShieldCheck, Award, MessageSquare, ExternalLink, CheckCircle2, ShoppingBag, Bot, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                About Nexcypher
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tighter">
                Engineering High-Performance <br />
                <span className="text-accent-blue">Digital Ecosystems</span> That Scale.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                I'm Chase, Co-founder of Nexcypher Team. At Nexcypher, we don't just build stores; we architect growth. Specializing in premium Shopify development, data-driven marketing, and cutting-edge AI automation, we empower brands to dominate their niche.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Experience', value: '5+ Years', icon: Clock },
                { label: 'Projects', value: '1000+', icon: Briefcase },
                { label: 'Platform', value: 'Fiverr Pro', icon: ShieldCheck },
                { label: 'Expertise', value: 'Multi-Niche', icon: Award },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent-blue mx-auto mb-2 opacity-70" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-text-secondary uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Conversion-focused Shopify stores',
                'High-performing marketing systems',
                'AI automation for business growth',
                'Fast communication & reliable support'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-14 font-bold shadow-lg shadow-accent-blue/20 flex items-center gap-2">
                Hire Me on Fiverr
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 h-14 font-bold flex items-center gap-2"
                onClick={() => window.open('https://wa.me/447465616990', '_blank')}
              >
                Chat on WhatsApp
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative group">
                <img 
                  src="https://imglink.cc/cdn/EKSMSiB2jK.png" 
                  alt="Chase portrait" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-2 md:-right-6 z-20 glass p-3 md:p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-text-secondary font-medium">Verified</p>
                  <p className="text-xs md:text-sm font-bold text-white">Shopify Expert</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-2 md:-left-10 z-20 glass p-3 md:p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 md:w-5 md:h-5 text-accent-purple" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-text-secondary font-medium">Specialist</p>
                  <p className="text-xs md:text-sm font-bold text-white">AI Agent Dev</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/20 to-accent-purple/20 rounded-[48px] blur-2xl -z-10 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
