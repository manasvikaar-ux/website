import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const HeroContentSchema = z.object({
  badge: z.string(),
  ctaPrimary: z.string(),
  ctaSecondary: z.string(),
  description: z.string(),
  title: z.string(),
  titleEmphasis: z.string(),
});

export const FeaturedEpisodeMetaSchema = z.object({
  date: z.string(),
  duration: z.string(),
  summary: z.string(),
  title: z.string(),
});

export const FeaturedEpisodeIconsSchema = z.object({
  calendar: lucideIconSchema,
  clock: lucideIconSchema,
  mic: lucideIconSchema,
});
