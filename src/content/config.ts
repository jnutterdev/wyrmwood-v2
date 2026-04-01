import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    title:     z.string(),
    category:  z.enum(['music', 'fiction', 'tabletop']),
    date:      z.string(), // YYYY-MM-DD
    excerpt:   z.string(),
    rating:    z.number().min(1).max(5),
    tags:      z.array(z.string()),
    featured:  z.boolean().default(false),
    spotlight: z.boolean().default(false),
    byline:    z.string().optional(),
    readTime:  z.string().optional(), // e.g. "8 min read"
  }),
});

export const collections = { reviews };
