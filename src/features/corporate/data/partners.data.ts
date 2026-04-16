import { Building2, School } from 'lucide-react';
import type {
  CorporatePartnerCategory,
  CorporatePartnerLogo,
} from '@/features/corporate/types/partners.types';
import { RocketIcon as Rocket } from '@/shared/components/ui/rocket';

export const corporatePartnersContent = {
  description: 'Trusted by organizations committed to employee wellbeing.',
  title: 'Who We Work With',
} as const;

export const corporatePartnerCategories: CorporatePartnerCategory[] = [
  { icon: Rocket, title: 'Fast-Growing Startups' },
  { icon: School, title: 'Educational Institutions' },
  { icon: Building2, title: 'Corporate Enterprises' },
];

export const corporatePartnerLogos: CorporatePartnerLogo[] = [
  { className: 'font-display', name: 'Zenith' },
  { className: '', name: 'FlowState' },
  { className: 'font-mono', name: 'MINDSET' },
  { className: '', name: 'Balance' },
];
