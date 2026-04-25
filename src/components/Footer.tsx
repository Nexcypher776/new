import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden relative group`}>
      <div className="absolute inset-0 bg-accent-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img 
        src={LOGO_URL} 
        alt="Nexcypher Logo" 
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] whitespace-nowrap" 
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <Logo className="w-16 h-16" />
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tighter">Nexcypher</h3>
                <p className="text-accent-blue text-xs font-bold uppercase tracking-widest">Engineering Growth</p>
              </div>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md">
              We engineer high-performance digital ecosystems for the world's most ambitious brands. From premium Shopify development to autonomous AI agents.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/447465616990" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-12 h-12 rounded-full border-white/10 p-0 hover:bg-white/5">
                  <MessageSquare className="w-5 h-5 text-white" />
                </Button>
              </a>
              <a href="mailto:nexucipher@gmail.com">
                <Button variant="outline" className="w-12 h-12 rounded-full border-white/10 p-0 hover:bg-white/5">
                  <Mail className="w-5 h-5 text-white" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-medium">
              <li><Link to="/services" className="hover:text-accent-blue transition-colors">All Services</Link></li>
              <li><Link to="/ai-calling-agents" className="hover:text-accent-blue transition-colors">AI Calling Agents</Link></li>
              <li><Link to="/shopify-growth" className="hover:text-accent-blue transition-colors">Shopify Growth</Link></li>
              <li><Link to="/store-audit" className="hover:text-accent-blue transition-colors">Free Store Audit</Link></li>
              <li><Link to="/sales-video-proof" className="hover:text-accent-blue transition-colors">Sales Video Proof</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent-blue transition-colors">Client Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-medium">
              <li><Link to="/about" className="hover:text-accent-blue transition-colors">About Us</Link></li>
              <li><Link to="/process" className="hover:text-accent-blue transition-colors">Our Process</Link></li>
              <li><Link to="/faq" className="hover:text-accent-blue transition-colors">FAQ</Link></li>
              <li><Link to="/pricing" className="hover:text-accent-blue transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-accent-blue transition-colors">Blog</Link></li>
              <li><Link to="/book-call" className="hover:text-accent-blue transition-colors">Book a Call</Link></li>
              <li><Link to="/contact" className="hover:text-accent-blue transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-xs font-medium">
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
