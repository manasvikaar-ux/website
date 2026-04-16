import type { z } from 'zod';
import type {
  aboutStorySchema,
  aboutStorySectionSchema,
} from '@/features/about/schemas/story.schema';

export type AboutStory = z.infer<typeof aboutStorySchema>;
export type AboutStorySection = z.infer<typeof aboutStorySectionSchema>;
