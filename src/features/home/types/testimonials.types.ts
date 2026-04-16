import type { z } from 'zod';
import type {
  testimonialSchema,
  testimonialsSectionContentSchema,
} from '@/features/home/schemas/testimonials.schema';

export type Testimonial = z.infer<typeof testimonialSchema>;
export type TestimonialsSectionContent = z.infer<
  typeof testimonialsSectionContentSchema
>;
