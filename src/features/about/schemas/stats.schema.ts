import { z } from 'zod';

export const aboutStatItemSchema = z.object({
  // description: z.string(),
  label: z.string(),
  value: z.string(),
});
