import { BookOpen } from 'lucide-react';
import {
  ctaIconsSchema,
  resourcesCtaSchema,
} from '@/features/resources/schemas/cta.schema';

export const resourcesCta = resourcesCtaSchema.parse({
  description:
    'If you are not in immediate danger but need support for your mental wellness journey, Manasvikaar is here to help you heal and grow.',
  primaryLabel: 'Book Consultation',
  secondaryLabel: 'Contact Manasvikaar',
  title: 'Looking for Non-Emergency Care?',
});

export const ctaIcons = ctaIconsSchema.parse({
  cta: BookOpen,
});
