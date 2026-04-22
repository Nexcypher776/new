import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PRICING } from '../constants';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Investment
          </Badge>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">Transparent Pricing</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business stage. No hidden fees, just growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[40px] flex flex-col h-full bg-white/[0.03] border border-white/10 relative overflow-hidden ${plan.popular ? 'border-accent-blue/50 ring-1 ring-accent-blue/50' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-1.5 px-6 bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-text-secondary text-sm">/ {plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className={`w-full h-14 rounded-2xl font-bold text-lg ${plan.popular ? 'bg-accent-blue text-white shadow-xl shadow-accent-blue/20' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
