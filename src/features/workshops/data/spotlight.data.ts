import {
  SpotlightBulletIconSchema,
  SpotlightContentSchema,
} from '@/features/workshops/schemas/spotlight.schema';
import { CheckIcon as Check } from '@/shared/components/ui/check';

export const spotlight = SpotlightContentSchema.parse({
  badge: 'Most Requested',
  bullets: [
    'Uncover subconscious personality traits you may not have had words for',
    'Identify emotional blocks and stress patterns',
    'Understand how you communicate — and how you might do it better',
  ],
  cta: 'Register Now',
  description:
    'Graphology is the study of personality through handwriting — and it can reveal patterns in how you think, feel, and relate to the world around you. This session is equal parts surprising and deeply insightful.',
  title: 'Handwriting Analysis',
  titleLineTwo: '(Graphology)',
});

export const spotlightBulletIcon = SpotlightBulletIconSchema.parse(Check);
