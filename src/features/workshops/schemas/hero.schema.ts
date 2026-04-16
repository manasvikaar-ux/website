import { z } from 'zod';

export const WorkshopsHeroSchema = z.object({
  badge: z.string(),
  cta: z.string(),
  description: z.string(),
  title: z.string(),
  titleLineTwo: z.string(),
});
