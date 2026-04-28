import { z } from 'zod';
// To add a new event: create eventN.mdx, import it below, and add to the array.
import { metadata as event1 } from './event1.mdx';
import { metadata as event2 } from './event2.mdx';
import { metadata as event3 } from './event3.mdx';
import { metadata as event4 } from './event4.mdx';
import { metadata as event5 } from './event5.mdx';

export type WorkshopMetadata = {
  actionLabel: string;
  date: string;
  details: string;
  link: string;
  status: 'Open' | 'Waitlist';
  title: string;
};

const workshopMetadataSchema = z.object({
  actionLabel: z.string(),
  date: z.string(),
  details: z.string(),
  link: z.string(),
  status: z.enum(['Open', 'Waitlist']),
  title: z.string(),
});

export const workshops: WorkshopMetadata[] = [
  event1,
  event2,
  event3,
  event4,
  event5,
].map((event) => workshopMetadataSchema.parse(event));
