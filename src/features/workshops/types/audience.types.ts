import type { z } from 'zod';
import type { AudienceCardItemSchema } from '@/features/workshops/schemas/audience.schema';

export type AudienceCardItem = z.infer<typeof AudienceCardItemSchema>;
