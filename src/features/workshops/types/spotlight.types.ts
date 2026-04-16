import type { z } from 'zod';
import type {
  SpotlightBulletSchema,
  SpotlightContentSchema,
} from '@/features/workshops/schemas/spotlight.schema';

export type SpotlightBullet = z.infer<typeof SpotlightBulletSchema>;
export type SpotlightContent = z.infer<typeof SpotlightContentSchema>;
