import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Bot, Phone, Calendar, HeartHandshake, RefreshCcw, 
  ShoppingBag, Rocket, TrendingUp, BarChart3, Settings,
  Facebook, Search, Play, 
  Globe, Mail, Share2, MapPin, ArrowRight
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    title: "AI Automation Services",
    icon: Bot,
    services: [
      { id: '1-1', title: "AI Calling Agents", desc: "Autonomous voice systems that handle lead calls 24/7.", icon: Phone, path: "/ai-calling-agents" },
      { id: '1-2', title: "Lead Qualification", desc: "Automated filtering of leads based on your specific criteria.", icon: BarChart3, path: "/contact" },
      { id: '1-3', title: "Appointment Booking", desc: "Sync leads directly into your calendar without manual input.", icon: Calendar, path: "/contact" },
      { id: '1-4', title: "Customer Support AI", desc: "Intelligent support agents for instant query resolution.", icon: HeartHandshake, path: "/contact" },
      { id: '1-5', title: "Follow-Up Systems", desc: "Omnichannel re-engagement through SMS, Email, and Voice.", icon: RefreshCcw, path: "/contact" }
    ]
  },
  {
    title: "Shopify & eCommerce Services",
    icon: ShoppingBag,
    services: [
      { id: '2-1', title: "Shopify Store Creation", desc: "Premium, high-converting storefronts built from scratch.", icon: ShoppingBag, path: "/shopify-growth" },
      { id: '2-2', title: "Dropshipping Setup", desc: "Niche research and winning product integration systems.", icon: Rocket, path: "/shopify-growth" },
      { id: '2-3', title: "Shopify Growth", desc: "Systems designed to scale revenue from $0 to $1M+.", icon: TrendingUp, path: "/shopify-growth" },
      { id: '2-4', title: "Shopify Marketing", desc: "High-ROAS customer acquisition frameworks.", icon: BarChart3, path: "/shopify-marketing" },
      { id: '2-5', title: "Store Optimization", desc: "CRO audit and speed improvements for better sales.", icon: Settings, path: "/shopify-growth" }
    ]
  },
  {
    title: "Paid Advertising Services",
    icon: Play,
    services: [
      { id: '3-1', title: "Facebook Ads", desc: "Social-first advertising for mass-market brands.", icon: Facebook, path: "/shopify-marketing" },
      { id: '3-2', title: "Google Ads", desc: "Search and Shopping ads targeting high-intent buyers.", icon: Search, path: "/shopify-marketing" },
      { id: '3-3', title: "TikTok Ads", desc: "Viral creative strategies and UGC-focused scaling.", icon: Play, path: "/shopify-marketing" }
    ]
  },
  {
    title: "Growth & Visibility Services",
    icon: Globe,
    services: [
      { id: '4-1', title: "SEO Optimization", desc: "Long-term organic traffic foundation and ranking.", icon: Globe, path: "/shopify-marketing" },
      { id: '4-2', title: "Email Marketing", desc: "Automated retention flows and high-conversion newsletters.", icon: Mail, path: "/contact" },
      { id: '4-3', title: "Social Media Marketing", desc: "Dynamic content strategies to build brand authority.", icon: Share2, path: "/shopify-marketing" },
      { id: '4-4', title: "Google Site Mapping", desc: "Indexing, search verification, and visibility setup.", icon: MapPin, path: "/shopify-marketing" }
    ]
  }
];

export const Services = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
            
        <h1 className="sr-only">Scale Your Shopify Store with AI Automation & Proven Marketing Systems</h1>
{/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Solutions Portfolio
        </Badge>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          Powering <br /> <span className="text-accent-blue">Digital Dominance.</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          Explore our specialized service categories designed to automate your business and accelerate your growth. 
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {SERVICE_CATEGORIES.map((category, catIndex) => (
          <section key={catIndex} className="space-y-12">
            <div className="flex items-center gap-4 border-b border-white/10 pb-8">
              <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center text-accent-blue">
                <category.icon className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, sIndex) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: sIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/50 group-hover:text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <Link to={service.path}>
                      <Button variant="ghost" className="w-full justify-between text-accent-blue hover:text-white hover:bg-accent-blue p-4 rounded-xl group-hover:bg-accent-blue/5">
                        <span className="font-bold uppercase tracking-widest text-[10px]">Learn More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Global CTA */}
      <section className="mt-48 max-w-7xl mx-auto px-6">
        <div className="p-12 md:p-20 rounded-[48px] bg-accent-blue relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[15deg] translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
                Not sure which service <br /> fits your needs?
              </h2>
              <p className="text-blue-100 text-lg">
                Book a free discovery call with Chase to map out your digital growth architecture.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 h-20 px-12 rounded-full font-black text-2xl italic uppercase tracking-tighter shadow-2xl">
                Consult Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
