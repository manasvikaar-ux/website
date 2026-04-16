import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const processStepSchema = z.object({
  borderClassName: z.string(),
  description: z.string(),
  icon: lucideIconSchema,
  lineClassName: z.string().optional(),
  title: z.string(),
});
