import { motion, useScroll, useSpring } from 'motion/react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LeadPopup } from './components/LeadPopup';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { AiCallingAgents } from './pages/AiCallingAgents';
import { ShopifyMarketing } from './pages/ShopifyMarketing';
import { ShopifyGrowth } from './pages/ShopifyGrowth';
import { Portfolio } from './pages/Portfolio';
import { SalesVideoProof } from './pages/SalesVideoProof';
import { Results } from './pages/Results';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { ThankYou } from './pages/ThankYou';

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <LeadPopup />
      <div className="bg-background min-h-screen selection:bg-accent-blue/30 selection:text-white font-sans text-white overflow-x-hidden">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[110] origin-left"
          style={{ scaleX }}
        />

        <Navigation />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ai-calling-agents" element={<AiCallingAgents />} />
            <Route path="/shopify-marketing" element={<ShopifyMarketing />} />
            <Route path="/shopify-growth" element={<ShopifyGrowth />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sales-video-proof" element={<SalesVideoProof />} />
            <Route path="/results" element={<Results />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
