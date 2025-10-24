import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    isDraft: z.boolean().default(false),
    date: z.date(),
    update: z.date().optional(),
    tags: z.array(z.string()).default([]),
    hero: image().optional(),
    heroAlt: z.string().default(''),
    og: image().optional(),
    sources: z.array(z.object({
      title: z.string(),
      href: z.string(),
    })).default([]),
  }),
});

export const collections = { blog };
