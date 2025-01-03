import { getCollection } from 'astro:content';
import type { Locale } from '~/i18n/constants';
import type { PostEntry } from '~/types/Post';

export const getAllBlogPosts: (language?: Locale) => Promise<PostEntry[]> = async (language) => {
  const entries = await getCollection('blog', ({ data, id }) =>
    (language ? id.split('/')[0] === language : true) &&
    (import.meta.env.PROD ? data.isDraft !== true : true)
  ) as PostEntry[];
  entries.sort((a, b) => b.slug.localeCompare(a.slug));
  entries.forEach(entry => {
    const slugPaths = entry.slug.split('/');
    entry.lang = slugPaths[0] as Locale;
    entry.slug = slugPaths[1].slice(slugPaths[1].indexOf('-') + 1);
  });
  return entries;
}
