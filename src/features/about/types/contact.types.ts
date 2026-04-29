import type { z } from 'zod';
import type { contactFormSchema } from '@/features/about/schemas/contact.schema';

export type ContactFormValues = z.infer<typeof contactFormSchema>;
