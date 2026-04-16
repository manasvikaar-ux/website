import type { z } from 'zod';
import type { corporateOutcomeItemSchema } from '@/features/corporate/schemas/outcomes.schema';

export type CorporateOutcomeItem = z.infer<typeof corporateOutcomeItemSchema>;
