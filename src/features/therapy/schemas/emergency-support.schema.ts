import { z } from 'zod';

export const emergencySupportInfoSchema = z.object({
  ctaHref: z.string(),
  ctaLabel: z.string(),
  description: z.string(),
  secondaryCtaHref: z.string(),
  secondaryCtaLabel: z.string(),
  title: z.string(),
});
