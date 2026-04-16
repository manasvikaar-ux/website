import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const resourcesCtaSchema = z.object({
  description: z.string(),
  primaryLabel: z.string(),
  secondaryLabel: z.string(),
  title: z.string(),
});

export const ctaIconsSchema = z.object({
  cta: lucideIconSchema,
});
