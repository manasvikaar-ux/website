import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const emergencyStripSchema = z.object({
  description: z.string(),
  primaryLabel: z.string(),
  secondaryLabel: z.string(),
  subtitle: z.string(),
  title: z.string(),
});

export const immediateEmergencyIconsSchema = z.object({
  immediateEmergency: lucideIconSchema,
});
