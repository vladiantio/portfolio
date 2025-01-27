import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import tailwindcss from "@tailwindcss/vite";

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
  experimental: {
    svg: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    expressiveCode({
      defaultProps: {
        wrap: true,
      },
      styleOverrides: {
        codeFontFamily: 'var(--font-mono)',
        codeFontWeight: '500',
      },
      themes: ['github-dark', 'github-light'],
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      useDarkModeMediaQuery: false,
    }),
    mdx(),
    sitemap(),
    solid(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[rehypeExternalLinks, externalLinksOptions]],
  },
  output: 'static',
  server: { port: 4680 },
  site: 'https://vladiantio.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
