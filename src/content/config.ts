import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    tag: z.string().optional(),
    // Optional direct URL to the project (absolute https:// or root-relative /path)
    url: z.string().optional(),
  }),
});

export const collections = { 'projects': projectsCollection };