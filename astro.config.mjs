import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vladiantio.com',
  integrations: [
    sitemap(),
    preact({ compat: true }),
    tailwind(),
  ],
  server: { port: 4680 },
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
