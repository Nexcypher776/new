import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { TrustSection } from '../components/TrustSection';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const canonicalUrl = "https://nexcypher.us/about";

  return (
    <>
      <Helmet>
        <title>About Nexcypher | Elite Shopify Development & AI Automation Agency</title>
        <meta name="description" content="Discover the mission, philosophy, and proven results behind Nexcypher - engineering high-performance Shopify storefronts and autonomous AI voice agents." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="About Nexcypher | Elite Shopify & AI Agency" />
        <meta property="og:description" content="Discover the mission, philosophy, and engineering behind Nexcypher's high-performance ecommerce solutions." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-44 md:pt-64 pb-32">
        <h1 className="sr-only">About Nexcypher - Shopify & AI Growth Agency</h1>
        <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Who We Are
        </Badge>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
          The Architects <br /> of Growth.
        </h2>
        <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
          Nexcypher was founded on a simple principle: conventional digital services don't cut it for elite brands. 
          We engineer systems that don't just work—they dominate.
        </p>
      </div>

      <AboutSection />
      
      <WhyChooseSection />
      
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter leading-tight">
            Our Vision for the <br /> <span className="text-accent-blue uppercase font-black italic">Next Cypher</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h3 className="text-white font-bold text-xl flex items-center gap-3 italic">
                <span className="text-accent-blue">/01</span> Radical Innovation
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We don't follow trends. We use cutting-edge AI and advanced Shopify architectures to stay 2 years ahead of the market.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-bold text-xl flex items-center gap-3 italic">
                <span className="text-accent-blue">/02</span> Relentless Execution
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Strategy is nothing without speed. We build fast, move fast, and scale faster. Your growth is our only KPI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-black">
         <div className="max-w-6xl mx-auto px-6">
            <div className="mb-20 text-center">
               <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">The Nexcypher Team</h2>
               <p className="text-text-secondary max-w-2xl mx-auto">A global collective of engineers, designers, and growth experts led by Chase, operating across multiple regions to deliver 24/7 excellence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Chase - Founder */}
               <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center col-span-1 md:col-span-3 lg:col-span-1 lg:max-w-sm mx-auto w-full group hover:border-accent-blue/30 transition-colors">
                 <div className="w-24 h-24 rounded-full bg-accent-blue/20 flex items-center justify-center mb-6 overflow-hidden border-2 border-accent-blue/30 group-hover:border-accent-blue transition-colors">
                   <img src="https://www.image2url.com/r2/default/images/1777095458889-2e95060d-15f5-4178-9fd0-7db8197b6771.jpg" alt="Chase - Founder of Nexcypher" className="w-full h-full object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Chase</h3>
                 <p className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4">Founder & Lead Strategist</p>
                 <p className="text-text-secondary text-sm leading-relaxed">Visionary driving Nexcypher's AI automation and Shopify growth architecture. With deep expertise in engineering scalable e-commerce systems and deploying autonomous conversational AI, Chase leads the global team in building digital ecosystems designed to dominate competitive markets.</p>
               </div>

               <div className="col-span-1 md:col-span-3 lg:col-span-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                  {/* 10 Professional Members */}
                  {[
                    { name: "Elena", role: "AI Conversational Architect", region: "Europe" },
                    { name: "David", role: "Shopify Tech Lead", region: "North America" },
                    { name: "Aisha", role: "CRO Specialist", region: "Middle East" },
                    { name: "Liam", role: "Full-Stack Engineer", region: "Australia" },
                    { name: "Maria", role: "UX/UI Designer", region: "South America" },
                    { name: "Kenzo", role: "Voice AI Developer", region: "Asia" },
                    { name: "Sophie", role: "E-com Strategist", region: "Europe" },
                    { name: "Omar", role: "Backend Systems", region: "Africa" },
                    { name: "Chloe", role: "Automation QA", region: "North America" },
                    { name: "James", role: "Data Scientist", region: "Europe" }
                  ].map((member, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-colors text-center flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center mb-3 font-bold text-lg">
                          {member.name[0]}
                       </div>
                       <h4 className="text-white font-bold text-sm mb-1">{member.name}</h4>
                       <p className="text-accent-blue text-[10px] uppercase tracking-wider mb-2 leading-tight">{member.role}</p>
                       <p className="text-white/40 text-[10px]">{member.region}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <TrustSection />
      </div>
    </>
  );
};
