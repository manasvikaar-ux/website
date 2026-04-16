import { z } from 'zod';

export const testimonialSchema = z.object({
  author: z.string(),
  designation: z.string(),
  quote: z.string(),
});

export const testimonialsSectionContentSchema = z.object({
  description: z.string(),
  heading: z.string(),
});
