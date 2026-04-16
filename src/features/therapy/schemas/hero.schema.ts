import { z } from 'zod';

export const therapyHeroContentSchema = z.object({
  buttonLabel: z.string(),
  description: z.string(),
  title: z.string(),
  titleEmphasis: z.string(),
});
