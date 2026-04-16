import type { AudienceItem } from '@/features/therapy/types/audience.types';

export const therapyAudienceItems: AudienceItem[] = [
  {
    backgroundClassName: 'bg-primary border-primary/50',
    description:
      'Constant worry, panic attacks, or social anxiety that interferes with daily life.',
    textClassName: 'text-gray-800',
    title: 'Anxiety',
    titleClassName: 'text-gray-900',
  },
  {
    backgroundClassName: 'bg-background-teal border-teal-200',
    description:
      'Overwhelmed by work, life transitions, or burnout requiring management strategies.',
    textClassName: 'text-teal-900',
    title: 'Stress',
    titleClassName: 'text-teal-900',
  },
  {
    backgroundClassName: 'bg-white border-gray-200',
    description:
      'Navigating conflicts, communication issues, or separation in personal relationships.',
    textClassName: 'text-gray-600',
    title: 'Relationships',
    titleClassName: 'text-gray-900',
  },
  {
    backgroundClassName: 'bg-orange-100 border-orange-200',
    description:
      'Difficulty managing intense emotions like anger, sadness, or mood swings.',
    textClassName: 'text-orange-800',
    title: 'Emotional Regulation',
    titleClassName: 'text-orange-900',
  },
  {
    backgroundClassName:
      'bg-blue-100 border-blue-200 md:col-span-2 lg:col-span-1',
    description:
      'Seeking self-discovery, improved self-esteem, and unlocking your potential.',
    textClassName: 'text-blue-800',
    title: 'Personal Growth',
    titleClassName: 'text-blue-900',
  },
];
