import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// Markdown Plugins
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
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

/** @type {import("rehype-autolink-headings").Options} */
const autolinkHeadingsOptions = {
  content: /** @type {Array<ElementContent>} */ (
    fromHtmlIsomorphic(
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>`,
      { fragment: true }
    ).children
  ),
  properties: {
    "aria-hidden": "true",
    class: "link-heading",
  },
};

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
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, autolinkHeadingsOptions],
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
