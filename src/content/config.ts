import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3),
      description: z.string().min(10),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      tags: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
      featured: z.boolean().default(false),
      order: z.number().int().default(999),
      url: z.string().url().optional(),
      repository: z.string().url().optional(),
    }),
});

export const collections = { projects: projectsCollection };
