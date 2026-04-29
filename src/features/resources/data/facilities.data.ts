import { MapPinned } from 'lucide-react';
import {
  facilitiesIconsSchema,
  facilitiesSchema,
  facilityCitiesSchema,
} from '@/features/resources/schemas/facilities.schema';

export const facilityCities = facilityCitiesSchema.parse([
  'New Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
]);

export const facilities = facilitiesSchema.parse([
  {
    address: 'Dilshad Garden, New Delhi – 110095',
    hours: 'Open 24 Hours',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Institute+of+Human+Behaviour+and+Allied+Sciences+Dilshad+Garden+Delhi',
    name: 'Institute of Human Behaviour & Allied Sciences (IHBAS)',
    phone: '+911122117390',
    type: 'Government Hospital',
  },
  {
    address: '1, Nehru Nagar, New Delhi – 110065',
    hours: '9:00 AM – 8:00 PM',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=VIMHANS+Nehru+Nagar+New+Delhi',
    name: 'VIMHANS',
    phone: '+911143588100',
    type: 'Private Hospital',
  },
  {
    address: 'Ansari Nagar East, New Delhi – 110029',
    hours: 'Open 24 Hours',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=AIIMS+Psychiatry+Department+Ansari+Nagar+New+Delhi',
    name: 'AIIMS – Psychiatry Department',
    phone: '+911126588500',
    type: 'Government Hospital',
  },
]);

export const facilitiesIcons = facilitiesIconsSchema.parse({
  map: MapPinned,
});
