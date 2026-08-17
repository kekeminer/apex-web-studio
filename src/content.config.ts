import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const serviciosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    benefits: z.array(z.string()),
    process: z.array(
      z.object({
        step: z.string(),
        title: z.string(),
        description: z.string(),
      })
    ),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});

const proyectosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    results: z.array(z.string()),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = {
  servicios: serviciosCollection,
  proyectos: proyectosCollection,
};
