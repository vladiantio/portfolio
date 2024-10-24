import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPosts } from '~/services/blog';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts('es');
  return rss({
    title: '@vladiantio',
    description: 'Ingeniero de software con 4 años de experiencia, construyendo sitios y aplicaciones web innovadoras y de calidad.',
    site: site!,
    items: posts.data.map((post) => ({
      title: post.title,
      link: `/blog/${post.slug}/`,
      description: post.description,
      pubDate: post.publishedAt,
    }))
  })
};