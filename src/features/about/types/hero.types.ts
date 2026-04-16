import type { z } from 'zod';
import type { aboutHeroSchema } from '@/features/about/schemas/hero.schema';

export type AboutHero = z.infer<typeof aboutHeroSchema>;
