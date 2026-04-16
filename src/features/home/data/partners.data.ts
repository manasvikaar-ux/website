import {
  partnerItemSchema,
  partnersSectionContentSchema,
} from '@/features/home/schemas/partners.schema';

export const partnerItems = [
  partnerItemSchema.parse({ className: '', name: 'Anger' }),
  partnerItemSchema.parse({ className: '', name: 'Anxiety' }),
  partnerItemSchema.parse({ className: '', name: 'Depression' }),
  partnerItemSchema.parse({ className: '', name: 'Relationship Struggles' }),
  partnerItemSchema.parse({ className: '', name: 'Parental Conflict' }),
  partnerItemSchema.parse({ className: '', name: 'Workplace Stress' }),
  partnerItemSchema.parse({ className: '', name: 'Mindfulness' }),
  partnerItemSchema.parse({ className: '', name: 'Grief' }),
  partnerItemSchema.parse({ className: '', name: 'Burnout' }),
  partnerItemSchema.parse({ className: '', name: 'Self-Esteem' }),
  partnerItemSchema.parse({ className: '', name: 'Identity' }),
  partnerItemSchema.parse({ className: '', name: 'Loneliness' }),
];

export const partnersSectionContent = partnersSectionContentSchema.parse({
  cta: 'See All Partners',
  description:
    'A safe space to understand what you are going through and find the right support for it.',
  heading: 'We Got You Covered',
});
