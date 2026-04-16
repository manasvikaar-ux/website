import type { z } from 'zod';
import type { FaqItemSchema } from '@/features/workshops/schemas/faq.schema';

export type FaqItem = z.infer<typeof FaqItemSchema>;
