import type { z } from 'zod';
import type {
  corporatePartnerCategorySchema,
  corporatePartnerLogoSchema,
  corporatePartnersContentSchema,
} from '@/features/corporate/schemas/partners.schema';

export type CorporatePartnerCategory = z.infer<
  typeof corporatePartnerCategorySchema
>;

export type CorporatePartnerLogo = z.infer<typeof corporatePartnerLogoSchema>;

export type CorporatePartnersContent = z.infer<
  typeof corporatePartnersContentSchema
>;
