import type { z } from 'zod';
import type { resourceStepSchema } from '@/features/resources/schemas/how-to-use.schema';

export type ResourceStep = z.infer<typeof resourceStepSchema>;
