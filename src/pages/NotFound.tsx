import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-48 md:pt-56 pb-16 px-6">
      <Helmet>
        <title>404 – Page Not Found | Nexcypher</title>
        <meta name="description" content="The page you requested could not be found on Nexcypher." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan mb-6 sm:mb-8">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-text-secondary text-lg mb-10 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-accent-blue hover:bg-accent-blue/90 text-white font-bold h-14 rounded-full px-8 shadow-xl shadow-accent-blue/10">
            <Home className="mr-2 w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
