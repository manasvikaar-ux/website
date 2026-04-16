import { z } from 'zod';

export const faqItemSchema = z.object({
  answer: z.string(),
  question: z.string(),
});
