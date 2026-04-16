import {
  UpcomingRowActionIconSchema,
  UpcomingWorkshopItemSchema,
} from '@/features/workshops/schemas/upcoming.schema';
import { ArrowRightIcon as ArrowRight } from '@/shared/components/ui/arrow-right';

export const upcomingWorkshops = [
  UpcomingWorkshopItemSchema.parse({
    actionLabel: 'Details',
    date: 'Apr 18',
    details: '12:00 PM - 1:30 PM \u2022 Bunaphile Cafe, Salt Lake, Kolkata',
    status: 'Open',
    title: 'Play, Create & Connect A Screen-Free Kids Playdate',
  }),
  UpcomingWorkshopItemSchema.parse({
    actionLabel: 'Details',
    date: 'May 12',
    details:
      '12:00 PM - 1:30 PM \u2022 Bunaphile Roasters, Southern Avenue, Kolkata',
    status: 'Open',
    title: 'Play, Pause & Heal for Adults',
  }),
  UpcomingWorkshopItemSchema.parse({
    actionLabel: 'Details',
    date: 'May 20',
    details: '12:00 PM - 1:30 PM \u2022 Bunaphile Cafe, Salt Lake, Kolkata',
    status: 'Open',
    title: 'Play, Create & Connect A Screen-Free Kids Playdate',
  }),
];

export const upcomingRowActionIcon =
  UpcomingRowActionIconSchema.parse(ArrowRight);
