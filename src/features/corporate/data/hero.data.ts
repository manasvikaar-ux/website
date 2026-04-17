import type { CorporateHeroAvatar } from '@/features/corporate/types/hero.types';

export const corporateHeroContent = {
  badge: 'Corporate Wellness Solutions',
  ctaPrimary: 'Apply Now',
  ctaSecondary: 'Know More',
  description:
    "Manasvikaar's Coaching programme is built for aspiring psychologists and mental health professionals — offering real-world mentorship, clinical grounding, and the kind of human depth that no textbook can teach.",
  statLabel: '35% Increase',
  statSubtext: 'In employee retention rates post-training.',
  title: 'Empower Your Team with Mental Resilience.',
  trustLabel: 'Professionals trained this year',
  trustPlus: '+2k',
} as const;

export const corporateHeroVisuals = {
  heroImage: '/corporate/hero/hero-main.png',
} as const;

export const corporateHeroAvatars: CorporateHeroAvatar[] = [
  {
    alt: 'User',
    src: '/corporate/hero/avatar1.png',
  },
  {
    alt: 'User',
    src: '/corporate/hero/avatar2.png',
  },
  {
    alt: 'User',
    src: '/corporate/hero/avatar3.png',
  },
];
