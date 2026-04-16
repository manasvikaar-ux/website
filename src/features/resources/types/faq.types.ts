import type { z } from 'zod';
import type { faqItemSchema } from '@/features/resources/schemas/faq.schema';

export type FaqItem = z.infer<typeof faqItemSchema>;
