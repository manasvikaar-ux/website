import type { z } from 'zod';
import type { UpcomingWorkshopItemSchema } from '@/features/workshops/schemas/upcoming.schema';

export type UpcomingWorkshopItem = z.infer<typeof UpcomingWorkshopItemSchema>;
