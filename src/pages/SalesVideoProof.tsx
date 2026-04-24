import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Video, Target, Bot, TrendingUp } from 'lucide-react';

const VIDEO_PROOFS = [
  {
    title: "Shopify Store Sales Result",
    desc: "Walkthrough of an apparel brand scaling from $0 to $120k/mo in 90 days.",
    category: "Shopify Sales",
    previewColor: "bg-accent-blue/10"
  },
  {
    title: "Facebook Ads Alpha",
    desc: "Behind the scenes of a high-ROAS creative testing framework for electronics.",
    category: "Ads Performance",
    previewColor: "bg-accent-gold/10"
  },
  {
    title: "AI Booking Agent Live Call",
    desc: "Live recording of our autonomous agent qualifying and booking a high-ticket lead.",
    category: "AI Automation",
    previewColor: "bg-white/5"
  },
  {
    title: "Dropshipping Winning Product",
    desc: "How we identified and scaled a seasonal winner to $50k in two weeks.",
    category: "Shopify Sales",
    previewColor: "bg-accent-blue/5"
  },
  {
    title: "Google Ads Optimization",
    desc: "Reducing CPA by 40% using our custom keyword mapping strategy.",
    category: "Ads Performance",
    previewColor: "bg-accent-gold/5"
  },
  {
    title: "Customer Support AI Integration",
    desc: "Reducing support tickets by 70% while improving response times.",
    category: "AI Automation",
    previewColor: "bg-white/10"
  },
  {
    title: "High-Ticket Sales Funnel",
    desc: "Walkthrough of a lead generation system generating $20k+ clients consistently.",
    category: "Ads Performance",
    previewColor: "bg-accent-blue/10"
  },
  {
    title: "Shopify Speed Optimization",
    desc: "Improving conversion rates by 22% through technical performance upgrades.",
    category: "Shopify Sales",
    previewColor: "bg-accent-gold/10"
  },
  {
    title: "AI Lead Nurturing System",
    desc: "How our automated follow-up sequence recovered $15k in abandoned carts.",
    category: "AI Automation",
    previewColor: "bg-white/5"
  }
];

export const SalesVideoProof = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
      <Helmet>
        <title>Sales Video Proof | Nexcypher</title>
        <meta name="description" content="Watch how our AI calling agents and Shopify growth strategies generate real sales and revenue for our clients." />
        <meta name="keywords" content="Sales proof, AI agent results, Shopify growth video, Nexcypher reviews" />
      </Helmet>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Evidence of Excellence
        </Badge>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none"
        >
          Sales <br /> <span className="text-accent-blue">Video Proof.</span>
        </motion.h1>
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
          {['All Proof', 'Shopify Sales Results', 'Ads Performance', 'AI Automation Results'].map((tag, i) => (
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
          {VIDEO_PROOFS.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:border-accent-blue/30 transition-all duration-500"
            >
              {/* Video Placeholder Box */}
              <div className={`aspect-video w-full ${video.previewColor} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <Badge className="bg-accent-blue text-white border-none text-[8px] font-black uppercase tracking-widest">
                     Click to Play
                   </Badge>
                </div>
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-accent-blue transition-all duration-500 z-10">
                  <Play className="w-6 h-6 fill-current" />
                </div>
                {/* Decorative icons for niches */}
                <div className="absolute top-4 right-4 opacity-10">
                  {video.category.includes('Shopify') && <TrendingUp className="w-12 h-12" />}
                  {video.category.includes('Ads') && <Target className="w-12 h-12" />}
                  {video.category.includes('AI') && <Bot className="w-12 h-12" />}
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span className="text-[10px] font-black text-accent-blue uppercase tracking-widest italic">{video.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-accent-blue transition-colors">
                  {video.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                  {video.desc}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-white hover:text-accent-blue hover:bg-transparent flex items-center gap-2 group/btn">
                  <span className="text-[10px] font-black uppercase tracking-widest">Watch Walkthrough</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
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
