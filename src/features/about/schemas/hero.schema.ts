import { z } from 'zod';

export const aboutHeroSchema = z.object({
  badge: z.string(),
  cta: z.string(),
  description: z.string(),
  imgAlt: z.string(),
  imgSrc: z.string(),
  title: z.string(),
  titleEmphasis: z.string(),
});
