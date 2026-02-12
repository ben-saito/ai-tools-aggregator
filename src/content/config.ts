import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    seo: z.object({
      keywords: z.string(),
      ogImage: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
