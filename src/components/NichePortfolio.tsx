import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NICHE_PROJECTS } from '../constants';

export const NichePortfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Shopify Dev' | 'Marketing' | 'AI Automation'>('All');
  const categories = ['All', 'Shopify Dev', 'Marketing', 'AI Automation'] as const;
  const filteredProjects = filter === 'All' ? NICHE_PROJECTS : NICHE_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Diverse Expertise</h2>
          <p className="text-text-secondary text-lg mb-10">We’ve built and scaled stores in different industries</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  filter === cat ? 'bg-accent-blue border-accent-blue text-white shadow-lg' : 'bg-white/5 border-white/10 text-text-secondary hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden relative group h-[300px]"
              >
                <img src={project.image} alt={project.niche} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-6 right-6 z-10">
                  <Badge className="bg-accent-blue/20 text-accent-blue border-accent-blue/20 backdrop-blur-md">{project.category}</Badge>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.niche}</h3>
                  <p className="text-sm text-text-secondary mb-6 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
