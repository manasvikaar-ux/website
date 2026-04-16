import { Diamond, Flower2 } from 'lucide-react';
import {
  pricingPlanSchema,
  pricingSectionContentSchema,
} from '@/features/home/schemas/pricing.schema';
import { CheckIcon } from '@/shared/components/ui/check';
import { SparklesIcon } from '@/shared/components/ui/sparkles';

export const pricingPlans = [
  pricingPlanSchema.parse({
    description:
      'For school and college students navigating academic pressure, relationships, and personal growth.',
    features: [
      '45 minute confidential session',
      'Support for academic stress, emotional concerns, and personal challenges',
      'Conversations around relationships, self-esteem, and career confusion',
      'Flexible scheduling around your timetable',
    ],
    icon: Flower2,
    name: 'Students',
    price: '₹ 750',
    priceSuffix: '/session',
    wrapperClassName:
      'border-b border-gray-900 bg-background-cream hover:bg-orange-50/50 md:border-r md:border-b-0',
  }),
  pricingPlanSchema.parse({
    description:
      'Very Good for improving the healthy habits you want to build.',
    features: [
      '60-minute video or in-person session',
      'Individual or couples counselling',
      'Unlimited chat support between sessions',
      'Personalised worksheet access',
    ],
    icon: SparklesIcon,
    name: 'Working Professionals & Couples',
    popular: true,
    price: '₹ 1499 - 2000',
    priceSuffix: 'session',
    wrapperClassName:
      'border-b border-gray-900 bg-background-peach md:border-r md:border-b-0',
  }),
  pricingPlanSchema.parse({
    description: 'Designed for organizations with complex hiring needs.',
    features: [
      '90-minute deep-dive sessions',
      'Priority scheduling with senior therapists',
      'Option to include family members',
      'Crisis intervention support available',
    ],
    icon: Diamond,
    name: 'HNIs',
    price: '₹ 2500 onwards',
    wrapperClassName: 'bg-background-cream hover:bg-orange-50/50',
  }),
];

export const pricingFeatureIcon = CheckIcon;

export const pricingSectionContent = pricingSectionContentSchema.parse({
  annualLabel: 'Annual',
  getStarted: 'Get Started',
  heading: 'Choose the Support That Fits Your Needs',
  includedLabel: "What's included:",
  monthlyLabel: 'Monthly',
  popularBadge: 'Most Popular',
  subheading:
    "Every tier is designed to meet you where you are, whether you're just starting out or ready for deeper, ongoing support.",
});
