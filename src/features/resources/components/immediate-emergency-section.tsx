import { heroIcons, resourcesHero } from '@/features/resources/data/hero.data';
import {
  emergencyStrip,
  immediateEmergencyIcons,
} from '@/features/resources/data/immediate-emergency.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';

const ImmediateEmergencyIcon = immediateEmergencyIcons.immediateEmergency;

const DangerIcon = heroIcons.danger;

export const ImmediateEmergencySection = () => (
  <section className="border-y border-red-200 bg-red-50 py-12">
    <div className="container mx-auto px-5 text-center sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 font-display text-4xl font-semibold text-red-900">
          {emergencyStrip.title}
        </h2>
        <p className="mb-8 text-lg text-red-800">
          {emergencyStrip.description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <YellowButton className="bg-red-600 text-white hover:bg-red-700">
            <ImmediateEmergencyIcon className="mr-2 inline size-4" />
            {emergencyStrip.primaryLabel}
          </YellowButton>
          <WhiteButton className="border-red-900 text-red-700 hover:bg-red-50">
            {emergencyStrip.secondaryLabel}
          </WhiteButton>
        </div>
        <p className="mt-4 text-sm font-medium text-red-700">
          {emergencyStrip.subtitle}
        </p>
      </div>
    </div>
    <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-red-300 bg-red-100 p-4 text-center shadow-sm">
      <p className="mb-1 inline-flex items-center gap-2 font-semibold text-red-700">
        <DangerIcon className="size-4 text-red-700" />
        Safety Disclaimer
      </p>
      <p className="text-sm text-red-900/80">{resourcesHero.note}</p>
    </div>
  </section>
);
