import type { z } from 'zod';
import type { aboutStatItemSchema } from '@/features/about/schemas/stats.schema';

export type AboutStatItem = z.infer<typeof aboutStatItemSchema>;
