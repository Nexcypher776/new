import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VIDEO_TESTIMONIALS } from '../constants';

export const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
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
            >
              <div className="relative aspect-video">
                <img src={video.thumbnail} alt={video.clientName} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center shadow-xl shadow-accent-blue/40 group-hover:scale-110 transition-transform">
                    <Play className="text-white w-8 h-8 fill-white" />
                  </div>
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
                  src={`https://player.vimeo.com/video/${getVimeoId(selectedVideo)}?autoplay=1`}
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
