import type { TherapyPlan } from '@/features/therapy/types/pricing.types';
import { CheckIcon as Check } from '@/shared/components/ui/check';

export const therapyPricingPlans: TherapyPlan[] = [
  {
    description:
      'For school and college students navigating academic pressure, relationships, and personal growth.',
    features: ['Session Summary', 'Key Benefits'],
    interval: '/session',
    keyBenefits: [
      '45 minute confidential session',
      'Support for academic stress, emotional concerns, and personal challenges',
      'Conversations around relationships, self-esteem, and career confusion',
      'Flexible scheduling around your timetable',
    ],
    price: '\u20B9 750',
    sessionSummary: '45-minute confidential session tailored for students.',
    title: 'Students',
  },
  {
    description: 'For improving the healthy habits you want to build.',
    features: ['Session Summary', 'Key Benefits'],
    highlighted: true,
    interval: '/session',
    keyBenefits: [
      '60-minute video or in-person session',
      'Individual or couples counselling',
      'Unlimited chat support between sessions',
      'Personalised worksheet access',
    ],
    price: '\u20B9 1499 - 2000',
    sessionSummary:
      '60-minute in-depth therapy session with personalized resources.',
    title: 'Working Professionals & Couples',
  },
  {
    description:
      'For those seeking premium, comprehensive mental health support.',
    features: ['Session Summary', 'Key Benefits'],
    interval: '',
    keyBenefits: [
      '90-minute deep-dive sessions',
      'Priority scheduling with senior therapists',
      'Option to include family members',
      'Crisis intervention support available',
    ],
    price: '\u20B9 2500 onwards',
    sessionSummary: '90-minute deep-dive sessions with senior therapists.',
    title: 'HNIs',
  },
];

export const pricingCheckIcon = Check;
