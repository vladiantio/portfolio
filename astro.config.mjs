import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// Markdown Plugins
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";
import rehypeExternalLinks from "rehype-external-links";
import rehypePrettyCode from "rehype-pretty-code";

// Shiki Transformers
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";

// Shiki Options
const themes = {
  light: "github-light",
  dark: "github-dark",
};
const transformers = [transformerColorizedBrackets()];

/** @type {import("rehype-external-links").Options} */
const externalLinksOptions = {
  properties: {
    class: "external",
  },
  target: "_blank",
  rel: ["noopener", "noreferrer"],
};

/** @type {import("rehype-pretty-code").Options} */
const prettyCodeOptions = {
  transformers,
  theme: themes,
};
// End Markdown Plugins

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      [rehypeExternalLinks, externalLinksOptions],
      [rehypePrettyCode, prettyCodeOptions],
    ],
    syntaxHighlight: false,
    shikiConfig: {
      transformers,
      themes,
      wrap: true,
    },
  },
  output: "static",
  server: { port: 4680 },
  site: "https://vladiantio.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
