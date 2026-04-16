import type { z } from 'zod';
import type {
  facilitiesIconsSchema,
  facilityItemSchema,
} from '@/features/resources/schemas/facilities.schema';

export type FacilityItem = z.infer<typeof facilityItemSchema>;
export type FacilitiesIcons = z.infer<typeof facilitiesIconsSchema>;
