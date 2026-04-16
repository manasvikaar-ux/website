import { z } from 'zod';

export const stepItemSchema = z.object({
  description: z.string(),
  emoji: z.string(),
  title: z.string(),
});
