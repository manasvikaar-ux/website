import type { Metadata } from 'next';
import { HomePage } from '@/features/home';

export const metadata: Metadata = {
  title: 'Mental Health & Wellness Support',
  description:
    'Professional therapy, coaching, and wellness workshops tailored to your journey. Take the first step towards a healthier mind with Manasvikaar.',
};

const Page = () => <HomePage />;

export default Page;
