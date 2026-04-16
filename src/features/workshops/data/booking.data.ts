import { Calendar } from 'lucide-react';
import {
  BookingFormSchema,
  BookingNoteIconSchema,
} from '@/features/workshops/schemas/booking.schema';

export const bookingForm = BookingFormSchema.parse({
  ageGroups: ['Select age...', '6-12', '13-18', '19-35', '35+'],
  workshops: [
    'Handwriting Analysis - May 12',
    'Art Therapy for Kids - May 15',
    'Stress Management Camp - May 20',
    'Journaling Masterclass - May 24',
  ],
});

export const bookingNoteIcon = BookingNoteIconSchema.parse(Calendar);
