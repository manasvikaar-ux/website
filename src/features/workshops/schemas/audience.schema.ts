import { z } from 'zod';

export const AudienceCardItemSchema = z.object({
  description: z.string(),
  iconSrc: z.string(),
  title: z.string(),
});
