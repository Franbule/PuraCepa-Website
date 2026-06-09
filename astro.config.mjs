import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://puracepa-catering.es
export default defineConfig({
  site: 'https://puracepa-catering.es',
  integrations: [
    react(),
    sitemap(),
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});
