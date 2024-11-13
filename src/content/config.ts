import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean().default(false),
    date: z.date(),
    update: z.date().optional(),
    tags: z.array(z.string()).default([]),
    language: z.enum(['en', 'es']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};