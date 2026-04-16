import { z } from 'zod';

export const WorkshopsCtaSchema = z.object({
  buttonLabel: z.string(),
  description: z.string(),
  title: z.string(),
});
