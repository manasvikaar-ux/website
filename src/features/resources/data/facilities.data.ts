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
    address: 'Dilshad Garden, New Delhi',
    hours: 'Open 24 Hours',
    name: 'Institute of Human Behaviour & Allied Sciences',
    type: 'Government Hospital',
  },
  {
    address: 'Nehru Nagar, New Delhi',
    hours: '9:00 AM - 8:00 PM',
    name: 'VIMHANS',
    type: 'Private Hospital',
  },
  {
    address: 'Ansari Nagar, New Delhi',
    hours: 'Open 24 Hours',
    name: 'AIIMS Psychiatry Department',
    type: 'Government Hospital',
  },
]);

export const facilitiesIcons = facilitiesIconsSchema.parse({
  map: MapPinned,
});
