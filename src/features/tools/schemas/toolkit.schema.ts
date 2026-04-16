import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const toolkitCardSchema = z.object({
  accentClassName: z.string(),
  buttonLabel: z.string(),
  buttonTone: z.enum(['primary', 'secondary', 'tertiary']),
  description: z.string(),
  icon: lucideIconSchema,
  iconClassName: z.string(),
  title: z.string(),
});

export const journalingFeatureIconSchema = z.object({
  icon: lucideIconSchema,
  label: z.string(),
});
