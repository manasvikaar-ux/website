import type { z } from 'zod';
import type {
  corporateHeroAvatarSchema,
  corporateHeroContentSchema,
  corporateHeroVisualsSchema,
} from '@/features/corporate/schemas/hero.schema';

export type CorporateHeroAvatar = z.infer<typeof corporateHeroAvatarSchema>;

export type CorporateHeroContent = z.infer<typeof corporateHeroContentSchema>;

export type CorporateHeroVisuals = z.infer<typeof corporateHeroVisualsSchema>;
