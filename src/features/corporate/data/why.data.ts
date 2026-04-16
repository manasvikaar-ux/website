import type { CorporateWhyItem } from '@/features/corporate/types/why.types';
import { BatteryWarningIcon as BatteryWarning } from '@/shared/components/ui/battery-warning';
import { SparklesIcon as Sparkles } from '@/shared/components/ui/sparkles';

export const corporateWhyContent = {
  description:
    'Psychology degrees teach you theory. But working with real people — their grief, their confusion, their silence — requires something more.',
  title: 'Why this program exists',
} as const;

export const corporateWhyItems: CorporateWhyItem[] = [
  {
    description:
      "Most students graduate knowing frameworks but not yet knowing themselves as practitioners. They've studied disorders but haven't sat with distress.",
    icon: BatteryWarning,
    iconClassName: 'bg-red-100 border-red-200 text-red-600',
    title: 'The gap in training',
  },
  {
    description:
      'Understanding concepts is one thing. Finding your own therapeutic presence, your instincts, your boundaries as a practitioner — that takes guidance that classrooms rarely offer',
    icon: Sparkles,
    iconClassName: 'bg-purple-100 border-purple-200 text-purple-600',
    title: 'The missing voice',
  },
  {
    description:
      'The clients you will meet carry stories shaped by family pressure, cultural silence, and generational pain. This programme prepares you for that — specifically.',
    icon: Sparkles,
    iconClassName: 'bg-purple-100 border-purple-200 text-purple-600',
    title: 'The Indian reality ',
  },
];
