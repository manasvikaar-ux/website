import type { z } from 'zod';
import type { TakeawaysContentSchema } from '@/features/podcasts/schemas/takeaways.schema';

export type TakeawaysContent = z.infer<typeof TakeawaysContentSchema>;
