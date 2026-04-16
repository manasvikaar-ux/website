import type { z } from 'zod';
import type {
  ctaImageAssetsSchema,
  ctaSectionContentSchema,
} from '@/features/home/schemas/cta.schema';

export type CtaSectionContent = z.infer<typeof ctaSectionContentSchema>;
export type CtaImageAssets = z.infer<typeof ctaImageAssetsSchema>;
