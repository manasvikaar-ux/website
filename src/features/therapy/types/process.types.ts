import type { z } from 'zod';
import type { processStepSchema } from '@/features/therapy/schemas/process.schema';

export type ProcessStep = z.infer<typeof processStepSchema>;
