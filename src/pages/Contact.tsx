import { Helmet } from 'react-helmet-async';
import { LeadForm } from '../components/LeadForm';
import { Badge } from '@/components/ui/badge';
import { FiverrProfileSection } from '../components/FiverrProfileSection';

export const Contact = () => {
  const canonicalUrl = "https://nexcypher.us/contact";

  return (
    <>
      <Helmet>
        <title>Contact Nexcypher | Book a Discovery Call & Start Your Project</title>
        <meta name="description" content="Get in touch with Nexcypher to scale your Shopify store or deploy autonomous AI voice agents. Request a consultation or custom architecture audit." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Contact Nexcypher | Shopify & AI Growth Agency" />
        <meta property="og:description" content="Get in touch with Nexcypher to scale your Shopify store or deploy autonomous AI voice agents." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-44 md:pt-64 pb-16">
        <h1 className="sr-only">Contact Nexcypher - Start Your Shopify & AI Growth Journey</h1>
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Initiate Port
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
            Start Your <br /> <span className="text-accent-blue">Success Story.</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to scale your business to 7 or 8 figures? Our team is standing by to engineer your digital dominance.
          </p>
        </div>

        <LeadForm />
        
        <FiverrProfileSection />

        <section className="py-24 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center opacity-70">
              <div>
                 <p className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4">Direct Mail</p>
                 <p className="text-white text-lg">nexucipher@gmail.com</p>
              </div>
              <div>
                 <p className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4">Global Support</p>
                 <p className="text-white text-lg">London, United Kingdom</p>
              </div>
              <div>
                 <p className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4">WhatsApp</p>
                 <p className="text-white text-lg">+44 7465 616990</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
