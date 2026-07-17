import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { SALES_PROOFS } from '../constants';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export const SalesProofSection = () => {
  const [hoveredProof, setHoveredProof] = useState<string | null>(null);

  const handleShare = (e: React.MouseEvent, platform: string, proof: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Use the current page URL or fallback
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://nexcypher.com/results';
    const url = encodeURIComponent(currentUrl);
    const text = encodeURIComponent(`Check out this result by Nexcypher: ${proof.title}`);
    
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
              onHoverStart={() => setHoveredProof(proof.id)}
              onHoverEnd={() => setHoveredProof(null)}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img src={proof.image} alt={proof.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-accent-blue text-white border-none shadow-lg">{proof.label}</Badge>
                </div>
                
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                  <AnimatePresence>
                    {hoveredProof === proof.id && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col gap-2"
                      >
                        <button onClick={(e) => handleShare(e, 'twitter', proof)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on Twitter">
                          <Twitter className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button onClick={(e) => handleShare(e, 'linkedin', proof)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on LinkedIn">
                          <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button onClick={(e) => handleShare(e, 'facebook', proof)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on Facebook">
                          <Facebook className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
