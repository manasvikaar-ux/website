import type { z } from 'zod';
import type {
  faqItemSchema,
  faqSectionContentSchema,
} from '@/features/home/schemas/faq.schema';

export type FaqItem = z.infer<typeof faqItemSchema>;
export type FaqSectionContent = z.infer<typeof faqSectionContentSchema>;
