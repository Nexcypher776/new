import { motion } from 'motion/react';
import { Clock, Briefcase, Users, ShieldCheck } from 'lucide-react';

export const TrustSection = () => {
  const stats = [
    { label: 'Experience', value: '5+ Years', icon: Clock, color: 'text-accent-blue' },
    { label: 'Projects Completed', value: '1000+', icon: Briefcase, color: 'text-accent-gold' },
    { label: 'Team Experts', value: '10 professionals', icon: Users, color: 'text-accent-cyan' },
    { label: 'Success Rate', value: '98%', icon: ShieldCheck, color: 'text-accent-purple' },
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all hover:border-accent-gold/30"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4 opacity-80 group-hover:scale-110 transition-transform`} />
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-text-secondary uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
