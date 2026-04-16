import type { z } from 'zod';
import type {
  ctaIconsSchema,
  resourcesCtaSchema,
} from '@/features/resources/schemas/cta.schema';

export type ResourcesCta = z.infer<typeof resourcesCtaSchema>;
export type CtaIcons = z.infer<typeof ctaIconsSchema>;
