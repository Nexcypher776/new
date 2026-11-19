import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LOGO_URL } from '../constants';
import { Link } from 'react-router-dom';
import { MaskedWords, PREMIUM_EASE, textFadeUpVariants } from './MotionText';
import { prefetchRoute } from '../lib/routePrefetch';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden relative group`}>
      <img 
        src={LOGO_URL} 
        alt="Nexcypher Logo" 
        width={80}
        height={80}
        decoding="async"
        className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] whitespace-nowrap" 
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

const SLIDES = [
  {
    id: 1,
    title: "Build a High-Converting Shopify Store That Actually Sells",
    subtitle: "We combine Shopify, AI automation, and data-driven marketing to scale your business fast",
    testimonial: "“Nexcypher transformed our store. Conversion rate jumped by 40%.” — Sarah J.",
    ctas: [
      { label: "Get Started Now", path: "/contact", primary: true }
    ],
    imageBase: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
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
    imageBase: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
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
    imageBase: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    color: "from-cyan-900/40 to-black",
    accent: "bg-accent-cyan"
  }
];

const buildUnsplashUrl = (base: string, width: number) =>
  `${base}?auto=format&fit=crop&q=75&w=${width}`;

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Quietly warm the upcoming slide's image in browser cache right before transition
  useEffect(() => {
    const nextIdx = (current + 1) % SLIDES.length;
    const preloader = new Image();
    preloader.decoding = 'async';
    preloader.src = buildUnsplashUrl(SLIDES[nextIdx].imageBase, 1400);
  }, [current]);

  const activeSlide = SLIDES[current];
  const heroSrc = buildUnsplashUrl(activeSlide.imageBase, 1400);
  const heroSrcSet = `${buildUnsplashUrl(activeSlide.imageBase, 800)} 800w, ${buildUnsplashUrl(activeSlide.imageBase, 1400)} 1400w`;
  const cardSrc = buildUnsplashUrl(activeSlide.imageBase, 800);

  return (
    <section 
      className="relative min-h-[580px] sm:min-h-[660px] lg:h-[88vh] lg:min-h-[680px] w-full overflow-hidden bg-background mt-[162px] sm:mt-[186px] md:mt-[246px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: PREMIUM_EASE }}
          className="relative w-full py-12 sm:py-16 lg:py-0 lg:absolute lg:inset-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.img 
              key={`img-${current}`}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.02 }}
              transition={{ duration: 1.0, ease: PREMIUM_EASE }}
              src={heroSrc}
              srcSet={heroSrcSet}
              sizes="100vw"
              fetchPriority={current === 0 ? "high" : "auto"}
              decoding={current === 0 ? "sync" : "async"}
              alt={activeSlide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${activeSlide.color}`} />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-6 flex items-center">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.06 }
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: 0.22 }
                  }
                }}
                className="relative z-10"
              >
                <motion.div 
                  variants={textFadeUpVariants}
                  className="flex items-center gap-4 mb-6 sm:mb-8"
                >
                  <Logo className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.12, ease: PREMIUM_EASE }}
                    className={`w-12 h-1 ${activeSlide.accent} rounded-full origin-left`}
                  />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 sm:mb-6 tracking-tight leading-[1.12]">
                  <MaskedWords
                    text={activeSlide.title}
                    wordDelay={0.032}
                    baseDelay={0.1}
                    immediate
                  />
                </h2>
                <motion.p 
                  variants={textFadeUpVariants}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-5 sm:mb-6 leading-relaxed font-light max-w-xl"
                >
                  {activeSlide.subtitle}
                </motion.p>
                
                {activeSlide.testimonial && (
                  <motion.div
                    variants={textFadeUpVariants}
                    className="mb-8 sm:mb-10 pl-4 border-l-2 border-white/20 italic text-sm sm:text-base text-white/70 font-medium"
                  >
                    {activeSlide.testimonial}
                  </motion.div>
                )}

                <motion.div 
                  variants={textFadeUpVariants}
                  className="flex flex-wrap gap-4"
                >
                  {activeSlide.ctas.map((cta, idx) => (
                    <Link key={idx} to={cta.path} onMouseEnter={() => prefetchRoute(cta.path)}>
                      <Button 
                        size="lg"
                        className={`h-14 px-8 rounded-full text-lg font-bold transition-colors duration-300 ${
                          cta.primary 
                            ? `${activeSlide.accent} hover:opacity-90 text-white shadow-xl shadow-black/20` 
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
                initial={{ y: 30, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -14, opacity: 0, scale: 0.98 }}
                transition={{ delay: 0.2, duration: 0.7, ease: PREMIUM_EASE }}
                className="hidden lg:block relative"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                  <img
                    src={cardSrc}
                    alt={activeSlide.title}
                    width={800}
                    height={450}
                    decoding="async"
                    className="w-full h-full object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.55, ease: PREMIUM_EASE }}
                    className="absolute bottom-4 left-4 glass p-4 rounded-2xl border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${activeSlide.accent} rounded-xl flex items-center justify-center`}>
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Growth Rate</p>
                        <p className="text-lg font-bold text-white tabular-nums">+340%</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(59,130,246,0.22)_0%,transparent_70%)] rounded-full -z-10 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
