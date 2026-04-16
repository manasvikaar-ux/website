import { z } from 'zod';
import { aboutStatItemSchema } from '@/features/about/schemas/stats.schema';

export const aboutStats = z.array(aboutStatItemSchema).parse([
  {
    label: 'Sessions Conducted',
    value: '12k+',
  },
  {
    label: 'Certified Partners',
    value: '120+',
  },
  {
    label: 'Client Satisfaction',
    value: '98%',
  },
  {
    label: 'Cities and Growing',
    value: '4',
  },
]);
