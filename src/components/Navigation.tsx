import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, ArrowRight, Bot, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LOGO_URL } from '../constants';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <Link to="/" className={`${className} flex items-center justify-center overflow-hidden relative group`}>
      <div className="absolute inset-0 bg-accent-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img 
        src={LOGO_URL} 
        alt="Nexcypher Logo" 
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] whitespace-nowrap" 
        referrerPolicy="no-referrer"
      />
    </Link>
  );
};

type NavLink = {
  name: string;
  path: string;
  subLinks?: NavLink[];
};

const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    subLinks: [
      { name: 'All Services', path: '/services' },
      { name: 'AI Calling Agents', path: '/ai-calling-agents' },
      { name: 'Shopify Growth', path: '/shopify-growth' },
      { name: 'Shopify Marketing', path: '/shopify-marketing' },
    ]
  },
  { 
    name: 'Tools & Gallery', 
    path: '/store-design-gallery',
    subLinks: [
      { name: 'Store Design Gallery', path: '/store-design-gallery' },
      { name: 'Niche Research', path: '/niche-research' },
      { name: 'Store Audit', path: '/store-audit' },
    ]
  },
  { 
    name: 'Proof', 
    path: '/case-studies',
    subLinks: [
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Sales Video Proof', path: '/sales-video-proof' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Basic focus management: focus the close button when opened
      setTimeout(() => {
        const closeBtn = document.getElementById('close-mobile-menu');
        if (closeBtn) closeBtn.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Top Banner */}
      <div className="bg-black border-b border-white/5 py-2.5 px-4 text-center pointer-events-auto">
        <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          🚀 Limited Time: Free 15-Min Shopify Growth Audit — <Link to="/store-audit" className="text-accent-gold underline cursor-pointer">Book Now</Link>
        </p>
      </div>

      <nav className="p-4 md:p-6 flex flex-col items-center gap-4 pointer-events-auto">
        {/* Logo Centered */}
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
        >
          <Logo className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        </motion.div>

        {/* Menu Bar */}
        <div className="w-full max-w-6xl md:w-auto md:min-w-[700px] bg-black/80 border border-white/10 h-14 md:h-16 rounded-full flex items-center justify-between px-4 md:px-8 relative shadow-2xl backdrop-blur-3xl transform transition-all hover:border-white/20">
          {/* Mobile Menu Toggle (Left on mobile) */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-blue"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 xl:gap-12 px-6 h-full">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.subLinks?.some(sub => 
                (sub.path && location.pathname === sub.path) || 
                (sub.subLinks?.some(nested => location.pathname === nested.path))
              ));
              
              if (link.subLinks) {
                return (
                  <div key={link.name} className="relative group h-full flex items-center">
                    <div className={`h-full px-3 text-[10px] xl:text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      isActive ? 'text-accent-gold' : 'text-text-secondary hover:text-white'
                    }`}>
                      {link.name}
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      {isActive && (
                        <motion.div 
                          layoutId="nav-active" 
                          className="absolute bottom-2 translate-x-1/2 right-1/2 w-1 h-1 bg-accent-gold rounded-full" 
                        />
                      )}
                    </div>
                    {/* An invisible wide buffer area to catch diagonal mouse movements */}
                    <div className="absolute top-0 w-[150%] left-1/2 -translate-x-1/2 h-full z-0 hidden group-hover:block" />
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[260px] z-[110]">
                      <div className="relative">
                        {/* Invisible bridge for hover */}
                        <div className="absolute -top-4 left-0 right-0 h-8 bg-transparent" />
                        <div className="bg-black/95 border border-white/10 backdrop-blur-3xl p-3 rounded-2xl shadow-2xl flex flex-col pointer-events-auto">
                        {link.subLinks.map((sub) => {
                          if (sub.subLinks) {
                            const isSubActive = sub.subLinks.some(nested => location.pathname === nested.path);
                            return (
                              <div key={sub.name} className="relative group/sub">
                                <div className={`flex items-center justify-between w-full px-5 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all mb-1 cursor-pointer relative z-10 ${
                                  isSubActive ? 'bg-accent-blue/10 text-accent-blue' : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}>
                                  {sub.name}
                                  <ChevronRight className="w-3 h-3" />
                                </div>
                                {/* Invisible bridge for sub-menu horizontal hover */}
                                <div className="absolute top-0 bottom-0 -right-4 w-8 bg-transparent z-0" />
                                <div className="absolute top-0 left-full pl-4 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 min-w-[260px] z-[120]">
                                  <div className="bg-black/95 border border-white/10 backdrop-blur-3xl p-3 rounded-2xl shadow-2xl flex flex-col pointer-events-auto relative">
                                    {/* Bridge back to parent menu */}
                                    <div className="absolute top-0 bottom-0 -left-4 w-8 bg-transparent" />
                                    {sub.subLinks.map(nested => (
                                      <Link 
                                        key={nested.path} 
                                        to={nested.path}
                                        className={`flex items-center gap-3 w-full px-5 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all mb-1 last:mb-0 relative z-10 ${
                                          location.pathname === nested.path ? 'bg-accent-blue/20 text-accent-blue shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' : 'text-white/70 hover:bg-white/10 hover:text-white'
                                        }`}
                                      >
                                        {nested.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Link 
                              key={sub.path} 
                              to={sub.path!}
                              className={`flex items-center gap-3 w-full px-5 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all mb-1 last:mb-0 relative z-10 ${
                                location.pathname === sub.path ? 'bg-accent-blue/20 text-accent-blue shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' : 'text-white/70 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`h-full px-2 text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group flex items-center whitespace-nowrap ${
                    isActive ? 'text-accent-gold' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active" 
                      className="absolute bottom-2 translate-x-1/2 right-1/2 w-1 h-1 bg-accent-gold rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTAs (Right) */}
          <div className="flex items-center shrink-0 ml-4 md:ml-8 gap-4">
            <Link to="/contact">
              <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-6 md:px-8 h-9 shadow-lg shadow-accent-blue/20 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest pointer-events-auto">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] md:hidden pointer-events-auto"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-black/95 backdrop-blur-xl border-r border-white/10 p-8 z-[100] md:hidden flex flex-col pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center justify-between mb-12">
                  <Logo className="w-12 h-12" />
                  <button 
                    id="close-mobile-menu"
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    aria-label="Close Mobile Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
                  {NAV_LINKS.map((link) => (
                    <div key={link.name}>
                      {link.subLinks ? (
                        <div className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-blue/50 mb-2">{link.name}</p>
                          {link.subLinks.map((sub) => {
                            if (sub.subLinks) {
                              return (
                                <div key={sub.name} className="space-y-2 mt-4 ml-2">
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary/70 mb-2 flex items-center gap-2">
                                    <ChevronRight className="w-3 h-3" />
                                    {sub.name}
                                  </p>
                                  {sub.subLinks.map((nested) => (
                                    <Link
                                      key={nested.path}
                                      to={nested.path}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`block text-xs font-bold uppercase tracking-[0.1em] border-b border-white/5 pb-2 ml-6 transition-colors ${
                                        location.pathname === nested.path ? 'text-accent-gold' : 'text-white/60 hover:text-white'
                                      }`}
                                    >
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={sub.path}
                                to={sub.path!}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2 ml-4 transition-colors ${
                                  location.pathname === sub.path ? 'text-accent-gold' : 'text-white/70 hover:text-white'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            );
                          })}
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2 block transition-colors ${
                            location.pathname === link.path ? 'text-accent-gold' : 'text-white hover:text-accent-gold'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <Link to="/book-call" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white w-full rounded-full h-14 font-black uppercase tracking-widest transition-colors shadow-lg shadow-accent-blue/20">
                    Book a Call
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
