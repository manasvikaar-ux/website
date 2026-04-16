import type { z } from 'zod';
import type {
  journalingFeatureIconSchema,
  toolkitCardSchema,
} from '@/features/tools/schemas/toolkit.schema';

export type ToolkitCard = z.infer<typeof toolkitCardSchema>;
export type JournalingFeatureIcon = z.infer<typeof journalingFeatureIconSchema>;
