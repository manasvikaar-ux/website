import type { z } from 'zod';
import type { corporateQuoteContentSchema } from '@/features/corporate/schemas/quote.schema';

export type CorporateQuoteContent = z.infer<typeof corporateQuoteContentSchema>;
