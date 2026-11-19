import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, MotionConfig } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { routeImporters } from './lib/routePrefetch';
import { getSubPageStructuredData } from './lib/structuredData';

// Secondary pages - Lazy loaded via shared prefetchable importers
const About = lazy(() => routeImporters['/about']().then(m => ({ default: m.About })));
const Services = lazy(() => routeImporters['/services']().then(m => ({ default: m.Services })));
const AiCallingAgents = lazy(() => routeImporters['/ai-calling-agents']().then(m => ({ default: m.AiCallingAgents })));
const ShopifyMarketing = lazy(() => routeImporters['/shopify-marketing']().then(m => ({ default: m.ShopifyMarketing })));
const ShopifyGrowth = lazy(() => routeImporters['/shopify-growth']().then(m => ({ default: m.ShopifyGrowth })));
const Portfolio = lazy(() => routeImporters['/portfolio']().then(m => ({ default: m.Portfolio })));
const SalesVideoProof = lazy(() => routeImporters['/sales-video-proof']().then(m => ({ default: m.SalesVideoProof })));
const Results = lazy(() => routeImporters['/results']().then(m => ({ default: m.Results })));
const Pricing = lazy(() => routeImporters['/pricing']().then(m => ({ default: m.Pricing })));
const Contact = lazy(() => routeImporters['/contact']().then(m => ({ default: m.Contact })));
const ThankYou = lazy(() => routeImporters['/thank-you']().then(m => ({ default: m.ThankYou })));
const Terms = lazy(() => routeImporters['/terms']().then(m => ({ default: m.Terms })));
const Privacy = lazy(() => routeImporters['/privacy']().then(m => ({ default: m.Privacy })));
const StartHere = lazy(() => routeImporters['/start-here']().then(m => ({ default: m.StartHere })));
const CaseStudies = lazy(() => routeImporters['/case-studies']().then(m => ({ default: m.CaseStudies })));
const Process = lazy(() => routeImporters['/process']().then(m => ({ default: m.Process })));
const FAQ = lazy(() => routeImporters['/faq']().then(m => ({ default: m.FAQ })));
const Reviews = lazy(() => routeImporters['/reviews']().then(m => ({ default: m.Reviews })));
const BookCall = lazy(() => routeImporters['/book-call']().then(m => ({ default: m.BookCall })));
const Blog = lazy(() => routeImporters['/blog']().then(m => ({ default: m.Blog })));
const CookiePolicy = lazy(() => routeImporters['/cookie-policy']().then(m => ({ default: m.CookiePolicy })));
const Disclaimer = lazy(() => routeImporters['/disclaimer']().then(m => ({ default: m.Disclaimer })));
const RefundPolicy = lazy(() => routeImporters['/refund-policy']().then(m => ({ default: m.RefundPolicy })));
const AiDemo = lazy(() => routeImporters['/ai-demo']().then(m => ({ default: m.AiDemo })));
const AiFeatures = lazy(() => routeImporters['/ai-features']().then(m => ({ default: m.AiFeatures })));
const StoreAudit = lazy(() => routeImporters['/store-audit']().then(m => ({ default: m.StoreAudit })));
const Industries = lazy(() => routeImporters['/industries']().then(m => ({ default: m.Industries })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const NicheResearch = lazy(() => routeImporters['/niche-research']().then(m => ({ default: m.NicheResearch })));
const StoreDesignGallery = lazy(() => routeImporters['/store-design-gallery']().then(m => ({ default: m.StoreDesignGallery })));
const LeadPopup = lazy(() => import('./components/LeadPopup').then(m => ({ default: m.LeadPopup })));

const DeferredLeadPopup = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    try {
      if (
        localStorage.getItem('nexcypher_lead_submitted') ||
        localStorage.getItem('nexcypher_lead_popup_dismissed')
      ) {
        return;
      }
    } catch {
      // Ignore storage access restrictions inside iframes
    }

    const timer = window.setTimeout(() => setShouldLoad(true), 7500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!shouldLoad) return null;
  return (
    <Suspense fallback={null}>
      <LeadPopup initialDelayMs={2500} />
    </Suspense>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const location = useLocation();

  // Canonical URL construction
  const isSubPage = location.pathname !== '/';
  const canonicalUrl = `https://nexcypher.us${isSubPage ? location.pathname : ''}`;
  const subPageStructuredDataJson = useMemo(
    () => (isSubPage ? JSON.stringify(getSubPageStructuredData(location.pathname)) : null),
    [isSubPage, location.pathname]
  );

  return (
    <div className="bg-background min-h-screen selection:bg-accent-blue/30 selection:text-white font-sans text-white overflow-x-hidden">
      <Helmet defaultTitle="Nexcypher – Shopify 2.0 Agency & AI Voice Agents">
        <html lang="en" />
        <meta name="description" content="Scale your Shopify store with high-converting 2.0 themes, speed optimization, CRO, and 24/7 AI calling agents. Book a free Shopify growth audit today." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content="Nexcypher" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://nexcypher.us/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nexcypher.us/og-image.jpg" />
        {subPageStructuredDataJson && (
          <script id="nexcypher-subpage-jsonld" type="application/ld+json">
            {subPageStructuredDataJson}
          </script>
        )}
      </Helmet>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[110] origin-left"
        style={{ scaleX }}
      />

      <Navigation />

      <main className="relative z-10">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><About /></Suspense></PageTransition>} />
            <Route path="/services" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Services /></Suspense></PageTransition>} />
            <Route path="/ai-calling-agents" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><AiCallingAgents /></Suspense></PageTransition>} />
            <Route path="/shopify-marketing" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><ShopifyMarketing /></Suspense></PageTransition>} />
            <Route path="/shopify-growth" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><ShopifyGrowth /></Suspense></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Portfolio /></Suspense></PageTransition>} />
            <Route path="/sales-video-proof" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><SalesVideoProof /></Suspense></PageTransition>} />
            <Route path="/results" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Results /></Suspense></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Pricing /></Suspense></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Contact /></Suspense></PageTransition>} />
            <Route path="/thank-you" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><ThankYou /></Suspense></PageTransition>} />
            <Route path="/terms" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Terms /></Suspense></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Privacy /></Suspense></PageTransition>} />
            
            {/* New Pages */}
            <Route path="/start-here" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><StartHere /></Suspense></PageTransition>} />
            <Route path="/case-studies" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><CaseStudies /></Suspense></PageTransition>} />
            <Route path="/process" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Process /></Suspense></PageTransition>} />
            <Route path="/faq" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><FAQ /></Suspense></PageTransition>} />
            <Route path="/reviews" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Reviews /></Suspense></PageTransition>} />
            <Route path="/book-call" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><BookCall /></Suspense></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Blog /></Suspense></PageTransition>} />
            <Route path="/cookie-policy" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><CookiePolicy /></Suspense></PageTransition>} />
            <Route path="/disclaimer" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Disclaimer /></Suspense></PageTransition>} />
            <Route path="/refund-policy" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><RefundPolicy /></Suspense></PageTransition>} />
            <Route path="/ai-demo" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><AiDemo /></Suspense></PageTransition>} />
            <Route path="/ai-features" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><AiFeatures /></Suspense></PageTransition>} />
            <Route path="/store-audit" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><StoreAudit /></Suspense></PageTransition>} />
            <Route path="/niche-research" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><NicheResearch /></Suspense></PageTransition>} />
            <Route path="/store-design-gallery" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><StoreDesignGallery /></Suspense></PageTransition>} />
            <Route path="/industries" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Industries /></Suspense></PageTransition>} />
            <Route path="*" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><NotFound /></Suspense></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <DeferredLeadPopup />
        <AppContent />
      </Router>
    </MotionConfig>
  );
}
