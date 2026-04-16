import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const helplineItemSchema = z.object({
  actionLabel: z.string(),
  actionType: z.enum(['call', 'copy']),
  badge: z.string(),
  badgeClassName: z.string(),
  description: z.string(),
  icon: lucideIconSchema,
  iconClassName: z.string(),
  number: z.string(),
  title: z.string(),
  toneClassName: z.string(),
});

export const helplinesSchema = z.array(helplineItemSchema);
