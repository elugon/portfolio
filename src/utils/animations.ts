import type { MotionConfig } from '../types';

// DRY: Centralized animation configurations
export const motionPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  } as MotionConfig,

  fadeInDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  } as MotionConfig,

  fadeInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  } as MotionConfig,

  fadeInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  } as MotionConfig,

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  } as MotionConfig,

  slideInFromLeft: {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  } as MotionConfig,

  slideInFromRight: {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  } as MotionConfig,

  slideInFromTop: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  } as MotionConfig,

  slideInFromBottom: {
    initial: { y: 300, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.2 },
    viewport: { once: true }
  } as MotionConfig,

  // Complex animations for special cases
  backgroundCircles: {
    initial: { opacity: 0 },
    animate: {
      scale: [1, 2, 2, 3, 1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    },
    transition: { duration: 2.5 }
  } as MotionConfig,

  headerSlideIn: {
    initial: { x: -500, opacity: 0, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 1.5 }
  } as MotionConfig,

  headerSlideInRight: {
    initial: { x: 500, opacity: 0, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 1 }
  } as MotionConfig
};

// Animation variants for hover effects
export const hoverVariants = {
  card: {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95 
    }
  },
  
  button: {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.9 
    }
  },

  skill: {
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  }
};

// Helper function to combine motion presets
export const combineMotions = (...motions: Partial<MotionConfig>[]): MotionConfig => {
  return motions.reduce((combined, motion) => ({
    ...combined,
    ...motion,
    initial: { ...combined.initial, ...motion.initial },
    animate: { ...combined.animate, ...motion.animate },
    transition: { ...combined.transition, ...motion.transition }
  }), {} as MotionConfig);
};