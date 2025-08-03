import type { MotionConfig } from '../types';

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 2025 Animation Standards: Fast, smooth, respectful
const createTransition = (duration: number, ease = [0.22, 1, 0.36, 1]) => ({
  duration: prefersReducedMotion ? 0.01 : duration,
  ease
});

// DRY: Centralized animation configurations optimized for 2025
export const motionPresets = {
  // Fast, subtle animations (new standard)
  fadeInUp: {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: createTransition(0.3)
  } as MotionConfig,

  fadeInDown: {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    animate: { opacity: 1, y: 0 },
    transition: createTransition(0.3)
  } as MotionConfig,

  fadeInLeft: {
    initial: { opacity: 0, x: prefersReducedMotion ? 0 : -40 },
    animate: { opacity: 1, x: 0 },
    transition: createTransition(0.4)
  } as MotionConfig,

  fadeInRight: {
    initial: { opacity: 0, x: prefersReducedMotion ? 0 : 40 },
    animate: { opacity: 1, x: 0 },
    transition: createTransition(0.4)
  } as MotionConfig,

  scaleIn: {
    initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: createTransition(0.2)
  } as MotionConfig,

  // Optimized slide animations - much faster and subtler
  slideInFromLeft: {
    initial: { x: prefersReducedMotion ? 0 : -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: createTransition(0.5),
    viewport: { once: true, margin: "-100px" }
  } as MotionConfig,

  slideInFromRight: {
    initial: { x: prefersReducedMotion ? 0 : 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: createTransition(0.5),
    viewport: { once: true, margin: "-100px" }
  } as MotionConfig,

  slideInFromTop: {
    initial: { y: prefersReducedMotion ? 0 : -40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: createTransition(0.4),
    viewport: { once: true, margin: "-100px" }
  } as MotionConfig,

  slideInFromBottom: {
    initial: { y: prefersReducedMotion ? 0 : 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: createTransition(0.5),
    viewport: { once: true, margin: "-100px" }
  } as MotionConfig,

  // Refined background circles - much more subtle
  backgroundCircles: {
    initial: { opacity: 0 },
    animate: prefersReducedMotion ? 
      { opacity: 0.6 } : 
      {
        scale: [1, 1.1, 1.05, 1.2, 1],
        opacity: [0.1, 0.3, 0.5, 0.7, 0.4],
        borderRadius: ["20%", "30%", "50%", "60%", "40%"]
      },
    transition: createTransition(1.8)
  } as MotionConfig,

  // Much faster header animations
  headerSlideIn: {
    initial: { 
      x: prefersReducedMotion ? 0 : -100, 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.9 
    },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: createTransition(0.6)
  } as MotionConfig,

  headerSlideInRight: {
    initial: { 
      x: prefersReducedMotion ? 0 : 100, 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.9 
    },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: createTransition(0.5)
  } as MotionConfig,

  // New 2025 animations
  gentleBounce: {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      ...createTransition(0.4),
      type: prefersReducedMotion ? "tween" : "spring",
      bounce: 0.3
    }
  } as MotionConfig,

  staggerChildren: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.3,
      staggerChildren: prefersReducedMotion ? 0 : 0.1
    }
  } as MotionConfig,

  microInteraction: {
    initial: { scale: 1 },
    animate: { scale: prefersReducedMotion ? 1 : 1.02 },
    transition: createTransition(0.15)
  } as MotionConfig
};

// Animation variants for hover effects - 2025 optimized
export const hoverVariants = {
  card: {
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.02,
      y: prefersReducedMotion ? 0 : -2,
      transition: createTransition(0.15)
    },
    tap: { 
      scale: prefersReducedMotion ? 1 : 0.98 
    }
  },
  
  button: {
    hover: { 
      scale: prefersReducedMotion ? 1 : 1.05,
      transition: createTransition(0.1)
    },
    tap: { 
      scale: prefersReducedMotion ? 1 : 0.95 
    }
  },

  skill: {
    hover: {
      scale: prefersReducedMotion ? 1 : 1.1,
      rotate: prefersReducedMotion ? 0 : 1,
      transition: createTransition(0.2)
    }
  },

  // New 2025 hover effects
  glow: {
    hover: {
      boxShadow: prefersReducedMotion ? 
        "none" : 
        "0 0 20px rgba(245, 158, 11, 0.3), 0 0 40px rgba(245, 158, 11, 0.1)",
      transition: createTransition(0.2)
    }
  },

  lift: {
    hover: {
      y: prefersReducedMotion ? 0 : -4,
      transition: createTransition(0.2)
    }
  }
};

// Helper function to combine motion presets
export const combineMotions = (...motions: Partial<MotionConfig>[]): MotionConfig => {
  const defaultConfig: MotionConfig = {
    initial: {},
    animate: {},
    transition: {}
  };
  
  return motions.reduce<MotionConfig>((combined, motion) => {
    const result: MotionConfig = {
      initial: { ...combined.initial, ...(motion.initial || {}) },
      animate: { ...combined.animate, ...(motion.animate || {}) },
      transition: { ...combined.transition, ...(motion.transition || {}) }
    };
    
    if (motion.viewport || combined.viewport) {
      result.viewport = { ...combined.viewport, ...motion.viewport };
    }
    
    return result;
  }, defaultConfig);
};

// Utility to create responsive motion based on device capabilities
export const createResponsiveMotion = (mobile: Partial<MotionConfig>, desktop: Partial<MotionConfig>): MotionConfig => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return isMobile ? { ...motionPresets.fadeInUp, ...mobile } : { ...motionPresets.slideInFromBottom, ...desktop };
};

// Performance-optimized animation presets for different content types
export const contentAnimations = {
  text: motionPresets.fadeInUp,
  image: motionPresets.scaleIn,
  card: motionPresets.slideInFromBottom,
  navigation: motionPresets.fadeInDown,
  modal: motionPresets.scaleIn,
  notification: motionPresets.slideInFromRight
};