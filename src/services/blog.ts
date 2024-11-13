import { getCollection, type CollectionEntry } from 'astro:content';

export const getAllBlogPosts: (language?: string) => Promise<CollectionEntry<'blog'>[]> = (language: string = 'en') => getCollection('blog', ({ data }) => {
  return data.language === language && import.meta.env.PROD ? data.isDraft !== true : true;
});
