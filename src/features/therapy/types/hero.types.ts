import type { z } from 'zod';
import type { therapyHeroContentSchema } from '@/features/therapy/schemas/hero.schema';

export type TherapyHeroContent = z.infer<typeof therapyHeroContentSchema>;
