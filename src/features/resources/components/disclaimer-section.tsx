import { resourcesDisclaimer } from '@/features/resources/data/disclaimer.data';

export const DisclaimerSection = () => (
  <section className="border-t border-gray-800 bg-background-dark py-6">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="max-w-md rounded border border-red-900 bg-red-900/30 p-4 text-xs text-red-200">
        <strong>Disclaimer:</strong> {resourcesDisclaimer}
      </div>
    </div>
  </section>
);
