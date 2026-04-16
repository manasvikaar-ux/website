import { aboutHeroSchema } from '@/features/about/schemas/hero.schema';

export const aboutHero = aboutHeroSchema.parse({
  badge: 'Who We Are',
  cta: 'Our Values',
  description:
    "We believe that everyone deserves a safe space to heal, grow, and find their footing. Manasvikaar was built to bridge the gap between traditional therapy and the people who need it most, but haven't yet found their way in.cc",
  imgAlt: 'Group of friends supporting each other outdoors',
  imgSrc:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCDPXFok0mXJhhJF-BUJVa0O-VNPIx-5UQ5G2GtJOMK0Cxw6JmL6ARpic9Ad7bB3QWqjmi9ATU68ocCrsG_HFBKjsL8ErZsp6eAL9VjqACP8Lp7aYRZRnnEiWq4Q4GuVvRjoYU00dvO7ki6YfuRZaOdlYdASDng78Sn4HwH2DMCjuKFpXLMftynbD1pRGYmpZ7XKoJVr8sa96nDPkoLSW2_kpbunCKbg8c45KbVbAakCm9hCOOVHNDtDJgMLJ0azYyxaHAHI5FD1WI',
  title: 'Our Mission is to Make Mental Wellness',
  titleEmphasis: 'Accessible.',
});
