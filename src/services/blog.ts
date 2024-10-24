import type { PostResponse } from "~/types/Post";
import qs from "qs";

const STRAPI_URL = import.meta.env.STRAPI_URL;
let posts: PostResponse | null = null;

export const getPosts = async (locale: string = 'en') => {
  if (posts) return posts;

  console.log(`Fetching posts...`);

  const query = qs.stringify({
    locale,
    filters: {
      visibility: { $eq: true },
    },
    sort: [
      'id:desc'
    ],
    populate: {
      tags: {
        fields: ['name', 'slug'],
      },
      image: {
        fields: ['name', 'alternativeText', 'width', 'height', 'mime', 'url'],
      },
    },
  }, {
    encodeValuesOnly: true,
  });

  const url = `${STRAPI_URL}/api/posts?${query}`;

  posts = await fetch(url).then(res => res.json()) as PostResponse;
  console.log(posts.data);

  console.log(`Fetched ${posts.data.length} posts.`);

  return posts;
}