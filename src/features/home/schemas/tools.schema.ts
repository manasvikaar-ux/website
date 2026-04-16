import { z } from 'zod';
import { lucideIconSchema } from '@/shared/schemas/icon';

export const toolsSlideSchema = z.object({
  audience: z.string(),
  cardInfo: z.string(),
  cardTitle: z.string(),
  image: z.string(),
});

export const toolsFeatureItemSchema = z.object({
  cardInfo: z.string().optional(),
  cardLabel: z.string(),
  ctaHref: z.string(),
  ctaLabel: z.string(),
  description: z.string(),
  icon: lucideIconSchema,
  iconClass: z.string(),
  previewAlt: z.string(),
  previewImage: z.string(),
  slides: z.array(toolsSlideSchema).optional(),
  title: z.string(),
});

export const toolsSectionContentSchema = z.object({
  description: z.string(),
  heading: z.string(),
});

export const toolsImageAssetsSchema = z.object({
  toolsImage: z.string(),
});
