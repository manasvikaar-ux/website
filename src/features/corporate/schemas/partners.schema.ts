import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const corporatePartnerCategorySchema = z.object({
  icon: lucideIconSchema,
  title: z.string(),
});

export const corporatePartnerLogoSchema = z.object({
  className: z.string(),
  name: z.string(),
});

export const corporatePartnersContentSchema = z.object({
  description: z.string(),
  title: z.string(),
});
