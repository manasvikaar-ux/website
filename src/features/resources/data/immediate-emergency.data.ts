import { Siren } from 'lucide-react';
import {
  emergencyStripSchema,
  immediateEmergencyIconsSchema,
} from '@/features/resources/schemas/immediate-emergency.schema';

export const emergencyStrip = emergencyStripSchema.parse({
  description:
    'If you are in immediate danger or have a medical emergency, do not wait. Please contact emergency services right now.',
  primaryLabel: 'Call 112',
  secondaryLabel: 'Call 100',
  subtitle: 'Available 24/7 \u2022 Free of charge',
  title: 'Immediate Emergency?',
});

export const immediateEmergencyIcons = immediateEmergencyIconsSchema.parse({
  immediateEmergency: Siren,
});
