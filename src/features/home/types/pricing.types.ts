import type { z } from 'zod';
import type {
  pricingPlanSchema,
  pricingSectionContentSchema,
} from '@/features/home/schemas/pricing.schema';

export type PricingPlan = z.infer<typeof pricingPlanSchema>;
export type PricingSectionContent = z.infer<typeof pricingSectionContentSchema>;
