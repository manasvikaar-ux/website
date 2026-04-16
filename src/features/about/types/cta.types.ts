import type { z } from 'zod';
import type { aboutCtaSchema } from '@/features/about/schemas/cta.schema';

export type AboutCta = z.infer<typeof aboutCtaSchema>;
