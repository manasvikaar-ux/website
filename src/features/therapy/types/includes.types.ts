import type { z } from 'zod';
import type { therapyIncludeItemSchema } from '@/features/therapy/schemas/includes.schema';

export type TherapyIncludeItem = z.infer<typeof therapyIncludeItemSchema>;
