import type { z } from 'zod';
import type { stepItemSchema } from '@/features/tools/schemas/how-to-start.schema';

export type StepItem = z.infer<typeof stepItemSchema>;
