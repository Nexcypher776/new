import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { SALES_PROOFS } from '../constants';

export const SalesProofSection = () => {
  return (
    <section className="py-32 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Evidence
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Proven Results</h2>
          <p className="text-text-secondary text-lg">Real screenshots from Shopify dashboards and ad managers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SALES_PROOFS.map((proof) => (
            <motion.div
              key={proof.id}
              whileHover={{ scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img src={proof.image} alt={proof.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent-blue text-white border-none shadow-lg">{proof.label}</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">{proof.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
