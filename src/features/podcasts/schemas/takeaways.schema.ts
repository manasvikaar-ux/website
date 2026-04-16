import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const TakeawaysContentSchema = z.object({
  actionSteps: z.array(z.string()),
  coreInsight: z.string(),
  coreTitle: z.string(),
  icon: lucideIconSchema,
  stepsTitle: z.string(),
  title: z.string(),
});
