/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  // Allow custom CSS classes to coexist with Tailwind v4
  safelist: [
    'btn-ghost',
    'glass-card',
    'glass-card-hover', 
    'focus-ring',
    'filter-button',
    'filter-button-active',
    'filter-button-inactive',
    'touch-target',
    'touch-target-lg',
    'text-gradient',
    'animation-delay-0',
    'animation-delay-100',
    'animation-delay-200',
    'animation-delay-300',
    'animation-delay-400',
    'animation-delay-500',
    'motion-reduce-animation'
  ]
};