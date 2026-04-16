import type { z } from 'zod';
import type { ctaActionSchema } from '@/features/tools/schemas/cta.schema';

export type CtaAction = z.infer<typeof ctaActionSchema>;
