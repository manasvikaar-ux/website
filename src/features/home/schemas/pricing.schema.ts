import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const pricingPlanSchema = z.object({
  description: z.string(),
  features: z.array(z.string()),
  icon: lucideIconSchema,
  name: z.string(),
  popular: z.boolean().optional(),
  price: z.string(),
  priceSuffix: z.string().optional(),
  wrapperClassName: z.string(),
});

export const pricingSectionContentSchema = z.object({
  annualLabel: z.string(),
  getStarted: z.string(),
  heading: z.string(),
  includedLabel: z.string(),
  monthlyLabel: z.string(),
  popularBadge: z.string(),
  subheading: z.string(),
});
