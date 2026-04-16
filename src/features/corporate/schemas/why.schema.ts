import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const corporateWhyItemSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  iconClassName: z.string(),
  title: z.string(),
});

export const corporateWhyContentSchema = z.object({
  description: z.string(),
  title: z.string(),
});
