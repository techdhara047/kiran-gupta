// src/content/experience.ts
import { defineCollection, z } from "astro:content";

const experienceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    position: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    bulletPoints: z.array(z.string()).optional(),
  }),
});

// Define the collection schema
const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});
export const collections = {
  experience: experienceCollection,
  "excel-analysis": projectCollection,
};
