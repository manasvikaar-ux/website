import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const aboutValueItemSchema = z.object({
  description: z.string(),
  icon: lucideIconSchema,
  title: z.string(),
});

export const aboutValuesSectionSchema = z.object({
  description: z.string(),
  title: z.string(),
});
