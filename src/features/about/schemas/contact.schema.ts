import { z } from 'zod';

export const contactFormSchema = z.object({
  city: z.string().min(2, 'City must be at least 2 characters.').max(100, 'City is too long.'),
  email: z.string().email('Enter a valid email address.'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(1000, 'Message must be under 1000 characters.'),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name is too long.')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters.'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone number.')
    .max(15, 'Enter a valid phone number.')
    .regex(/^\+?[0-9\s\-()]+$/, 'Enter a valid phone number.'),
});
