import { z } from 'zod';

export const comparisonPointSchema = z.object({
  description: z.string(),
  title: z.string(),
});
