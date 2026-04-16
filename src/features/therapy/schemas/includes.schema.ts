import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const therapyIncludeItemSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  title: z.string(),
});
