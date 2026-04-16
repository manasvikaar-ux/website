import type { z } from 'zod';
import type { helplineItemSchema } from '@/features/resources/schemas/helplines.schema';

export type HelplineItem = z.infer<typeof helplineItemSchema>;
