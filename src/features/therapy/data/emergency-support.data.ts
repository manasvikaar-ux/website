import { AlertTriangle } from 'lucide-react';
import type { EmergencySupportInfo } from '@/features/therapy/types/emergency-support.types';

export const emergencySupportInfo: EmergencySupportInfo = {
  ctaHref: 'tel:1075',
  ctaLabel: 'Call 1075',
  description:
    'We are not an emergency service. If you are in crisis, feeling suicidal, or in danger of harming yourself or others, please seek immediate help.',
  secondaryCtaHref: '#',
  secondaryCtaLabel: 'View Crisis Resources',
  title: 'Emergency Support',
};

export const emergencySupportIcon = AlertTriangle;
