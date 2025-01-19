import { getCollection } from 'astro:content';
import type { PostEntry } from '@/types/Post';

export const getAllBlogPosts: (language?: string) => Promise<PostEntry[]> = async (language) => {
  const entries = await getCollection('blog', ({ data }) => {
    return (language ? data.language === language : true) && (import.meta.env.PROD ? data.isDraft !== true : true);
  });
  entries.sort((a, b) => b.id.localeCompare(a.id));
  return entries;
}
