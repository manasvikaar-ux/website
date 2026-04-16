import { z } from 'zod';

export const audienceItemSchema = z.object({
  backgroundClassName: z.string(),
  description: z.string(),
  textClassName: z.string(),
  title: z.string(),
  titleClassName: z.string(),
});
