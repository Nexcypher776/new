import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CASE_STUDIES = [
  {
    category: "Fashion & Activewear",
    brand: "Aura Athletics",
    challenge: "Aura Athletics had hit a revenue plateau. Their customer acquisition cost (CAC) on Meta ads was skyrocketing, and a clunky mobile shopping experience left their conversion rate stuck at 1.4%. Furthermore, abandoned carts were piling up with no effective recovery strategy.",
    solution: "We engineered a ground-up Shopify Plus headless redesign, prioritizing a frictionless, lightning-fast mobile checkout. To combat the rising CAC, we implemented an AI Calling Agent to deploy automated, conversational SMS and voice reminders for high-value abandoned carts. Simultaneously, we revamped their TikTok ad strategy with fresh, data-driven creative hooks.",
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
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    category: "Health & Supplements",
    brand: "Vitality Labs",
    challenge: "Despite having a high-quality product line, Vitality Labs struggled with a high bounce rate on product pages due to a lack of social proof and trust signals. They were also burning cash on disjointed ad campaigns that yielded an inconsistent cost per acquisition (CPA).",
    solution: "We conducted a brutal Store Audit and overhauled their product pages, injecting scientific social proof, dynamic testimonials, and clear value propositions. We then pivoted their ad targeting based on our deep Niche Research and deployed an AI-driven automated email flows to educate subscribers and drive them to conversion.",
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
    image: "https://images.unsplash.com/photo-1593095948386-8ad30d5ef861?auto=format&fit=crop&w=1200&h=800&q=80"
  },
  {
    category: "Home Tech & Decor",
    brand: "Lumina Smart Home",
    challenge: "Selling expensive, high-AOV smart lighting systems ($300+) meant a longer customer consideration phase. Lumina's conversion rate was suffering because prospective buyers had technical questions that their small manual support team couldn't answer quickly enough.",
    solution: "We integrated a 24/7 AI-powered conversational sales agent directly into their Shopify storefront, trained on their entire product catalog and installation manuals. In parallel, we built highly-converting, long-form landing pages acting as educational funnels to warm up cold traffic before pushing them to add to cart.",
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
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&h=800&q=80"
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
                <div className="mb-10">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-red-500" /> The Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-accent-blue" /> The Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {study.solution}
                  </p>
                  <ul className="space-y-3">
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5 text-center lg:text-left">
                        <div className="text-3xl font-black text-white mb-2">{result.metric}</div>
                        <div className="text-xs font-bold uppercase tracking-wide text-accent-blue/80">{result.label}</div>
                      </div>
                    ))}
                  </div>
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
