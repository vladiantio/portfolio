import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import type { Locale } from '@/i18n/constants';
import { localeParams, translate } from '@/i18n/helpers';
import { getAllBlogPosts } from '@/services/blog';
import basics from '@/data/basics';

export const getStaticPaths = () => localeParams;

export const GET: APIRoute = async ({ params, site }) => {
  const lang = params.lang as Locale | undefined;
  const posts = await getAllBlogPosts(lang);
  return rss({
    title: `${basics.shortname} · ${translate(basics.shortDescription, lang)}`,
    description: translate(basics.seoDescription, lang) ?? '',
    site: site!,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/${lang}/${post.slug}/`,
      description: post.data.description,
      pubDate: post.data.date,
    }))
  })
};
