import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Star, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VIDEO_TESTIMONIALS } from '../constants';

export const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleShare = (e: React.MouseEvent, platform: string, video: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://nexcypher.com/results';
    const url = encodeURIComponent(currentUrl);
    const text = encodeURIComponent(`Watch this testimonial by ${video.clientName} about Nexcypher's results!`);
    
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
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Social Proof
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Real Clients. Real Results.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group relative cursor-pointer"
              onClick={() => setSelectedVideo(video.videoUrl)}
              onHoverStart={() => setHoveredVideo(video.id)}
              onHoverEnd={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video">
                <img src={video.thumbnail} alt={video.clientName} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center shadow-xl shadow-accent-blue/40 group-hover:scale-110 transition-transform">
                    <Play className="text-white w-8 h-8 fill-white" />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                  <AnimatePresence>
                    {hoveredVideo === video.id && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex flex-col gap-2"
                      >
                        <button onClick={(e) => handleShare(e, 'twitter', video)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on Twitter">
                          <Twitter className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button onClick={(e) => handleShare(e, 'linkedin', video)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on LinkedIn">
                          <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                        <button onClick={(e) => handleShare(e, 'facebook', video)} className="p-2 bg-black/60 hover:bg-accent-blue/90 text-white rounded-full backdrop-blur-sm border border-white/10 transition-colors shadow-lg group/btn" aria-label="Share on Facebook">
                          <Facebook className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{video.clientName}</h3>
                <p className="text-accent-cyan font-bold text-sm tracking-wide uppercase">{video.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-white/10 overflow-hidden">
            <DialogHeader className="p-4 border-b border-white/5">
              <DialogTitle className="text-white">Client Testimonial</DialogTitle>
            </DialogHeader>
            <div className="aspect-video w-full">
              {selectedVideo && (
                <iframe
                  src={selectedVideo.includes('vimeo.com') 
                      ? `https://player.vimeo.com/video/${getVimeoId(selectedVideo)}?autoplay=1` 
                      : `https://www.youtube.com/embed/${getYoutubeId(selectedVideo)}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
