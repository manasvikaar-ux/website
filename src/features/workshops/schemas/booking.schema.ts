import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const BookingFormSchema = z.object({
  ageGroups: z.array(z.string()).readonly(),
  workshops: z.array(z.string()).readonly(),
});

export const BookingNoteIconSchema = lucideIconSchema;

export const workshopBookingFormSchema = z.object({
  ageGroup: z
    .string({ message: 'Please select an age group.' })
    .min(1, 'Please select an age group.'),
  email: z
    .string()
    .min(1, 'Email is required.')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email address.'),
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name is too long.')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters.'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone number.')
    .max(15, 'Enter a valid phone number.')
    .regex(/^\+?[0-9\s\-()]+$/, 'Enter a valid phone number.'),
  workshop: z
    .string({ message: 'Please select a workshop.' })
    .min(1, 'Please select a workshop.'),
});
