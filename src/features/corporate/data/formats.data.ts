import { Laptop, Store } from 'lucide-react';
import type { CorporateFormatItem } from '@/features/corporate/types/formats.types';
import { CalendarDaysIcon as CalendarDays } from '@/shared/components/ui/calendar-days';

export const corporateFormatsContent = {
  description: 'Learning that fits where you are.',
  title: 'How We Meet',
} as const;

export const corporateFormats: CorporateFormatItem[] = [
  {
    description:
      'Live, interactive sessions from wherever you are — structured, personal, and just as engaging as being in the room.',
    icon: Laptop,
    title: 'Online via Google Meet',
  },
  {
    description:
      'New Alipore, Kolkata Join us face to face at our space in New Alipore for a more immersive, hands-on learning experience.',
    icon: Store,
    title: 'In Person',
  },
  {
    description:
      'Prefer to learn in the comfort of your own space? We come to you — sessions can be arranged subject to location.',
    icon: CalendarDays,
    title: 'At Your Doorstep',
  },
];
