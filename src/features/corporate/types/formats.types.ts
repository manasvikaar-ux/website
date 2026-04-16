import type { z } from 'zod';
import type {
  corporateFormatItemSchema,
  corporateFormatsContentSchema,
} from '@/features/corporate/schemas/formats.schema';

export type CorporateFormatItem = z.infer<typeof corporateFormatItemSchema>;

export type CorporateFormatsContent = z.infer<
  typeof corporateFormatsContentSchema
>;
