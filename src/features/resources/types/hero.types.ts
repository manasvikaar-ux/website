import type { z } from 'zod';
import type {
  heroIconsSchema,
  resourcesHeroSchema,
} from '@/features/resources/schemas/hero.schema';

export type ResourcesHero = z.infer<typeof resourcesHeroSchema>;
export type HeroIcons = z.infer<typeof heroIconsSchema>;
