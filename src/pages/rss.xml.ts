import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getAllBlogPosts } from '@/services/blog';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getAllBlogPosts('es');
  return rss({
    title: '@vladiantio',
    description: 'Ingeniero de software con 4 años de experiencia, construyendo sitios y aplicaciones web innovadoras y de calidad.',
    site: site!,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/blog/${post.slug}/`,
      description: post.data.description,
      pubDate: post.data.date,
    }))
  })
};