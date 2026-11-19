import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LOGO_URL } from '../constants';
import { Link } from 'react-router-dom';
import { MaskedWords, PREMIUM_EASE, textFadeUpVariants } from './MotionText';

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

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Build a High-Converting Shopify Store That Actually Sells",
      subtitle: "We combine Shopify, AI automation, and data-driven marketing to scale your business fast",
      testimonial: "“Nexcypher transformed our store. Conversion rate jumped by 40%.” — Sarah J.",
      ctas: [
        { label: "Get Started Now", path: "/contact", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000",
      color: "from-blue-900/40 to-black",
      accent: "bg-accent-blue"
    },
    {
      id: 2,
      title: "Shopify Store Design That Converts Visitors Into Buyers",
      subtitle: "From product research to full store setup we build winning stores",
      testimonial: "“Best Shopify agency we have worked with. Attention to detail is unmatched.” — David L.",
      ctas: [
        { label: "View Portfolio", path: "/portfolio", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
      color: "from-purple-900/40 to-black",
      accent: "bg-accent-purple"
    },
    {
      id: 3,
      title: "AI Agents That Call, Chat, and Close Deals For You",
      subtitle: "Automate your business with smart AI systems that work 24/7",
      testimonial: "“The AI agents handle 90% of our customer queries. Absolute game changer.” — Michael R.",
      ctas: [
        { label: "Explore AI Services", path: "/ai-calling-agents", primary: true }
      ],
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000",
      color: "from-cyan-900/40 to-black",
      accent: "bg-accent-cyan"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section 
      className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-background mt-[200px] md:mt-[260px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: PREMIUM_EASE }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.img 
              key={`img-${current}`}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1.03 }}
              transition={{ duration: 1.2, ease: PREMIUM_EASE }}
              src={slides[current].image} 
              alt={slides[current].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} backdrop-blur-[2px]`} />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.08 }
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: 0.25 }
                  }
                }}
                className="relative z-10"
              >
                <motion.div 
                  variants={textFadeUpVariants}
                  className="flex items-center gap-4 mb-8"
                >
                  <Logo className="w-16 h-16 md:w-20 md:h-20" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.65, delay: 0.15, ease: PREMIUM_EASE }}
                    className={`w-12 h-1 ${slides[current].accent} rounded-full origin-left`}
                  />
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  <MaskedWords
                    text={slides[current].title}
                    wordDelay={0.035}
                    baseDelay={0.12}
                    immediate
                  />
                </h2>
                <motion.p 
                  variants={textFadeUpVariants}
                  className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed font-light max-w-xl"
                >
                  {slides[current].subtitle}
                </motion.p>
                
                {slides[current].testimonial && (
                  <motion.div
                    variants={textFadeUpVariants}
                    className="mb-10 pl-4 border-l-2 border-white/20 italic text-white/70 font-medium"
                  >
                    {slides[current].testimonial}
                  </motion.div>
                )}

                <motion.div 
                  variants={textFadeUpVariants}
                  className="flex flex-wrap gap-4"
                >
                  {slides[current].ctas.map((cta, idx) => (
                    <Link key={idx} to={cta.path}>
                      <Button 
                        size="lg"
                        className={`h-14 px-8 rounded-full text-lg font-bold transition-all duration-300 ${
                          cta.primary 
                            ? `${slides[current].accent} hover:opacity-90 text-white shadow-xl shadow-black/20` 
                            : "bg-white/10 hover:bg-white/20 text-white"
                        }`}
                      >
                        {cta.label}
                        {cta.primary && <ArrowRight className="ml-2 w-5 h-5" />}
                      </Button>
                    </Link>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ y: 36, opacity: 0, scale: 0.96 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -16, opacity: 0, scale: 0.98 }}
                transition={{ delay: 0.25, duration: 0.8, ease: PREMIUM_EASE }}
                className="hidden lg:block relative"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                  <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-[1.5s] ease-out" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.6, ease: PREMIUM_EASE }}
                    className="absolute bottom-4 left-4 glass p-4 rounded-2xl border border-white/20 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${slides[current].accent} rounded-xl flex items-center justify-center`}>
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Growth Rate</p>
                        <p className="text-lg font-bold text-white tabular-nums">+340%</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className={`absolute -inset-4 ${slides[current].accent} opacity-20 blur-3xl rounded-full -z-10`} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
