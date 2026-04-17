import {
  ctaImageAssetsSchema,
  ctaSectionContentSchema,
} from '@/features/home/schemas/cta.schema';

export const ctaSectionContent = ctaSectionContentSchema.parse({
  description:
    'Beautiful wellness. Intuitive interface. No unexpected fees. Need immediate help?',
  heading: 'Take control of Wellness and Productivity with Manasvikaar',
  helpline: 'If in crisis, call National Helpline: 1075',
  primaryCta: 'Get Started',
});

export const ctaImageAssets = ctaImageAssetsSchema.parse({
  ctaImage: '/home/cta/cta.png',
});
