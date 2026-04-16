import type { z } from 'zod';
import type { therapyPlanSchema } from '@/features/therapy/schemas/pricing.schema';

export type TherapyPlan = z.infer<typeof therapyPlanSchema>;
