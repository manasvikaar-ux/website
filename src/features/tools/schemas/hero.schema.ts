import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const heroHighlightSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  iconClassName: z.string(),
  title: z.string(),
});

export const heroContentSchema = z.object({
  badge: z.string(),
  description: z.string(),
  primaryCta: z.string(),
  secondaryCta: z.string(),
  title: z.string(),
  titleEmphasis: z.string(),
});
