import { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LeadPopup } from './components/LeadPopup';

// Pages - Lazy loaded for speed
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const AiCallingAgents = lazy(() => import('./pages/AiCallingAgents').then(m => ({ default: m.AiCallingAgents })));
const ShopifyMarketing = lazy(() => import('./pages/ShopifyMarketing').then(m => ({ default: m.ShopifyMarketing })));
const ShopifyGrowth = lazy(() => import('./pages/ShopifyGrowth').then(m => ({ default: m.ShopifyGrowth })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(m => ({ default: m.Portfolio })));
const SalesVideoProof = lazy(() => import('./pages/SalesVideoProof').then(m => ({ default: m.SalesVideoProof })));
const Results = lazy(() => import('./pages/Results').then(m => ({ default: m.Results })));
const Pricing = lazy(() => import('./pages/Pricing').then(m => ({ default: m.Pricing })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const ThankYou = lazy(() => import('./pages/ThankYou').then(m => ({ default: m.ThankYou })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const StartHere = lazy(() => import('./pages/StartHere').then(m => ({ default: m.StartHere })));
const CaseStudies = lazy(() => import('./pages/CaseStudies').then(m => ({ default: m.CaseStudies })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));
const Reviews = lazy(() => import('./pages/Reviews').then(m => ({ default: m.Reviews })));
const BookCall = lazy(() => import('./pages/BookCall').then(m => ({ default: m.BookCall })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy').then(m => ({ default: m.CookiePolicy })));
const Disclaimer = lazy(() => import('./pages/Disclaimer').then(m => ({ default: m.Disclaimer })));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy').then(m => ({ default: m.RefundPolicy })));
const AiDemo = lazy(() => import('./pages/AiDemo').then(m => ({ default: m.AiDemo })));
const AiFeatures = lazy(() => import('./pages/AiFeatures').then(m => ({ default: m.AiFeatures })));
const StoreAudit = lazy(() => import('./pages/StoreAudit').then(m => ({ default: m.StoreAudit })));
const Industries = lazy(() => import('./pages/Industries').then(m => ({ default: m.Industries })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
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
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <div className="bg-background min-h-screen selection:bg-accent-blue/30 selection:text-white font-sans text-white overflow-x-hidden">
      <Helmet>
        <title>Nexcypher | Shopify Growth & AI Calling Agency</title>
        <meta name="description" content="Nexcypher helps brands scale with Shopify marketing and AI calling agents. Get more leads, conversions, and automated growth today." />
        <link rel="canonical" href={canonicalUrl} />
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
            <Route path="/" element={<PageTransition><Suspense fallback={<div className="min-h-screen" />}><Home /></Suspense></PageTransition>} />
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
    <Router>
      <LeadPopup />
      <AppContent />
    </Router>
  );
}
