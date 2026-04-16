import { Grid3X3, Video } from 'lucide-react';
import type { ProcessStep } from '@/features/therapy/types/process.types';
import { CalendarDaysIcon as CalendarDays } from '@/shared/components/ui/calendar-days';
import { TrendingUpIcon as TrendingUp } from '@/shared/components/ui/trending-up';

export const therapyProcessSteps: ProcessStep[] = [
  {
    borderClassName: 'border-[#f9dcc4]',
    description: 'Select the area you need support with.',
    icon: Grid3X3,
    lineClassName: 'bg-[#f9dcc4]',
    title: 'Choose Category',
  },
  {
    borderClassName: 'border-background-teal',
    description: 'Pick a time that fits your schedule.',
    icon: CalendarDays,
    lineClassName: 'bg-background-teal',
    title: 'Book Session',
  },
  {
    borderClassName: 'border-primary',
    description: 'Connect with your therapist securely.',
    icon: Video,
    lineClassName: 'bg-primary',
    title: 'Attend Session',
  },
  {
    borderClassName: 'border-blue-200',
    description: 'Receive resources and plan next steps.',
    icon: TrendingUp,
    title: 'Follow-up',
  },
];
