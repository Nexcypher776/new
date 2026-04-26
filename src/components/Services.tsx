import { motion } from 'motion/react';
import { ShoppingBag, Bot, Megaphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Services = () => {
  const services = [
    { title: "Shopify Development", desc: "Premium theme development, full store setup, and data migration.", icon: ShoppingBag, colorClasses: "bg-accent-blue/10 text-accent-blue" },
    { title: "AI Calling Agents", desc: "Autonomous AI agents that handle outbound sales and inbound support.", icon: Bot, colorClasses: "bg-accent-gold/10 text-accent-gold" },
    { title: "Shopify Growth/Scaling", desc: "Multi-channel marketing (TikTok, FB, Google) and ROAS optimization.", icon: Megaphone, colorClasses: "bg-accent-cyan/10 text-accent-cyan" },
    { title: "UX/UI Design", desc: "Conversion-optimized design that turns visitors into loyal customers.", icon: TrendingUp, colorClasses: "bg-accent-purple/10 text-accent-purple" },
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Expertise
          </Badge>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Growth Engineered.</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We provide the full stack of technology and marketing services needed to scale your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 group hover:border-accent-blue/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${service.colorClasses}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-8">{service.desc}</p>
              </div>
              <Button variant="ghost" className="p-0 text-white flex items-center gap-2 font-bold w-fit hover:bg-transparent hover:text-accent-blue transition-colors">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
