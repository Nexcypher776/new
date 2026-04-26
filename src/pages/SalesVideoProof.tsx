import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Video, Target, Bot, TrendingUp } from 'lucide-react';
import { SALES_VIDEO_PROOFS } from '../constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const SalesVideoProof = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="pt-44 md:pt-64 pb-32">
            
        
        <h1 className="sr-only">Scale Your Shopify Store with AI Automation & Proven Marketing Systems</h1>
<h2 className="sr-only">Scale Your Shopify Store with AI Automation & Proven Marketing Systems</h2>
{/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Evidence of Excellence
        </Badge>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none"
        >
          Sales <br /> <span className="text-accent-blue">Video Proof.</span>
        </motion.h2>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 italic">
          Real results. Real performance. Real growth.
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          Explore real video proof of sales, performance, and results from our work across different niches. 
          See the actual dashboards, live calls, and campaign data that drive our clients' success.
        </p>
      </div>

      {/* Video Categories (Optional Filter Style) */}
      <div className="max-w-7xl mx-auto px-6 mb-16 overflow-x-auto">
        <div className="flex items-center justify-center gap-4 min-w-max pb-4">
          {['All Proof'].map((tag, i) => (
            <button 
              key={tag}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                i === 0 ? 'bg-accent-blue border-accent-blue text-white' : 'bg-transparent border-white/10 text-text-secondary hover:border-white/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Video Section Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SALES_VIDEO_PROOFS.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVideo(video.videoUrl)}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:border-accent-blue/30 transition-all duration-500 cursor-pointer"
            >
              {/* Video Thumbnail Box */}
              <div className={`aspect-video w-full bg-accent-blue/5 relative flex items-center justify-center overflow-hidden`}>
                <img src={video.thumbnail} alt={video.clientName} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <Badge className="bg-accent-blue text-white border-none text-[8px] font-black uppercase tracking-widest">
                     Click to Play
                   </Badge>
                </div>
                <div className="w-16 h-16 rounded-full bg-accent-blue/80 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-accent-blue transition-all duration-500 z-10">
                  <Play className="w-6 h-6 fill-current" />
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span className="text-[10px] font-black text-accent-blue uppercase tracking-widest italic">{video.result}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accent-blue transition-colors">
                  {video.clientName}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                  Watch the latest case study and results breakdown.
                </p>
                <Button variant="ghost" className="p-0 h-auto text-white hover:text-accent-blue hover:bg-transparent flex items-center gap-2 group/btn">
                  <span className="text-[10px] font-black uppercase tracking-widest">Watch Walkthrough</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </Button>
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
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 md:p-24 rounded-[48px] bg-white/[0.03] border border-white/5 overflow-hidden text-center">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-blue/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-gold/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
              Ready to Get <br /> <span className="text-accent-blue">Results Like This?</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto">
              Our systems are proven. Whether it's Shopify growth or AI automation, we have the methodology to scale your brand with efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-12 h-20 text-2xl font-black italic uppercase tracking-tighter shadow-2xl shadow-accent-blue/20 group">
                  Get Started <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
