import type { Metadata } from 'next';
import { TherapyPage } from '@/features/therapy';

export const metadata: Metadata = {
  title: 'Therapy',
  description:
    'One-on-one therapy sessions with qualified mental health professionals. Book your first session today.',
};

const Page = () => <TherapyPage />;

export default Page;
