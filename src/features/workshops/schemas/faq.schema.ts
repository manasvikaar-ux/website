import { z } from 'zod';

export const FaqItemSchema = z.object({
  answer: z.string().optional(),
  question: z.string(),
});
