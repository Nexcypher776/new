import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { NicheResearchTool } from '../components/NicheResearchTool';

export const NicheResearch = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Research Your Niche Before You Build | Nexcypher</title>
        <meta name="description" content="Enter the niche you want to explore and get a structured opportunity report designed to help you make better business decisions." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="pt-20 pb-10">
        <NicheResearchTool />
      </div>
    </>
  );
};
