import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const facilityItemSchema = z.object({
  address: z.string(),
  hours: z.string(),
  name: z.string(),
  type: z.string(),
});

export const facilitiesSchema = z.array(facilityItemSchema);

export const facilityCitiesSchema = z.array(z.string());

export const facilitiesIconsSchema = z.object({
  map: lucideIconSchema,
});
