import type { z } from 'zod';
import type {
  bookingFieldOptionSchema,
  bookingFormSchema,
} from '@/features/therapy/schemas/booking.schema';

export type BookingFieldOption = z.infer<typeof bookingFieldOptionSchema>;
export type BookingFormValues = z.infer<typeof bookingFormSchema>;
