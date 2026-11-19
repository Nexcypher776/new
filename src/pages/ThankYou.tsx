import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ArrowRight, Home, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Request Received | Nexcypher</title>
        <meta name="description" content="Thank you for reaching out to Nexcypher. Our team will review your Shopify or AI automation request shortly." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background flex items-center justify-center pt-48 md:pt-60 pb-20 px-4 relative overflow-hidden">
        <h1 className="sr-only">Thank You for Reaching Out to Nexcypher</h1>

        {/* Background Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-3xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[40px] p-6 sm:p-10 md:p-16 text-center backdrop-blur-md shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 sm:w-24 sm:h-24 bg-accent-blue/20 rounded-3xl flex items-center justify-center mx-auto mb-8 sm:mb-10 relative group"
            >
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent-blue relative z-10" />
            </motion.div>

            <Badge className="mb-6 bg-accent-blue/10 text-accent-blue border-accent-blue/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              Request Received
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none mb-6">
              Thank You for <span className="text-accent-blue">Reaching Out</span>
            </h2>

            <div className="space-y-4 mb-10 sm:mb-12">
              <p className="text-white text-base sm:text-lg md:text-xl font-medium">
                Your details have been submitted successfully.
              </p>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Our team will review your request and get back to you as soon as possible with the best next step for your business.
              </p>
              <p className="text-text-secondary/60 text-xs sm:text-sm italic font-medium pt-4 tracking-wide">
                Results are built through strategy, structure, and execution. <br className="hidden md:block" />
                We appreciate your interest in Nexcypher.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-colors group">
                  <Home className="w-4 h-4 text-accent-blue group-hover:scale-110 transition-transform" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-accent-blue hover:bg-accent-blue/90 text-white h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-xl shadow-accent-blue/20 group">
                  <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                  View Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
