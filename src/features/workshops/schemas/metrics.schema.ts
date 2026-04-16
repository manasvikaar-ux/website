import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const MetricItemSchema = z.object({
  icon: lucideIconSchema,
  label: z.string(),
  value: z.string(),
});
