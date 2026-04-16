import {
  testimonialSchema,
  testimonialsSectionContentSchema,
} from '@/features/home/schemas/testimonials.schema';

export const testimonials = [
  testimonialSchema.parse({
    author: 'Priya M.',
    designation: 'Working Professional, Kolkata',
    quote:
      "I came to Manasvikaar not knowing what I needed, just that something felt off. The therapist I was matched with made me feel understood from the very first session. It's been six months, and I genuinely feel like myself again.",
  }),
  testimonialSchema.parse({
    author: 'Aritra S.',
    designation: 'College Student',
    quote:
      "The journaling workshop changed how I process my emotions. I thought I wasn't a 'feelings person'. Turns out I just hadn't found the right language yet.",
  }),
  testimonialSchema.parse({
    author: 'HR Head',
    designation: 'Mid-size Tech Firm, Bengaluru',
    quote:
      "We booked Manasvikaar for a corporate wellbeing session and the response was overwhelming. People opened up in ways we hadn't seen before. Highly recommend for any team.",
  }),
  testimonialSchema.parse({
    author: 'Parent',
    designation: 'Kolkata',
    quote:
      "My daughter was struggling with exam anxiety and I didn't know how to help. The student therapy sessions gave her tools I didn't even know existed. She's calmer, more confident now.",
  }),
];

export const testimonialsSectionContent =
  testimonialsSectionContentSchema.parse({
    description:
      'Hear directly from our satisfied clients about how our AI wellness platform has changed your life.',
    heading: 'Success Through Our Solutions',
  });
