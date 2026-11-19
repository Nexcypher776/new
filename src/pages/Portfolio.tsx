import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Cloud, Cpu, Gem, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NichePortfolio } from '../components/NichePortfolio';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { SalesVideoProofSection } from '../components/SalesVideoProofSection';
import { SalesProofSection } from '../components/SalesProofSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Portfolio = () => {
  const canonicalUrl = "https://nexcypher.us/portfolio";

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "Shopify & AI Agency Portfolio | Nexcypher",
        "description": "Explore Nexcypher's portfolio of custom high-converting Shopify 2.0 stores, autonomous AI calling agents, verified ecommerce revenue proof, and client case studies.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://nexcypher.us/#website"
        },
        "about": {
          "@type": "Organization",
          "@id": "https://nexcypher.us/#organization"
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Client Portfolio & E-commerce Case Studies",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Pet Empire Shopify Store & Growth ($52k+/mo)",
              "url": "https://nexcypher.us/case-studies"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glow Skincare AI Calling Support Automation",
              "url": "https://nexcypher.us/case-studies"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Urban Threads High-ROAS Fashion Acquisition",
              "url": "https://nexcypher.us/case-studies"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Curated Shopify Store Design Gallery",
              "url": "https://nexcypher.us/store-design-gallery"
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nexcypher.us/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shopify 2.0 Portfolio & Case Studies | 7-Figure Store Redesigns - Nexcypher</title>
        <meta name="description" content="Review verified Shopify 2.0 store builds, high-converting checkout redesigns, and AI voice sales case studies engineered for 6-8 figure e-commerce brands." />
        <meta name="keywords" content="Shopify portfolio, Shopify 2.0 theme case studies, custom Shopify development, ecommerce redesign, high converting dropshipping stores, Shopify speed optimization, AI voice agent portfolio" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcypher" />
        <meta property="og:title" content="Shopify 2.0 Portfolio & 7-Figure Case Studies | Nexcypher" />
        <meta property="og:description" content="Explore custom high-converting Shopify 2.0 stores, CRO overhauls, sub-second page speeds, and autonomous AI voice sales agents." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nexcypher Shopify E-Commerce Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nexcypher" />
        <meta name="twitter:creator" content="@nexcypher" />
        <meta name="twitter:title" content="Shopify 2.0 Portfolio & Case Studies | Nexcypher" />
        <meta name="twitter:description" content="Engineered for high conversion rates. Review custom Shopify 2.0 redesigns, client sales dashboards, and autonomous AI agents." />
        <meta name="twitter:image" content="https://nexcypher.us/og-image.jpg" />
        <meta name="twitter:image:alt" content="Nexcypher Shopify E-Commerce Portfolio" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>

      <div className="pt-44 md:pt-64 pb-32">
        <header className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Verified Client Work & Revenue Proof
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
            Shopify & AI <br /> <span className="text-accent-blue">Portfolio.</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            From high-growth Shopify 2.0 storefronts to autonomous AI calling systems, explore how Nexcypher engineers market-dominating solutions for global brands.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/store-design-gallery">
              <Button variant="outline" className="border-accent-blue/30 text-white hover:bg-accent-blue/10 rounded-full px-6">
                Explore Store Design Gallery <ArrowRight className="ml-2 w-4 h-4 text-accent-blue" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-6">
                Detailed Case Studies
              </Button>
            </Link>
          </div>
        </header>

        <CaseStudiesSection />
        <NichePortfolio />
        <SalesProofSection />
        <SalesVideoProofSection />
        <VideoTestimonials />

        <section className="py-32 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter">Trusted Across Industries</h2>
            <div className="flex flex-wrap justify-center gap-12 sm:gap-20">
               <div className="group flex flex-col items-center gap-4 cursor-pointer">
                 <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                   <ShoppingCart className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
                 </div>
                 <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">E-commerce</span>
               </div>
               <div className="group flex flex-col items-center gap-4 cursor-pointer">
                 <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                   <Cloud className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
                 </div>
                 <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">SaaS</span>
               </div>
               <div className="group flex flex-col items-center gap-4 cursor-pointer">
                 <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                   <Cpu className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
                 </div>
                 <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">Tech</span>
               </div>
               <div className="group flex flex-col items-center gap-4 cursor-pointer">
                 <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                   <Gem className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
                 </div>
                 <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">Luxury</span>
               </div>
               <div className="group flex flex-col items-center gap-4 cursor-pointer">
                 <div className="p-4 rounded-[20px] bg-white/[0.02] border border-white/5 group-hover:bg-accent-blue/10 group-hover:border-accent-blue/30 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                   <Heart className="w-8 h-8 text-text-secondary group-hover:text-accent-blue transition-colors duration-500" />
                 </div>
                 <span className="text-text-secondary group-hover:text-white text-xs font-black tracking-widest uppercase italic transition-colors duration-500">Health</span>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
