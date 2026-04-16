import { z } from 'zod';

export const corporateHeroAvatarSchema = z.object({
  alt: z.string(),
  src: z.string(),
});

export const corporateHeroContentSchema = z.object({
  badge: z.string(),
  ctaPrimary: z.string(),
  ctaSecondary: z.string(),
  description: z.string(),
  statLabel: z.string(),
  statSubtext: z.string(),
  subtitle: z.string(),
  title: z.string(),
  trustLabel: z.string(),
  trustPlus: z.string(),
});

export const corporateHeroVisualsSchema = z.object({
  heroImage: z.string(),
});
