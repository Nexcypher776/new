import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { SalesProofSection } from '../components/SalesProofSection';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, Users, Zap, Search, Globe, 
  ArrowRight, CheckCircle2, ChevronRight, Layout,
  Smartphone, BarChartHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    step: "Step 1",
    title: "Sales Funnel Setup",
    items: ["Form Page", "Thank You Page", "Landing Page", "Campaign Setup"],
    icon: Layout,
    color: "accent-blue"
  },
  {
    step: "Step 2",
    title: "Social Media Marketing",
    items: ["Facebook Page Setup", "Facebook Shop Setup", "Instagram Page and Catalog", "Facebook Pixel Setup"],
    icon: Users,
    color: "accent-blue"
  },
  {
    step: "Step 3",
    title: "Advertisement Setup",
    items: ["Facebook Ads", "Google Ads", "TikTok Ads"],
    icon: Zap,
    color: "accent-blue"
  },
  {
    step: "Step 4",
    title: "SEO Optimization",
    items: [
      "Keyword Research", "On-Page Optimization", "Internal Linking", 
      "Backlinking", "Mobile Optimization", "Performance Monitoring"
    ],
    icon: Search,
    color: "accent-blue"
  },
  {
    step: "Step 5",
    title: "Google Site Mapping & Verification",
    items: ["Website indexing", "Search visibility", "Organic traffic foundation"],
    icon: Globe,
    color: "accent-blue"
  }
];

export const ShopifyMarketing = () => {
  return (
    <div className="pt-44 md:pt-64 pb-32">
      <Helmet>
        <title>Shopify Marketing | Nexcypher</title>
        <meta name="description" content="Scale your Shopify store with Nexcypher's data-driven marketing, paid ads, and retention strategies." />
        <meta name="keywords" content="Shopify marketing, E-commerce ads, Paid social, Email marketing, SMS marketing" />
      </Helmet>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Marketing Framework
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
            Shopify <span className="text-accent-blue">Marketing.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 italic">
            Results are a step-by-step process.
          </h2>
          <div className="space-y-6 text-text-secondary text-lg max-w-3xl leading-relaxed">
            <p>
              At Nexcypher, we believe in transparency, strategy, and delivering exceptional results through structured execution. Our Shopify Marketing and Dropshipping services are designed to help brands increase visibility, attract the right audience, improve conversions, and build long-term growth.
            </p>
            <p>
              We do not promise instant sales. Real growth takes commitment, consistency, and the right systems. Our role is to guide your brand through a proven step-by-step process—leveraging Facebook Ads, TikTok Ads, Google Ads, robust Sales Funnels, Google Site Mapping, and Full SEO—that creates a stronger marketing foundation and better opportunities for scale.
            </p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
            <div className="space-y-8 sticky top-44 md:top-64 self-start">
              <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
                Our Proven <br /> <span className="text-accent-blue">Scaling Roadmap.</span>
              </h3>
              <p className="text-text-secondary text-lg">
                We follow a rigorous methodological approach to ensure every marketing dollar is spent with purpose. 
              </p>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                 <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                       <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    </div>
                    <p className="text-white font-bold">Scientific Methodology</p>
                 </div>
                 <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                       <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    </div>
                    <p className="text-white font-bold">Data-Driven Evolution</p>
                 </div>
              </div>
            </div>

            <div className="space-y-12">
              {STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 transition-all hover:bg-white/[0.04]"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue font-black italic text-xl group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="space-y-4 flex-1">
                      <div>
                        <p className="text-accent-blue font-black uppercase tracking-[0.2em] text-[10px] mb-2">{step.step}</p>
                        <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">{step.title}</h4>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                            <ChevronRight className="w-4 h-4 text-accent-blue shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
           <div className="w-20 h-20 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-12">
              <BarChartHorizontal className="w-10 h-10 text-accent-blue" />
           </div>
           <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
             Our team combines strategy, execution, and performance-focused systems to help businesses build stronger visibility, better conversion paths, and sustainable growth.
           </p>
           <p className="text-text-secondary text-lg">
             Partner with Nexcypher to create a marketing foundation built for long-term results.
           </p>
           <Link to="/contact">
             <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-12 h-20 font-black text-2xl italic uppercase tracking-tighter mt-8 shadow-2xl shadow-accent-blue/20">
               Build My Foundation
             </Button>
           </Link>
        </div>
      </section>

      <SalesProofSection />
      <VideoTestimonials />

      <section className="py-32 bg-accent-blue text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
                Ready for <br /> Real Growth?
              </h1>
              <p className="text-blue-100 text-lg font-medium">
                No shortcuts. Just high-velocity execution and proven strategy. 
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 rounded-full px-12 h-20 text-2xl font-black italic uppercase tracking-tighter">
                Apply to Start
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
