import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const ctaActionSchema = z.object({
  icon: lucideIconSchema,
  label: z.string(),
  tone: z.enum(['white', 'teal', 'yellow']),
});
