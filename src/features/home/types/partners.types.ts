import type { z } from 'zod';
import type {
  partnerItemSchema,
  partnersSectionContentSchema,
} from '@/features/home/schemas/partners.schema';

export type PartnerItem = z.infer<typeof partnerItemSchema>;
export type PartnersSectionContent = z.infer<
  typeof partnersSectionContentSchema
>;
