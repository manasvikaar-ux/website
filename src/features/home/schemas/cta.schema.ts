import { z } from 'zod';

export const ctaSectionContentSchema = z.object({
  description: z.string(),
  heading: z.string(),
  helpline: z.string(),
  primaryCta: z.string(),
});

export const ctaImageAssetsSchema = z.object({
  ctaImage: z.string(),
});
