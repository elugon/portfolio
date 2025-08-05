// Animation utilities using Tailwind CSS 2025
// Replace Framer Motion with native CSS animations via Tailwind

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Tailwind animation classes that replace Framer Motion presets - 2025 Optimized
export const animationClasses = {
  // Basic entrance animations with GPU acceleration
  fadeInUp: prefersReducedMotion ? 'opacity-100' : 'animate-slide-up transform-gpu motion-reduce-animation',
  fadeInDown: prefersReducedMotion ? 'opacity-100' : 'animate-slide-down transform-gpu motion-reduce-animation',
  fadeInLeft: prefersReducedMotion ? 'opacity-100' : 'animate-slide-right transform-gpu motion-reduce-animation',
  fadeInRight: prefersReducedMotion ? 'opacity-100' : 'animate-slide-left transform-gpu motion-reduce-animation',
  scaleIn: prefersReducedMotion ? 'opacity-100' : 'animate-scale-in transform-gpu will-change-transform motion-reduce-animation',

  // Slide animations with longer distances
  slideInFromLeft: prefersReducedMotion ? 'opacity-100' : 'animate-slide-right transform-gpu motion-reduce-animation',
  slideInFromRight: prefersReducedMotion ? 'opacity-100' : 'animate-slide-left transform-gpu motion-reduce-animation',
  slideInFromTop: prefersReducedMotion ? 'opacity-100' : 'animate-slide-down transform-gpu motion-reduce-animation',
  slideInFromBottom: prefersReducedMotion ? 'opacity-100' : 'animate-slide-up transform-gpu motion-reduce-animation',

  // Background animations
  backgroundCircles: prefersReducedMotion ? 'opacity-60' : 'animate-float transform-gpu motion-reduce-animation',

  // Header animations
  headerSlideIn: prefersReducedMotion ? 'opacity-100' : 'animate-slide-right transform-gpu motion-reduce-animation',
  headerSlideInRight: prefersReducedMotion ? 'opacity-100' : 'animate-slide-left transform-gpu motion-reduce-animation',

  // Special animations
  gentleBounce: prefersReducedMotion ? 'opacity-100' : 'animate-bounce-gentle transform-gpu will-change-transform motion-reduce-animation',
  staggerChildren: 'opacity-100', // Will be handled with CSS delays
  microInteraction: prefersReducedMotion ? '' : 'hover:scale-[1.02] transform-gpu will-change-transform transition-transform duration-150 ease-out',
};

// Hover variants as Tailwind classes - Optimized for 2025 performance
export const hoverClasses = {
  card: 'hover:scale-[1.02] hover:-translate-y-0.5 transform-gpu will-change-transform transition-transform duration-200 ease-out motion-reduce-animation',
  button: 'hover:scale-105 active:scale-95 transform-gpu will-change-transform transition-transform duration-150 ease-out motion-reduce-animation',
  skill: 'hover:scale-[1.03] hover:-translate-y-1 transform-gpu will-change-transform transition-all duration-300 ease-out motion-reduce-animation',
  glow: 'hover:shadow-glow-lg transform-gpu transition-shadow duration-300 ease-out motion-reduce-animation',
  lift: 'hover:-translate-y-1 transform-gpu will-change-transform transition-transform duration-300 ease-out motion-reduce-animation',
};

// Animation delays for staggered effects
export const staggerDelays = {
  delay0: 'animation-delay-0',
  delay100: 'animation-delay-100',
  delay200: 'animation-delay-200',
  delay300: 'animation-delay-300',
  delay400: 'animation-delay-400',
  delay500: 'animation-delay-500',
};

// Utility function to get animation class with optional delay
export const getAnimationClass = (
  animationType: keyof typeof animationClasses, 
  delay?: keyof typeof staggerDelays
): string => {
  const baseClass = animationClasses[animationType];
  const delayClass = delay ? staggerDelays[delay] : '';
  return `${baseClass} ${delayClass}`.trim();
};

// Utility function to combine hover effects
export const getHoverClass = (
  hoverType: keyof typeof hoverClasses,
  additionalClasses?: string
): string => {
  const baseClass = hoverClasses[hoverType];
  return `${baseClass} ${additionalClasses || ''}`.trim();
};

// Replace viewport observer with Intersection Observer for scroll animations
export const useScrollAnimation = (elementRef: { current: HTMLElement | null }, animationClass: string) => {
  if (typeof window === 'undefined') return;

  const element = elementRef.current;
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(...animationClass.split(' '));
        }
      });
    },
    { threshold: 0.1, rootMargin: '-100px' }
  );

  observer.observe(element);
  return () => observer.disconnect();
};

// Preset combinations for common layouts
export const layoutAnimations = {
  section: getAnimationClass('fadeInUp'),
  card: getAnimationClass('scaleIn'),
  navigation: getAnimationClass('fadeInDown'),
  hero: getAnimationClass('slideInFromBottom'),
  aboutImage: getAnimationClass('slideInFromLeft'),
  aboutText: getAnimationClass('slideInFromRight'),
  skillGrid: 'opacity-0', // Will animate children individually
  projectGrid: 'opacity-0', // Will animate children individually
};