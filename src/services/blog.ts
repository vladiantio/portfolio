import type { PostResponse } from "~/types/Post";
import qs from "qs";

const STRAPI_URL = import.meta.env.STRAPI_URL;

export const getPosts = async (locale: string = 'en') => {
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
    },
  }, {
    encodeValuesOnly: true,
  });

  const url = `${STRAPI_URL}/api/posts?${query}`;

  return await fetch(url).then(res => res.json()) as PostResponse;
}