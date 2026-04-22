import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, ArrowRight, Bot, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LOGO_URL } from '../constants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    subLinks: [
      { name: 'All Services', path: '/services' },
      { name: 'AI Calling Agents', path: '/ai-calling-agents' },
      { name: 'Shopify Marketing', path: '/shopify-marketing' },
      { name: 'Shopify Growth', path: '/shopify-growth' },
      { name: 'Pricing', path: '/pricing' },
    ]
  },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Sales Video Proof', path: '/sales-video-proof' },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Banner */}
      <div className="bg-black border-b border-white/5 py-2.5 px-4 text-center">
        <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          🚀 Limited Time: Free 15-Min Shopify Growth Audit — <Link to="/contact" className="text-accent-gold underline cursor-pointer">Book Now</Link>
        </p>
      </div>

      <nav className="p-4 md:p-6 flex flex-col items-center gap-4">
        {/* Logo Centered */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Logo className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28" />
        </motion.div>

        {/* Menu Bar */}
        <div className="max-w-6xl w-auto min-w-[320px] md:min-w-[700px] bg-black/80 border border-white/10 h-14 md:h-16 rounded-full flex items-center justify-between px-6 md:px-8 relative shadow-2xl backdrop-blur-3xl transform transition-all hover:border-white/20">
          {/* Mobile Menu Toggle (Left on mobile) */}
          <div className="flex md:hidden items-center mr-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 xl:gap-12 px-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.subLinks?.some(sub => location.pathname === sub.path));
              
              if (link.subLinks) {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="outline-none">
                      <div className={`text-[10px] xl:text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 relative group flex items-center gap-1 cursor-pointer ${
                        isActive ? 'text-accent-gold' : 'text-text-secondary hover:text-white'
                      }`}>
                        {link.name}
                        <ChevronDown className="w-3 h-3 transition-transform group-data-[state=open]:rotate-180" />
                        {isActive && (
                          <motion.div 
                            layoutId="nav-active" 
                            className="absolute -bottom-2 translate-x-1/2 right-1/2 w-1 h-1 bg-accent-gold rounded-full" 
                          />
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black/95 border border-white/10 backdrop-blur-3xl p-3 rounded-2xl min-w-[240px] z-[110] shadow-2xl">
                      {link.subLinks.map((sub) => (
                        <DropdownMenuItem key={sub.path} className="p-0 focus:bg-transparent mb-1 last:mb-0">
                          <Link
                            to={sub.path}
                            className={`flex items-center gap-3 w-full px-5 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                              location.pathname === sub.path ? 'bg-accent-blue/20 text-accent-blue shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' : 'text-white/70 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group flex flex-col items-center whitespace-nowrap ${
                    isActive ? 'text-accent-gold' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active" 
                      className="absolute -bottom-2 w-1 h-1 bg-accent-gold rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTAs (Right) */}
          <div className="flex items-center shrink-0 ml-4 md:ml-8">
            <Link to="/contact">
              <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white rounded-full px-6 md:px-8 h-9 shadow-lg shadow-accent-blue/20 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest">
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[80%] max-w-xs bg-background border-r border-white/10 p-8 z-[100] md:hidden flex flex-col"
              >
                <div className="flex items-center justify-between mb-12">
                  <Logo className="w-12 h-12" />
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
                  {NAV_LINKS.map((link) => (
                    <div key={link.name}>
                      {link.subLinks ? (
                        <div className="space-y-4">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-blue/50 mb-2">{link.name}</p>
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2 ml-4 ${
                                location.pathname === sub.path ? 'text-accent-gold' : 'text-white/70'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2 block ${
                            location.pathname === link.path ? 'text-accent-gold' : 'text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="bg-accent-blue text-white w-full rounded-full h-14 font-black uppercase tracking-widest">
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
