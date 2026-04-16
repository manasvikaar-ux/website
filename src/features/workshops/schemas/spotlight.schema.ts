import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const SpotlightBulletSchema = z.object({
  text: z.string(),
});

export const SpotlightContentSchema = z.object({
  badge: z.string(),
  bullets: z.array(z.string()),
  cta: z.string(),
  description: z.string(),
  title: z.string(),
  titleLineTwo: z.string(),
});

export const SpotlightBulletIconSchema = lucideIconSchema;
