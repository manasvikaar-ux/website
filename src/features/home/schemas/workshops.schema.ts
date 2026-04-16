import { z } from 'zod';

export const workshopBenefitItemSchema = z.object({
  background: z.string(),
  description: z.string(),
  fullWidth: z.boolean().optional(),
  title: z.string(),
});

export const workshopsSectionContentSchema = z.object({
  description: z.string(),
  heading: z.string(),
});

export type WorkshopBenefitItem = z.infer<typeof workshopBenefitItemSchema>;
