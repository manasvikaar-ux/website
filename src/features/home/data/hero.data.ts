import {
  heroContentSchema,
  heroImageAssetsSchema,
  heroStatSchema,
} from '@/features/home/schemas/hero.schema';

export const heroStats = [
  heroStatSchema.parse({
    label: 'low to middle - income countries receive no care.',
    value: '85%',
  }),
  heroStatSchema.parse({
    label: 'Lost to suicide yearly, a leading cause in ages 15-29.',
    value: '700k',
  }),
  heroStatSchema.parse({
    label: 'Of all suicide victims in India are men.',
    value: '72%',
  }),
  heroStatSchema.parse({
    label: 'People globally live with a mental health condition.',
    value: '1/8',
  }),
];

export const heroContent = heroContentSchema.parse({
  badge: 'A Mental Health Platform For You, By You, With You.',
  description:
    "You don't need to have it all figured out to begin. Whether you're carrying something heavy or simply feeling off, Manasvikaar is a space where you can pause, be heard, and find your way forward. Guided by real people. Rooted in compassion.",
  primaryCta: 'Book a Consultation',
  secondaryCta: 'Explore Workshops',
  titleLineOne: 'Your Story,',
  titleLineTwo: 'Has a Place Here',
});

export const heroImageAssets = heroImageAssetsSchema.parse({
  heroImage: '/assets/hero.png',
});
