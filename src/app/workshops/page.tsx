import type { Metadata } from 'next';
import { WorkshopsPage } from '@/features/workshops';

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'Interactive mental wellness workshops for schools, corporates, and private groups across India.',
};

const Page = () => <WorkshopsPage />;

export default Page;
