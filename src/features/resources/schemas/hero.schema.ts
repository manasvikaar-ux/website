import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const resourcesHeroSchema = z.object({
  description: z.string(),
  note: z.string(),
  title: z.string(),
  titleEmphasis: z.string(),
});

export const heroIconsSchema = z.object({
  danger: lucideIconSchema,
});
