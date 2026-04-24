import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LOGO_URL } from '../constants';
import { Link } from 'react-router-dom';

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
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.img 
              key={`img-${current}`}
              initial={{ opacity: 0, y: 30, scale: 1.1 }}
              animate={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
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
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                  }
                }}
                className="relative z-10"
              >
                <motion.div 
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
                  className="flex items-center gap-4 mb-8"
                >
                  <Logo className="w-16 h-16 md:w-20 md:h-20" />
                  <div className={`w-12 h-1 ${slides[current].accent} rounded-full`} />
                </motion.div>
                <motion.h2 
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                >
                  {slides[current].title}
                </motion.h2>
                <motion.p 
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
                  className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-xl"
                >
                  {slides[current].subtitle}
                </motion.p>
                <motion.div 
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
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
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hidden lg:block relative"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
                  <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 glass p-4 rounded-2xl border border-white/20 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${slides[current].accent} rounded-xl flex items-center justify-center`}>
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/60 uppercase font-bold tracking-widest">Growth Rate</p>
                        <p className="text-lg font-bold text-white">+340%</p>
                      </div>
                    </div>
                  </div>
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
