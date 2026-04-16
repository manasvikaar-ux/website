import { z } from 'zod';

export const corporateFaqItemSchema = z.object({
  answer: z.string().optional(),
  question: z.string(),
});

export const corporateFaqContentSchema = z.object({
  ctaButton: z.string(),
  ctaDescription: z.string(),
  ctaTitle: z.string(),
  description: z.string(),
  title: z.string(),
});
