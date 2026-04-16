import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const resourceStepSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  iconClassName: z.string(),
  title: z.string(),
});

export const howToUseStepsSchema = z.array(resourceStepSchema);
