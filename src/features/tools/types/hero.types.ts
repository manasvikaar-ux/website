import type { z } from 'zod';
import type {
  heroContentSchema,
  heroHighlightSchema,
} from '@/features/tools/schemas/hero.schema';

export type HeroHighlight = z.infer<typeof heroHighlightSchema>;
export type HeroContent = z.infer<typeof heroContentSchema>;
