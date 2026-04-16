import type { TherapyIncludeItem } from '@/features/therapy/types/includes.types';
import { BrainIcon as Brain } from '@/shared/components/ui/brain';
import { CalendarDaysIcon as CalendarDays } from '@/shared/components/ui/calendar-days';
import { LockIcon as Lock } from '@/shared/components/ui/lock';

export const therapyIncludesItems: TherapyIncludeItem[] = [
  {
    description:
      'Every session is completely confidential. Your story is yours, and we treat it with the privacy and respect it deserves.',
    icon: Lock,
    title: 'What you share, stays here',
  },
  {
    description:
      'Our therapists bring both clinical training and genuine human warmth to every session, across a range of emotional and psychological concerns.',
    icon: Brain,
    title: 'Therapists who understand',
  },
  {
    description:
      'Life is full. We offer flexible scheduling including evenings and weekends, so care fits into your life, not the other way around.',
    icon: CalendarDays,
    title: 'On your time',
  },
];
