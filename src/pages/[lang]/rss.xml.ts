import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import type { Locale } from '@/i18n/constants';
import { localeParams } from '@/i18n/helpers';
import { getAllBlogPosts } from '@/services/blog';

export const getStaticPaths = () => localeParams;

export const GET: APIRoute = async ({ params, site }) => {
  const { lang } = params;
  const posts = await getAllBlogPosts(lang as Locale | undefined);
  return rss({
    title: '@vladiantio',
    description: 'Ingeniero de software con 4 años de experiencia, construyendo sitios y aplicaciones web innovadoras y de calidad.',
    site: site!,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/${lang}/${post.slug}/`,
      description: post.data.description,
      pubDate: post.data.date,
    }))
  })
};
