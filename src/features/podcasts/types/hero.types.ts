import type { z } from 'zod';
import type {
  FeaturedEpisodeIconsSchema,
  FeaturedEpisodeMetaSchema,
  HeroContentSchema,
} from '@/features/podcasts/schemas/hero.schema';

export type HeroContent = z.infer<typeof HeroContentSchema>;
export type FeaturedEpisodeMeta = z.infer<typeof FeaturedEpisodeMetaSchema>;
export type FeaturedEpisodeIcons = z.infer<typeof FeaturedEpisodeIconsSchema>;
