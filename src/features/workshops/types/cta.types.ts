import type { z } from 'zod';
import type { WorkshopsCtaSchema } from '@/features/workshops/schemas/cta.schema';

export type WorkshopsCta = z.infer<typeof WorkshopsCtaSchema>;
