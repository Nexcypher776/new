import React from 'react';
import { motion, type Variants } from 'motion/react';

export const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.2 as const,
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const fastStaggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const textFadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: PREMIUM_EASE,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const cardFadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE,
    },
  },
};

interface MaskedWordsProps {
  text: string;
  className?: string;
  highlightClassName?: string;
  wordDelay?: number;
  baseDelay?: number;
  immediate?: boolean;
}

/**
 * Splits a headline string into words and reveals each word upward from a clean
 * baseline mask using compositor-only transform + opacity transitions.
 */
export const MaskedWords: React.FC<MaskedWordsProps> = ({
  text,
  className = '',
  wordDelay = 0.04,
  baseDelay = 0,
  immediate = false,
}) => {
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.26em] gap-y-[0.06em] ${className}`}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible', exit: 'exit' }
        : { whileInView: 'visible', viewport: VIEWPORT_ONCE })}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: wordDelay,
            delayChildren: baseDelay,
          },
        },
        exit: {
          transition: {
            staggerChildren: 0.015,
            staggerDirection: -1,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em] pr-[0.08em] -mr-[0.08em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: {
                y: '110%',
                opacity: 0,
              },
              visible: {
                y: '0%',
                opacity: 1,
                transition: {
                  duration: 0.72,
                  ease: PREMIUM_EASE,
                },
              },
              exit: {
                y: '-65%',
                opacity: 0,
                transition: {
                  duration: 0.28,
                  ease: [0.4, 0, 1, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
