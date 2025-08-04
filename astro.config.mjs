// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-elu-gonzalez.vercel.app',
  integrations: [react()],
  output: 'static',
  adapter: undefined,
  build: {
    assets: '_astro'
  }
});