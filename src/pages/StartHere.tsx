import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Bot, AlertCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const StartHere = () => {
  const location = useLocation();
  const canonicalUrl = `https://nexcypher.us${location.pathname === '/' ? '' : location.pathname}`;
  const [selectedPath, setSelectedPath] = useState<'shopify' | 'ai' | null>(null);
  const [showError, setShowError] = useState(false);

  const handleProceed = () => {
    if (!selectedPath) {
      setShowError(true);
      return;
    }
    
    if (selectedPath === 'shopify') {
      window.location.href = "https://www.fiverr.com/nexcypher_uk";
    } else {
      window.location.href = "https://wa.me/447465616990";
    }
  };

  return (
    <>
      <Helmet>
        <title>Start Here | Choose Your Path | Nexcypher</title>
        <meta name="description" content="Begin your journey with Nexcypher. Choose between Shopify Growth or AI Automation solutions tailored to scale your brand." />
        <meta name="keywords" content="Nexcypher start, Shopify growth vs AI, business automation" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <h1 className="sr-only">Start Here | Choose Your Path | Nexcypher</h1>

      <section className="pt-32 pb-24 bg-background min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                Start Here
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
              Choose Your Path
            </h2>
            
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Select the direction that aligns with your brand's goals to get started immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
            {/* Shopify Growth Path */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => {
                setSelectedPath('shopify');
                setShowError(false);
              }}
              className={`group relative flex flex-col items-center text-center p-10 lg:p-16 rounded-[2rem] bg-black/40 border cursor-pointer hover:bg-accent-blue/5 transition-all overflow-hidden ${
                selectedPath === 'shopify' ? 'border-accent-blue bg-accent-blue/10 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : 'border-white/10 hover:border-accent-blue/50'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                selectedPath === 'shopify' ? 'bg-accent-blue/20' : 'bg-white/5 group-hover:bg-accent-blue/20'
              }`}>
                <ShoppingBag className="w-10 h-10 text-accent-blue" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">Shopify Growth</h3>
              <p className="text-text-secondary text-lg mb-10">
                Scale your e-commerce brand with premium Shopify design, development, and conversion optimization.
              </p>
            </motion.div>

            {/* AI Automation Path */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => {
                setSelectedPath('ai');
                setShowError(false);
              }}
              className={`group relative flex flex-col items-center text-center p-10 lg:p-16 rounded-[2rem] bg-black/40 border cursor-pointer hover:bg-accent-gold/5 transition-all overflow-hidden ${
                selectedPath === 'ai' ? 'border-accent-gold bg-accent-gold/10 shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]' : 'border-white/10 hover:border-accent-gold/50'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                selectedPath === 'ai' ? 'bg-accent-gold/20' : 'bg-white/5 group-hover:bg-accent-gold/20'
              }`}>
                <Bot className="w-10 h-10 text-accent-gold" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">AI Automation</h3>
              <p className="text-text-secondary text-lg mb-10">
                Deploy autonomous AI calling agents to qualify leads, book appointments, and close deals 24/7.
              </p>
            </motion.div>
          </div>

          {showError && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 flex items-center gap-2 mb-6 font-medium bg-red-400/10 px-4 py-2 rounded-full"
            >
              <AlertCircle className="w-4 h-4" />
              Please select a path to continue.
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              onClick={handleProceed}
              size="lg" 
              className={`rounded-full px-12 h-14 font-black uppercase tracking-widest text-lg shadow-lg transition-all ${
                selectedPath === 'shopify' ? 'bg-accent-blue hover:bg-accent-blue/90 text-white shadow-accent-blue/20' :
                selectedPath === 'ai' ? 'bg-accent-gold hover:bg-accent-gold/90 text-black shadow-accent-gold/20' :
                'bg-white/10 text-white/50 hover:bg-white/20 hover:text-white'
              }`}
            >
              Continue {selectedPath === 'shopify' ? 'to Fiverr' : selectedPath === 'ai' ? 'to WhatsApp' : ''}
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
