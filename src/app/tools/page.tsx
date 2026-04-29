import type { Metadata } from 'next';
import { ToolsPage } from '@/features/tools';

export const metadata: Metadata = {
  title: 'Mental Health Tools',
  description:
    'Free tools and self-assessments to support your mental health journey and track your well-being.',
};

const Page = () => <ToolsPage />;

export default Page;
