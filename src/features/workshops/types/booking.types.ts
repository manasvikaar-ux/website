import type { z } from 'zod';
import type {
  BookingFormSchema,
  workshopBookingFormSchema,
} from '@/features/workshops/schemas/booking.schema';

export type BookingForm = z.infer<typeof BookingFormSchema>;
export type WorkshopBookingFormValues = z.infer<
  typeof workshopBookingFormSchema
>;
