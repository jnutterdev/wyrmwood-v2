import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
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
    readTime:  z.string().optional(),
  }),
});

export const collections = { reviews };
