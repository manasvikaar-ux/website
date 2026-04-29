import type { Metadata } from 'next';
import { ResourcesPage } from '@/features/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Emergency helplines, nearby care facilities, and FAQs for mental health support in India.',
};

const Page = () => <ResourcesPage />;

export default Page;
