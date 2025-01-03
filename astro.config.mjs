import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Markdown Plugins
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('rehype-external-links').Options} */
const externalLinksOptions = {
  properties: {
    'class': 'external'
  },
  target: '_blank',
  rel: ['noopener', 'noreferrer']
};
// End Markdown Plugins

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap(),
    solid(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, externalLinksOptions]],
  },
  output: 'static',
  server: { port: 4680 },
  site: 'https://vladiantio.com',
});
