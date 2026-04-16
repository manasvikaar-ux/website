import { resourcesDisclaimerSchema } from '@/features/resources/schemas/disclaimer.schema';

export const resourcesDisclaimer = resourcesDisclaimerSchema.parse(
  'The resources on this page are for informational purposes. Manasvikaar is not a replacement for emergency medical services.'
);
