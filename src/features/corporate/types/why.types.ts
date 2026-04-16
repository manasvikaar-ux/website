import type { z } from 'zod';
import type {
  corporateWhyContentSchema,
  corporateWhyItemSchema,
} from '@/features/corporate/schemas/why.schema';

export type CorporateWhyItem = z.infer<typeof corporateWhyItemSchema>;

export type CorporateWhyContent = z.infer<typeof corporateWhyContentSchema>;
