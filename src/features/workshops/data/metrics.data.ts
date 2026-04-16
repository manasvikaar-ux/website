import { Clock3, Monitor, Package } from 'lucide-react';
import { MetricItemSchema } from '@/features/workshops/schemas/metrics.schema';
import { UsersIcon as Users } from '@/shared/components/ui/users';

export const metrics = [
  MetricItemSchema.parse({
    icon: Clock3,
    label: '60-90 min sessions',
    value: 'Duration',
  }),
  MetricItemSchema.parse({
    icon: Users,
    label: 'Individual or Group',
    value: 'Format',
  }),
  MetricItemSchema.parse({
    icon: Monitor,
    label: 'Zoom / Google Meet',
    value: 'Platform',
  }),
  MetricItemSchema.parse({
    icon: Package,
    label: 'PDFs Provided',
    value: 'Materials',
  }),
];
