import { getCollection } from 'astro:content';
import type { Locale } from '@/i18n/constants';
import type { PostEntry } from '@/types/Post';

function transformPost(post: PostEntry, index: number, posts: PostEntry[]): PostEntry {
  const slugPaths = post.id.split('/');
  post.slug = slugPaths[0].slice(slugPaths[0].indexOf('-') + 1);
  post.lang = slugPaths[1] as Locale;
  post.next = index < posts.length - 1
    ? posts[index + 1]
    : undefined;
  post.previous = index > 0
    ? posts[index - 1]
    : undefined;
  return post;
}

export const getAllBlogPosts: (language?: Locale) => Promise<PostEntry[]> = async (language) => {
  const collection = await getCollection('blog', ({ data, id }) =>
    (language ? id.split('/')[1] === language : true) &&
    (import.meta.env.PROD ? data.isDraft !== true : true)
  ) as PostEntry[];
  const groupedPosts = Object.groupBy(collection, ({ id }) => id.split('/')[1]);
  const posts: PostEntry[] = [];
  for (const group of Object.values(groupedPosts)) {
    if (!group) continue;
    const sortedPosts = group.toSorted((a, b) => a.id.localeCompare(b.id));
    const mappedPosts = sortedPosts.map(transformPost);
    posts.push(...mappedPosts);
  }
  return posts;
}
