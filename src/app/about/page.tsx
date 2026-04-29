import type { Metadata } from 'next';
import { AboutPage } from '@/features/about';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the team behind Manasvikaar — therapists and coaches dedicated to your mental well-being.',
};

const Page = () => <AboutPage />;

export default Page;
