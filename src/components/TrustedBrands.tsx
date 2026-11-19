import { motion } from 'motion/react';
import { FaShopify, FaFacebook, FaInstagram, FaGoogle, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { VIEWPORT_ONCE, textFadeUpVariants } from './MotionText';

const CustomKlaviyoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4 2v20h4V13l8 9h5l-9-10 8.5-10h-5L8 10V2H4z" />
  </svg>
);

export const TrustedBrands = () => {
  const brands = [
    { name: 'Shopify', icon: FaShopify },
    { name: 'Klaviyo', icon: CustomKlaviyoIcon },
    { name: 'Google', icon: FaGoogle },
    { name: 'Facebook', icon: FaFacebook },
    { name: 'Instagram', icon: FaInstagram },
    { name: 'TikTok', icon: SiTiktok },
    { name: 'YouTube', icon: FaYoutube },
  ];

  return (
    <section className="py-10 bg-black border-y border-white/5 overflow-hidden flex flex-col items-center">
      <motion.p
        variants={textFadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="text-sm text-white/50 uppercase tracking-widest font-bold mb-6"
      >
        Trusted platforms we scale brands on
      </motion.p>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 sm:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {brands.map((brand, idx) => (
            <li key={idx} className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-opacity duration-300">
              <brand.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
              <span className="text-white font-black uppercase tracking-tighter text-sm sm:text-base">{brand.name}</span>
            </li>
          ))}
          {/* Duplicate for infinite scroll */}
          {brands.map((brand, idx) => (
            <li key={`dup-${idx}`} aria-hidden="true" className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-opacity duration-300">
              <brand.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              <span className="text-white font-black uppercase tracking-tighter text-sm sm:text-base">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
