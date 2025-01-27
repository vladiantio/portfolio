import { getCollection } from 'astro:content';
import type { Locale } from '@/i18n/constants';
import type { PostEntry } from '@/types/Post';

export const getAllBlogPosts: (language?: Locale) => Promise<PostEntry[]> = async (language) => {
  const entries = await getCollection('blog', ({ data, slug }) =>
    (language ? slug.split('/')[1] === language : true) &&
    (import.meta.env.PROD ? data.isDraft !== true : true)
  ) as PostEntry[];
  entries.sort((a, b) => b.slug.localeCompare(a.slug));
  entries.forEach(entry => {
    const slugPaths = entry.slug.split('/');
    entry.slug = slugPaths[0].slice(slugPaths[0].indexOf('-') + 1);
    entry.lang = slugPaths[1] as Locale;
  });
  return entries;
}
