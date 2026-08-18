import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const planSchema = z.object({
  precio: z.string(),
  descripcion: z.string(),
  incluye: z.array(z.string()),
  recomendado: z.boolean().optional(),
});

const serviciosCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    planes: z.object({
      basico: planSchema,
      pro: planSchema,
      business: planSchema,
    }),
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

export const collections = {
  servicios: serviciosCollection,
};
