import { z } from 'zod';

export const heroStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const heroContentSchema = z.object({
  badge: z.string(),
  description: z.string(),
  primaryCta: z.string(),
  secondaryCta: z.string(),
  titleLineOne: z.string(),
  titleLineTwo: z.string(),
});

export const heroImageAssetsSchema = z.object({
  heroImage: z.string(),
});
