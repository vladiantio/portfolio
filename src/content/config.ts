import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean().default(false),
    date: z.date(),
    update: z.date().optional(),
    tags: z.array(z.string()).default([]),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      og: z.string().optional(),
    }).optional(),
    sources: z.array(z.object({
      title: z.string(),
      href: z.string(),
    })).default([]),
  }),
});

export const collections = { blog };
