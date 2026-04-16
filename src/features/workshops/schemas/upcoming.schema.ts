import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const UpcomingWorkshopItemSchema = z.object({
  actionLabel: z.string(),
  date: z.string(),
  details: z.string(),
  status: z.enum(['Open', 'Waitlist']),
  title: z.string(),
});

export const UpcomingRowActionIconSchema = lucideIconSchema;
