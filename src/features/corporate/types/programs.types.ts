import type { z } from 'zod';
import type {
  corporateProgramItemSchema,
  corporateProgramsContentSchema,
} from '@/features/corporate/schemas/programs.schema';

export type CorporateProgramItem = z.infer<typeof corporateProgramItemSchema>;

export type CorporateProgramsContent = z.infer<
  typeof corporateProgramsContentSchema
>;
