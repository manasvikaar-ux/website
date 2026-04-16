import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const corporateFormatItemSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  title: z.string(),
});

export const corporateFormatsContentSchema = z.object({
  description: z.string(),
  title: z.string(),
});
