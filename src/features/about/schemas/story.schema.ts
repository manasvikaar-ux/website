import { z } from 'zod';

export const aboutStorySectionSchema = z.object({
  heading: z.string(),
  paragraphs: z.array(z.string()),
});

export const aboutStorySchema = z.object({
  sections: z.array(aboutStorySectionSchema),
  title: z.string(),
});
