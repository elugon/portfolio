// Animation utilities using Tailwind CSS 2025
// Replace Framer Motion with native CSS animations via Tailwind

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Tailwind animation classes that replace Framer Motion presets
export const animationClasses = {
  // Basic entrance animations
  fadeInUp: prefersReducedMotion ? 'opacity-100' : 'animate-slide-up motion-reduce-animation',
  fadeInDown: prefersReducedMotion ? 'opacity-100' : 'animate-slide-down motion-reduce-animation',
  fadeInLeft: prefersReducedMotion ? 'opacity-100' : 'animate-slide-right motion-reduce-animation',
  fadeInRight: prefersReducedMotion ? 'opacity-100' : 'animate-slide-left motion-reduce-animation',
  scaleIn: prefersReducedMotion ? 'opacity-100' : 'animate-scale-in motion-reduce-animation',

  // Slide animations with longer distances
  slideInFromLeft: prefersReducedMotion ? 'opacity-100' : 'animate-slide-right motion-reduce-animation',
  slideInFromRight: prefersReducedMotion ? 'opacity-100' : 'animate-slide-left motion-reduce-animation',
  slideInFromTop: prefersReducedMotion ? 'opacity-100' : 'animate-slide-down motion-reduce-animation',
  slideInFromBottom: prefersReducedMotion ? 'opacity-100' : 'animate-slide-up motion-reduce-animation',

  // Background animations
  backgroundCircles: prefersReducedMotion ? 'opacity-60' : 'animate-float motion-reduce-animation',

  // Header animations
  headerSlideIn: prefersReducedMotion ? 'opacity-100' : 'animate-slide-right motion-reduce-animation',
  headerSlideInRight: prefersReducedMotion ? 'opacity-100' : 'animate-slide-left motion-reduce-animation',

  // Special animations
  gentleBounce: prefersReducedMotion ? 'opacity-100' : 'animate-bounce-gentle motion-reduce-animation',
  staggerChildren: 'opacity-100', // Will be handled with CSS delays
  microInteraction: prefersReducedMotion ? '' : 'hover:scale-102 transition-transform duration-150',
};

// Hover variants as Tailwind classes
export const hoverClasses = {
  card: 'hover:scale-102 hover:-translate-y-0.5 transition-all duration-150 motion-reduce-animation',
  button: 'hover:scale-105 active:scale-95 transition-transform duration-100 motion-reduce-animation',
  skill: 'hover:scale-110 hover:rotate-1 transition-all duration-200 motion-reduce-animation',
  glow: 'hover:shadow-glow-lg transition-shadow duration-200 motion-reduce-animation',
  lift: 'hover:-translate-y-1 transition-transform duration-200 motion-reduce-animation',
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