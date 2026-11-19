import { motion } from 'motion/react';
import { ShieldCheck, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    title: "Fiverr Pro Status",
    description: "Vetted as the top 1% of digital talent globally. This elite status signifies our commitment to professional excellence and high-tier project delivery.",
    icon: ShieldCheck,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20"
  },
  {
    title: "Specialized Expertise",
    description: "We don't do everything—we do Shopify, AI, and Marketing better than anyone. Our team of 10+ specialists focus exclusively on what drives growth.",
    icon: Cpu,
    color: "text-accent-blue",
    bgColor: "bg-accent-blue/10",
    borderColor: "border-accent-blue/20"
  },
  {
    title: "Proven Results",
    description: "With 1,000+ client reviews and a consistent 5.0 rating, we have a documented track record of transforming digital presence into measurable ROI.",
    icon: TrendingUp,
    color: "text-accent-purple",
    bgColor: "bg-accent-purple/10",
    borderColor: "border-accent-purple/20"
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              The Nexcypher Edge
            </Badge>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
              Why Choose <br /><span className="text-accent-blue">Nexcypher?</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
              We provide the specialized tools and elite strategies that modern brands need to dominate their competition.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-[background-color,transform] duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {[...Array(3)].map((_, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-text-secondary">
                    <div className={`w-5 h-5 rounded-full ${feature.bgColor} flex items-center justify-center shrink-0`}>
                      <CheckCircle2 className={`w-3 h-3 ${feature.color}`} />
                    </div>
                    <span className="font-medium">
                      {i === 0 && j === 0 && "Government Identity Verified"}
                      {i === 0 && j === 1 && "Top 1% Global Talent"}
                      {i === 0 && j === 2 && "Elite Communication"}
                      {i === 1 && j === 0 && "Certified Shopify Experts"}
                      {i === 1 && j === 1 && "AI Automation Specialists"}
                      {i === 1 && j === 2 && "Full-Stack Marketing"}
                      {i === 2 && j === 0 && "1,000+ Success Stories"}
                      {i === 2 && j === 1 && "5.0/5.0 Average Rating"}
                      {i === 2 && j === 2 && "Data-Driven ROI Focus"}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
