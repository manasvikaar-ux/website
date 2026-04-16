import { Edit } from 'lucide-react';
import { ctaActionSchema } from '@/features/tools/schemas/cta.schema';
import { CalendarDaysIcon as CalendarDays } from '@/shared/components/ui/calendar-days';
import { SmileIcon as Smile } from '@/shared/components/ui/smile';

export const toolsCtaActions = [
  ctaActionSchema.parse({
    icon: Edit,
    label: 'Coming Soon',
    tone: 'white',
  }),
  ctaActionSchema.parse({
    icon: Smile,
    label: 'Coming Soon',
    tone: 'teal',
  }),
  ctaActionSchema.parse({
    icon: CalendarDays,
    label: 'Coming Soon',
    tone: 'yellow',
  }),
];
