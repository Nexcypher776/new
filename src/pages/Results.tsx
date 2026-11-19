import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { SalesProofSection } from '../components/SalesProofSection';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { Badge } from '@/components/ui/badge';
import { Trophy, Play, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Results = () => {
  const canonicalUrl = "https://nexcypher.us/results";

  return (
    <>
      <Helmet>
        <title>Client Revenue Results & Video Sales Proof | Nexcypher</title>
        <meta name="description" content="View verified Shopify store revenue screenshots, video dashboard walkthroughs, and client testimonial proof from Nexcypher client scaling projects." />
        <meta name="keywords" content="Shopify store revenue proof, ecommerce case studies, Shopify dropshipping results, client sales dashboards, Shopify growth proof" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcypher" />
        <meta property="og:title" content="Client Revenue Results & Verified Sales Proof | Nexcypher" />
        <meta property="og:description" content="Verified Shopify store revenue screenshots and video dashboard walkthroughs for 6-8 figure scaling brands." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nexcypher Verified Client Results" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nexcypher" />
        <meta name="twitter:title" content="Shopify Client Revenue Results & Proof | Nexcypher" />
        <meta name="twitter:description" content="Verified Shopify store revenue screenshots and video dashboard walkthroughs." />
        <meta name="twitter:image" content="https://nexcypher.us/og-image.jpg" />
      </Helmet>

      <div className="pt-44 md:pt-64 pb-32">
        <h1 className="sr-only">Nexcypher Client Revenue Results & Proof of Performance</h1>
        {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Proof of Concept
        </Badge>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          Real Results. <br /> <span className="text-accent-blue">Real Alpha.</span>
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          We don't sell dreams. We deliver measurable growth. Explore our verified video sales proof and revenue performance screenshots.
        </p>
      </div>

      {/* Video Sales Proof Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-4">
                Video <span className="text-accent-blue">Case Studies.</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Behind-the-scenes walkthroughs of our most successful campaigns and store launches.
              </p>
            </div>
          </div>
        </div>
        <VideoTestimonials />
      </section>

      {/* Revenue Proof Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic mb-4">
                Verified <span className="text-accent-blue">Revenue.</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Raw data from Shopify dashboards, Ad Managers, and AI automation logs.
              </p>
            </div>
          </div>
        </div>
        <SalesProofSection />
      </section>

      {/* Trust Stats */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, label: "Verified Claims", val: "100%" },
              { icon: Trophy, label: "Total Revenue Generated", val: "$50M+" },
              { icon: Star, label: "Average ROAS", val: "4.2x" }
            ].map((stat, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white/[0.03] border border-white/10 text-center group cursor-default h-full flex flex-col items-center justify-center">
                <stat.icon className="w-10 h-10 text-accent-blue mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-black text-white mb-2 italic uppercase tracking-tighter">{stat.val}</p>
                <p className="text-text-secondary uppercase tracking-widest font-bold text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-accent-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-8">
            Be Our Next <span className="text-black">Success Story.</span>
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
            Our systems work. The only question is if you're ready to handle the volume we generate.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-accent-blue hover:bg-gray-100 rounded-full px-16 h-20 text-2xl font-black italic uppercase tracking-tighter shadow-2xl">
              Apply to Scale
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};
