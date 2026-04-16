import type { z } from 'zod';
import type { audienceItemSchema } from '@/features/therapy/schemas/audience.schema';

export type AudienceItem = z.infer<typeof audienceItemSchema>;
