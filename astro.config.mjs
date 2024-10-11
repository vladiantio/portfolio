import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true }), tailwind()],
  server: { port: 4680 },
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
