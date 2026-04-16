import type { z } from 'zod';
import type {
  emergencyStripSchema,
  immediateEmergencyIconsSchema,
} from '@/features/resources/schemas/immediate-emergency.schema';

export type EmergencyStrip = z.infer<typeof emergencyStripSchema>;
export type ImmediateEmergencyIcons = z.infer<
  typeof immediateEmergencyIconsSchema
>;
