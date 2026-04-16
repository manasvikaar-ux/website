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
  ctaImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCvpJ3NgzYps_swmcadxg76zPMeN2An7WY8OYW5regaKsgXsYZGBAjmmXTlSD4Vgvq1BaIDd5N5YjGMDApZTzK5KxWfB-6c8Grttz8PcjgRfW9BDsIHjg6x255sSyPszXgOjc11tDeSIzM7SFJUOzi2kEPypULF_nvZ3okVIbS4vtS1qFzL-TDTnXMUjUBxWF8u_CRUkjCu_ZRGdLT1Oh0Sc7wlj1m6E8-rpu9uMGjnqjhdACiT_bECM3xwcAFT9mQCsLLZ8wZKdgU',
});
