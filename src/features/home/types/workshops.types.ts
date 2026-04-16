import type { z } from 'zod';
import type {
  workshopBenefitItemSchema,
  workshopsSectionContentSchema,
} from '@/features/home/schemas/workshops.schema';

export type WorkshopBenefitItem = z.infer<typeof workshopBenefitItemSchema>;
export type WorkshopsSectionContent = z.infer<
  typeof workshopsSectionContentSchema
>;
