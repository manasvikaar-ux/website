import type { z } from 'zod';
import type { WorkshopsHeroSchema } from '@/features/workshops/schemas/hero.schema';

export type WorkshopsHero = z.infer<typeof WorkshopsHeroSchema>;
