import { WorkshopsCtaSchema } from '@/features/workshops/schemas/cta.schema';

export const workshopsCta = WorkshopsCtaSchema.parse({
  buttonLabel: 'Request Custom Workshop',
  description:
    'We organize custom workshops for schools, corporates offices, and private groups tailored to your specific needs.',
  title: 'Looking for something specific?',
});
