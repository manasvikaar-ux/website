import { AlertTriangle } from 'lucide-react';
import {
  heroIconsSchema,
  resourcesHeroSchema,
} from '@/features/resources/schemas/hero.schema';

export const resourcesHero = resourcesHeroSchema.parse({
  description:
    'If you or someone you know is struggling, immediate help is available. This directory provides verified contacts for emergency support, helplines, and care facilities.',
  note: 'Manasvikaar is an online wellness platform and not a crisis intervention service. The resources listed below are third-party services.',
  title: 'You Are Not Alone.',
  titleEmphasis: 'Support is Within Reach.',
});

export const heroIcons = heroIconsSchema.parse({
  danger: AlertTriangle,
});
