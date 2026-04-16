import { WorkshopsHeroSchema } from '@/features/workshops/schemas/hero.schema';

export const workshopsHero = WorkshopsHeroSchema.parse({
  badge: 'Now Booking for May - July 2026',
  cta: 'Explore Workshops',
  description:
    'Our workshops create space for that — through art, reflection, conversation, and guided experiences that help you understand yourself a little more honestly. Open to all ages, all stages.',
  title: 'Some things are easier to feel than to say.',
  titleLineTwo: 'for Your Mind',
});
