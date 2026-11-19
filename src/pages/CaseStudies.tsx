import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

const CASE_STUDIES = [
  {
    category: "Fashion & Activewear",
    brand: "Aura Athletics",
    overview: "Aura Athletics is a premium activewear brand targeting millennial and Gen Z fitness enthusiasts. After a successful launch and two years of steady growth, they hit a hard revenue ceiling at $2M ARR, heavily dependent on paid social.",
    challenge: [
      "Aura Athletics had hit a severe revenue plateau. Their Customer Acquisition Cost (CAC) on Meta ads had skyrocketed by 140% following iOS privacy updates, squeezing margins to a breaking point.",
      "A clunky, unoptimized mobile shopping experience left their conversion rate stuck at a dismal 1.4%, despite driving high-quality, high-intent traffic.",
      "Furthermore, abandoned carts were piling up at an alarming rate, representing hundreds of thousands in lost potential revenue with no effective recovery strategy beyond standard, easily-ignored email flows."
    ],
    solution: [
      "We executed a comprehensive digital overhaul, starting with a ground-up Shopify Plus headless redesign. By leveraging modern frameworks, we achieved sub-second load times and prioritized a frictionless, single-page mobile checkout experience.",
      "To combat the rising CAC, we broke away from traditional retargeting. We integrated our proprietary AI Calling Agent to deploy automated, deeply conversational SMS and voice interventions. The AI specifically targeted high-value abandoned carts ($150+), offering personalized sizing help and limited-time incentives.",
      "Simultaneously, we pivoted their top-of-funnel strategy, revamping their TikTok ad creatives with fresh, user-generated-content (UGC) hooks that emphasized community and performance, drastically lowering initial acquisition costs."
    ],
    results: [
      { metric: "215%", label: "Revenue Increase (90 Days)" },
      { metric: "3.4%", label: "New Conversion Rate" },
      { metric: "$45k", label: "Recovered via AI in Month 1" }
    ],
    highlights: [
      "Headless Shopify implementation for 3x faster load times.",
      "AI Voice/SMS Agent integration for abandoned cart recovery.",
      "TikTok and Meta Ads creative overhaul."
    ],
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&h=800&q=80",
    chartType: "bar",
    chartData: [
      { name: "Month 1", revenue: 45000 },
      { name: "Month 2", revenue: 85000 },
      { name: "Month 3", revenue: 141750 },
    ],
    chartConfig: {
      dataKeys: [{ key: "revenue", color: "#3b82f6", name: "Revenue ($)" }]
    }
  },
  {
    category: "Health & Supplements",
    brand: "Vitality Labs",
    overview: "Vitality Labs manufactures science-backed nootropics and longevity supplements. While their recurring subscription model had massive potential, their initial customer acquisition was incredibly inefficient, burning through their seed funding.",
    challenge: [
      "Despite boasting a high-quality, clinically-tested product line, Vitality Labs struggled with an 85% bounce rate on their core product pages.",
      "The brand lacked effective social proof, and trust signals were buried at the bottom of the page in lengthy, jargon-filled text blocks. Visitors simply weren't convinced of the efficacy.",
      "They were also burning cash rapidly on disjointed, broad-audience ad campaigns on Google and Meta, yielding an inconsistent and highly unprofitable Cost Per Acquisition (CPA)."
    ],
    solution: [
      "We conducted a brutal, data-driven Store Audit, leveraging heatmaps and session recordings. We entirely overhauled their product pages, pulling scientifically-backed social proof, dynamic video testimonials, and clear, digestible value propositions above the fold.",
      "We completely pivoted their ad targeting. Utilizing our deep Niche Research protocols, we identified specific micro-communities (e.g., biohackers, competitive programmers) and tailored both ad copy and landing pages directly to their unique pain points.",
      "Finally, we deployed AI-driven, highly-segmented automated email education flows. Instead of pushing for an immediate sale, we nurtured leads with high-value scientific content, gradually building trust and driving them to high-converting subscription offers."
    ],
    results: [
      { metric: "-40%", label: "Reduction in CPA" },
      { metric: "65%", label: "Increase in Repeat Customers" },
      { metric: "3.6x", label: "Monthly Revenue Multiplier" }
    ],
    highlights: [
      "CRO-focused product page redesign.",
      "High-converting automated email lifecycle flows.",
      "Data-backed audience pivot and ad restructuring."
    ],
    image: "https://images.unsplash.com/photo-1593095948386-8ad30d5ef861?auto=format&fit=crop&w=1200&h=800&q=80",
    chartType: "line",
    chartData: [
      { name: "Q1", cpa: 48, repeatRate: 15 },
      { name: "Q2", cpa: 39, repeatRate: 28 },
      { name: "Q3", cpa: 28, repeatRate: 65 },
    ],
    chartConfig: {
      dataKeys: [
        { key: "cpa", color: "#ef4444", name: "CPA ($)" },
        { key: "repeatRate", color: "#d4af37", name: "Repeat Purchase Rate (%)" }
      ]
    }
  },
  {
    category: "Home Tech & Decor",
    brand: "Lumina Smart Home",
    overview: "Lumina Smart Home designs luxury, modular smart lighting systems for high-end residential properties. Their premium pricing model meant they were selling an ecosystem, not just a standalone product.",
    challenge: [
      "Selling expensive, high-Average Order Value (AOV) items ($300 - $1,500) naturally requires a longer, more deliberative customer consideration phase.",
      "Lumina's conversion rate was suffering significantly because prospective buyers had complex technical questions regarding installation, compatibility with existing smart hubs, and room sizing.",
      "Their small, manual customer support team was overwhelmed, leading to delayed response times (24+ hours). Cold traffic was bouncing before their objections could be handled."
    ],
    solution: [
      "We integrated a 24/7 AI-powered conversational sales agent directly into their Shopify storefront. This wasn't a standard chatbot; it was trained extensively on their entire product catalog, technical specifications, and dense installation manuals.",
      "The AI agent could intelligently guide users through a 'Room Builder' quiz, recommending the exact starter kits and expansions needed based on the user's specific floor plan and existing smart home ecosystem.",
      "In parallel, we built highly-converting, long-form 'advertorial' landing pages. These acted as educational funnels to warm up cold traffic, explaining the specific lifestyle benefits of Lumina's ecosystem before pushing them directly to the AI-assisted shopping experience."
    ],
    results: [
      { metric: "4X", label: "Increase in Add To Cart Rate" },
      { metric: "-70%", label: "Support Ticket Volume" },
      { metric: "$250k", label: "Q4 AI-Assisted Sales" }
    ],
    highlights: [
      "24/7 Custom AI Sales Agent trained on technical data.",
      "Long-form educational advertorial funnels.",
      "Streamlined high-ticket sales cycle."
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&h=800&q=80",
    chartType: "bar",
    chartData: [
      { name: "Oct", sales: 40000, tickets: 350 },
      { name: "Nov", sales: 85000, tickets: 160 },
      { name: "Dec", sales: 125000, tickets: 105 },
    ],
    chartConfig: {
      dataKeys: [
        { key: "sales", color: "#3b82f6", name: "AI-Assisted Sales ($)" },
        { key: "tickets", color: "#ef4444", name: "Support Tickets" }
      ]
    }
  }
];

export const CaseStudies = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Detailed Case Studies | Proven Shopify & AI Results | Nexcypher",
    "description": "Dive deep into our comprehensive case studies showcasing how Nexcypher transformed brands using Shopify and AI.",
  };

  return (
    <>
      <Helmet>
        <title>Detailed Case Studies | Proven Shopify & AI Results | Nexcypher</title>
        <meta name="description" content="Dive deep into our comprehensive case studies showcasing how Nexcypher transformed brands using Shopify and AI." />
        <meta name="keywords" content="Shopify case studies, AI automation case studies, Nexcypher results" />
        <link rel="canonical" href={canonicalUrl} />
        {schemaData && (
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        )}
      </Helmet>
      
      <h1 className="sr-only">Detailed Case Studies | Proven Shopify & AI Results | Nexcypher</h1>

      <section className="pt-32 pb-24 bg-background min-h-[60vh] flex flex-col justify-center relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-center mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                Client Success
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
              Real Brands.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-gold">Unreal Results.</span>
            </h2>
            
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              We don't just build stores; we architect growth systems. Read our detailed case studies to see how we leverage Shopify and AI to transform businesses.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies List Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
          {CASE_STUDIES.map((study, index) => (
            <motion.div 
              key={study.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img 
                    src={study.image} 
                    alt={`${study.brand} case study`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-8 left-8 z-20">
                    <Badge variant="outline" className="bg-black/50 backdrop-blur-md text-white border-white/20 mb-3 px-3 py-1 font-bold tracking-widest uppercase text-[10px]">
                      {study.category}
                    </Badge>
                    <h3 className="text-3xl lg:text-4xl font-black text-white">{study.brand}</h3>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-zinc-500" /> Client Overview
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {study.overview}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-red-500" /> The Challenge
                  </h4>
                  <div className="space-y-4">
                    {study.challenge.map((paragraph, i) => (
                      <p key={i} className="text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-accent-blue" /> The Solution
                  </h4>
                  <div className="space-y-4 mb-6">
                    {study.solution.map((paragraph, i) => (
                      <p key={i} className="text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-white/5">
                    {study.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-sm font-black uppercase tracking-widest text-white/50 mb-6 text-center lg:text-left">The Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5 text-center lg:text-left">
                        <div className="text-3xl font-black text-white mb-2">{result.metric}</div>
                        <div className="text-xs font-bold uppercase tracking-wide text-accent-blue/80">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {study.chartData && (
                    <div className="bg-white/5 rounded-2xl p-6 lg:p-8 border border-white/5">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-accent-gold" /> Key Performance Indicators
                      </h4>
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          {study.chartType === 'line' ? (
                            <LineChart data={study.chartData as any[]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                              <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                              <YAxis stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '12px' }}
                                itemStyle={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}
                                labelStyle={{ color: '#888', marginBottom: '8px' }}
                              />
                              <Legend wrapperStyle={{ paddingTop: '20px' }} />
                              {study.chartConfig?.dataKeys.map((k: any) => (
                                <Line 
                                  key={k.key}
                                  type="monotone" 
                                  dataKey={k.key} 
                                  stroke={k.color} 
                                  name={k.name}
                                  strokeWidth={3}
                                  dot={{ r: 4, strokeWidth: 2 }}
                                  activeDot={{ r: 6, strokeWidth: 0 }}
                                />
                              ))}
                            </LineChart>
                          ) : (
                            <BarChart data={study.chartData as any[]} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                              <XAxis dataKey="name" stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                              <YAxis stroke="#888" tick={{ fill: '#888', fontSize: 12 }} />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#333', borderRadius: '12px' }}
                                itemStyle={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}
                                labelStyle={{ color: '#888', marginBottom: '8px' }}
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                              />
                              <Legend wrapperStyle={{ paddingTop: '20px' }} />
                              {study.chartConfig?.dataKeys.map((k: any) => (
                                <Bar 
                                  key={k.key}
                                  dataKey={k.key} 
                                  fill={k.color} 
                                  name={k.name}
                                  radius={[4, 4, 0, 0]}
                                  barSize={40}
                                />
                              ))}
                            </BarChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            Ready to be our next success story?
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            Let's discuss how our AI-driven ecommerce solutions can transform your brand's trajectory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-call">
              <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest shadow-lg shadow-accent-blue/20">
                Book a Strategy Call
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 text-white rounded-full px-8 h-14 font-extrabold uppercase tracking-widest">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
