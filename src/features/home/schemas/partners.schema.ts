import { z } from 'zod';

export const partnerItemSchema = z.object({
  className: z.string().optional(),
  name: z.string(),
});

export const partnersSectionContentSchema = z.object({
  cta: z.string(),
  description: z.string(),
  heading: z.string(),
});
