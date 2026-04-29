import type { Metadata } from 'next';
import { CorporatePage } from '@/features/corporate';

export const metadata: Metadata = {
  title: 'Coaching',
  description:
    'Executive and personal coaching to help you build resilience, improve focus, and lead with clarity.',
};

const Page = () => <CorporatePage />;

export default Page;
