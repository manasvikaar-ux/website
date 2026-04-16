import { z } from 'zod';

export const aboutStorySectionSchema = z.object({
  heading: z.string(),
  paragraphs: z.array(z.string()),
});

export const aboutStorySchema = z.object({
  imgAlt: z.string(),
  imgSrc: z.string(),
  sections: z.array(aboutStorySectionSchema),
  title: z.string(),
});
