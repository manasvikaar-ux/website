import { z } from 'zod';

export const therapyPlanSchema = z.object({
  description: z.string(),
  features: z.array(z.string()),
  highlighted: z.boolean().optional(),
  interval: z.string(),
  keyBenefits: z.array(z.string()),
  price: z.string(),
  sessionSummary: z.string(),
  title: z.string(),
});
