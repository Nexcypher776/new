import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { WebsiteAuditTool } from '../components/WebsiteAuditTool';

export const StoreAudit = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Shopify Store Audit",
    "provider": {
      "@type": "Organization",
      "name": "Nexcypher",
      "url": "https://nexcypher.us"
    },
    "description": "Paste your website link to review key performance signals, technical issues, speed insights, and store optimization opportunities."
  };

  return (
    <>
      <Helmet>
        <title>Analyze Your Store Performance | Nexcypher</title>
        <meta name="description" content="Paste your website link to review key performance signals, technical issues, speed insights, and store optimization opportunities." />
        <meta name="keywords" content="Free Shopify audit, CRO analysis, store review" />
        <link rel="canonical" href={canonicalUrl} />
        {schemaData && (
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        )}
      </Helmet>
      
      <div className="pt-20 pb-10">
        <WebsiteAuditTool />
      </div>
    </>
  );
};
