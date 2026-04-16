import type { z } from 'zod';
import type {
  heroContentSchema,
  heroImageAssetsSchema,
  heroStatSchema,
} from '@/features/home/schemas/hero.schema';

export type HeroStat = z.infer<typeof heroStatSchema>;
export type HeroContent = z.infer<typeof heroContentSchema>;
export type HeroImageAssets = z.infer<typeof heroImageAssetsSchema>;
