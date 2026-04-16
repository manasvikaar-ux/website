import { z } from 'zod';

export const faqItemSchema = z.object({
  answer: z.string().optional(),
  question: z.string(),
});

export const faqItemsSchema = z.array(faqItemSchema);
