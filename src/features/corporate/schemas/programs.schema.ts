import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const corporateProgramItemSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  iconClassName: z.string(),
  title: z.string(),
  toneClassName: z.string(),
  wide: z.boolean().optional(),
});

export const corporateProgramsContentSchema = z.object({
  description: z.string(),
  title: z.string(),
});
