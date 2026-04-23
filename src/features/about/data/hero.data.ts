import { aboutHeroSchema } from '@/features/about/schemas/hero.schema';

export const aboutHero = aboutHeroSchema.parse({
  badge: 'Who We Are',
  cta: 'Our Values',
  description:
    "We believe that everyone deserves a safe space to heal, grow, and find their footing. Manasvikaar was built to bridge the gap between traditional therapy and the people who need it most, but haven't yet found their way in.",
  imgAlt: 'Group of friends supporting each other outdoors',
  imgSrc: '/about/hero/hero.png',
  title: 'Our Mission is to Make Mental Wellness',
  titleEmphasis: 'Accessible.',
});
