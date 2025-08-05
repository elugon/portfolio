/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
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
    'text-gradient'
  ]
};