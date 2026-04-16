import { aboutCtaSchema } from '@/features/about/schemas/cta.schema';

export const aboutCta = aboutCtaSchema.parse({
  cta: 'Get Started',
  description:
    "Ready to prioritize your mental health? Start your journey with Manasvikaar today and find the support you've been looking for.",
  title: 'Join our community of wellness',
});
