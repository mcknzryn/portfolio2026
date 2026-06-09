import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    client: z.string(),
    discipline: z.array(z.string()),
    summary: z.string(),
    order: z.number(),
    heroImage: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        layout: z.enum(['full', 'wide', 'narrow']),
        width: z.string().optional(),
        offsetY: z.string().optional(),
      }),
    ),
    gallery: z
      .object({
        trackGap: z.string().optional(),
        trackInset: z.string().optional(),
        imageWidths: z
          .object({
            full: z.string().optional(),
            wide: z.string().optional(),
            narrow: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
