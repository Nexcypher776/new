import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NICHE_PROJECTS } from '../constants';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export const NichePortfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Shopify Dev' | 'Marketing' | 'AI Automation'>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const categories = ['All', 'Shopify Dev', 'Marketing', 'AI Automation'] as const;
  const filteredProjects = filter === 'All' ? NICHE_PROJECTS : NICHE_PROJECTS.filter(p => p.category === filter);

  const handleShare = (e: React.MouseEvent, platform: string, project: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Use the current page URL or fallback
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://nexcypher.com/portfolio';
    const url = encodeURIComponent(currentUrl);
    const text = encodeURIComponent(`Check out this ${project.category} project by Nexcypher: ${project.niche}`);
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }
    if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Diverse Expertise</h2>
          <p className="text-text-secondary text-lg mb-10">We’ve built and scaled stores in different industries</p>
          
          <div className="inline-flex items-center justify-center p-1.5 bg-[#111] border border-white/10 rounded-full mb-12 max-w-full overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 whitespace-nowrap ${
                  filter === cat ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="nicheTab"
                    className="absolute inset-0 bg-accent-blue rounded-full shadow-[0_0_15px_rgba(43,110,255,0.3)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
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
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="glass-card overflow-hidden relative group h-[300px]"
              >
                <img src={project.image} alt={project.niche} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
                  <Badge className="bg-accent-blue/20 text-accent-blue border-accent-blue/20 backdrop-blur-md mb-2">{project.category}</Badge>
                  
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col gap-2"
                      >
                        <button onClick={(e) => handleShare(e, 'twitter', project)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on Twitter">
                          <Twitter className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button onClick={(e) => handleShare(e, 'linkedin', project)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on LinkedIn">
                          <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button onClick={(e) => handleShare(e, 'facebook', project)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on Facebook">
                          <Facebook className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-2 pointer-events-auto w-fit">{project.niche}</h3>
                  <p className="text-sm text-text-secondary mb-6 line-clamp-2 pointer-events-auto">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
