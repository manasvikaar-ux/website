import { z } from 'zod';

export const bookingFieldOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const bookingFormSchema = z.object({
  category: z
    .string({ message: 'Please select a category.' })
    .min(1, 'Please select a category.'),
  contactNumber: z
    .string()
    .min(7, 'Enter a valid phone number.')
    .max(15, 'Enter a valid phone number.')
    .regex(/^\+?[0-9\s\-()]+$/, 'Enter a valid phone number.'),
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name is too long.')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters.'),
  notes: z.string().max(500, 'Notes must be under 500 characters.').optional(),
  preferredTime: z
    .string({ message: 'Please select a preferred time.' })
    .min(1, 'Please select a preferred time.'),
});
