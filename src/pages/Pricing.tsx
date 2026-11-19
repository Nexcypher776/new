import { Helmet } from 'react-helmet-async';
import { Pricing as PricingGrid } from '../components/Pricing';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const canonicalUrl = "https://nexcypher.us/pricing";

  return (
    <>
      <Helmet>
        <title>Shopify Development & AI Agency Pricing | High-ROI Packages - Nexcypher</title>
        <meta name="description" content="Transparent, high-ROI investment packages for Shopify 2.0 store creation, CRO redesigns, and autonomous 24/7 AI voice agents. Engineered to maximize e-commerce profits." />
        <meta name="keywords" content="Shopify store pricing, Shopify agency cost, hire Shopify developer, AI calling agent cost, Shopify CRO pricing, ecommerce agency packages" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nexcypher" />
        <meta property="og:title" content="Shopify Development & AI Agency Pricing | Nexcypher" />
        <meta property="og:description" content="Transparent, high-ROI packages for custom Shopify 2.0 stores, CRO systems, and autonomous AI voice callers." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://nexcypher.us/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Nexcypher Pricing & Packages" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nexcypher" />
        <meta name="twitter:title" content="Shopify & AI Agency Pricing | Nexcypher" />
        <meta name="twitter:description" content="Transparent high-ROI packages for Shopify store builds, CRO, and AI voice agents." />
        <meta name="twitter:image" content="https://nexcypher.us/og-image.jpg" />
      </Helmet>

      <div className="pt-44 md:pt-64 pb-32">
        <h1 className="sr-only">Nexcypher Pricing & Investment Packages</h1>
        <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            The Investment
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
            Premium <br /> <span className="text-accent-blue">Value.</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            We don't offer cheap services. We offer high-ROI investments that pay for themselves through growth and efficiency.
          </p>
        </div>

        <PricingGrid />

        <section className="py-32 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold text-white mb-8">Custom Enterprise Solutions?</h2>
             <p className="text-text-secondary mb-10 leading-relaxed">
               Need a bespoke solution that doesn't fit into our standard packages? 
               We build custom enterprise-grade Shopify architectures and private AI infrastructures.
             </p>
             <Link
               to="/contact"
               className="text-accent-blue font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 mx-auto hover:gap-4 transition-all"
             >
               Contact for Enterprise Quote →
             </Link>
          </div>
        </section>
      </div>
    </>
  );
};
