import { z } from 'zod';

export const aboutCtaSchema = z.object({
  cta: z.string(),
  description: z.string(),
  title: z.string(),
});
