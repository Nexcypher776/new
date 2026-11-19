import { Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { prefetchRoute } from '../lib/routePrefetch';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden relative`}>
      <img
        src={LOGO_URL}
        alt="Nexcypher Logo"
        width={64}
        height={64}
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] whitespace-nowrap"
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black pt-20 md:pt-28 pb-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 mb-16 md:mb-20">
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14 md:w-16 md:h-16" />
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tighter">Nexcypher</h3>
                <p className="text-accent-blue text-xs font-bold uppercase tracking-widest">Engineering Growth</p>
              </div>
            </div>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-md">
              We engineer high-performance digital ecosystems for the world&apos;s most ambitious brands. From premium Shopify development to autonomous AI agents.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/447465616990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Nexcypher on WhatsApp"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="mailto:nexucipher@gmail.com"
                aria-label="Email Nexcypher"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-3.5 text-text-secondary text-sm font-medium">
              <li><Link to="/services" onMouseEnter={() => prefetchRoute('/services')} className="hover:text-accent-blue transition-colors">All Services</Link></li>
              <li><Link to="/ai-calling-agents" onMouseEnter={() => prefetchRoute('/ai-calling-agents')} className="hover:text-accent-blue transition-colors">AI Calling Agents</Link></li>
              <li><Link to="/shopify-growth" onMouseEnter={() => prefetchRoute('/shopify-growth')} className="hover:text-accent-blue transition-colors">Shopify Growth</Link></li>
              <li><Link to="/shopify-marketing" onMouseEnter={() => prefetchRoute('/shopify-marketing')} className="hover:text-accent-blue transition-colors">Shopify Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Portfolio &amp; Tools</h4>
            <ul className="space-y-3.5 text-text-secondary text-sm font-medium">
              <li><Link to="/store-design-gallery" onMouseEnter={() => prefetchRoute('/store-design-gallery')} className="hover:text-accent-blue transition-colors">Store Design Gallery</Link></li>
              <li><Link to="/case-studies" onMouseEnter={() => prefetchRoute('/case-studies')} className="hover:text-accent-blue transition-colors">Case Studies</Link></li>
              <li><Link to="/sales-video-proof" onMouseEnter={() => prefetchRoute('/sales-video-proof')} className="hover:text-accent-blue transition-colors">Sales Video Proof</Link></li>
              <li><Link to="/niche-research" onMouseEnter={() => prefetchRoute('/niche-research')} className="hover:text-accent-blue transition-colors">Niche Research</Link></li>
              <li><Link to="/store-audit" onMouseEnter={() => prefetchRoute('/store-audit')} className="hover:text-accent-blue transition-colors">Free Store Audit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-3.5 text-text-secondary text-sm font-medium">
              <li><Link to="/about" onMouseEnter={() => prefetchRoute('/about')} className="hover:text-accent-blue transition-colors">About Us</Link></li>
              <li><Link to="/process" onMouseEnter={() => prefetchRoute('/process')} className="hover:text-accent-blue transition-colors">Our Process</Link></li>
              <li><Link to="/faq" onMouseEnter={() => prefetchRoute('/faq')} className="hover:text-accent-blue transition-colors">FAQ</Link></li>
              <li><Link to="/pricing" onMouseEnter={() => prefetchRoute('/pricing')} className="hover:text-accent-blue transition-colors">Pricing</Link></li>
              <li><Link to="/blog" onMouseEnter={() => prefetchRoute('/blog')} className="hover:text-accent-blue transition-colors">Blog</Link></li>
              <li><Link to="/book-call" onMouseEnter={() => prefetchRoute('/book-call')} className="hover:text-accent-blue transition-colors">Book a Call</Link></li>
              <li><Link to="/contact" onMouseEnter={() => prefetchRoute('/contact')} className="hover:text-accent-blue transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-medium text-center md:text-left">
            © {new Date().getFullYear()} Nexcypher Team. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-8 flex-wrap justify-center text-white/40 text-xs font-medium uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
