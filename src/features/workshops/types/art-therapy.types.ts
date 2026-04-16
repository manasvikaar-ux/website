import type { z } from 'zod';
import type {
  ArtTherapyCardSchema,
  ModuleChipSchema,
} from '@/features/workshops/schemas/art-therapy.schema';

export type ArtTherapyCard = z.infer<typeof ArtTherapyCardSchema>;
export type ModuleChip = z.infer<typeof ModuleChipSchema>;
