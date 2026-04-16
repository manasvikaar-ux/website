import type { z } from 'zod';
import type {
  corporateFaqContentSchema,
  corporateFaqItemSchema,
} from '@/features/corporate/schemas/faq.schema';

export type CorporateFaqItem = z.infer<typeof corporateFaqItemSchema>;

export type CorporateFaqContent = z.infer<typeof corporateFaqContentSchema>;
