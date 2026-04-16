import type { z } from 'zod';
import type {
  aboutValueItemSchema,
  aboutValuesSectionSchema,
} from '@/features/about/schemas/values.schema';

export type AboutValueItem = z.infer<typeof aboutValueItemSchema>;
export type AboutValuesSection = z.infer<typeof aboutValuesSectionSchema>;
