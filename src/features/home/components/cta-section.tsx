import { TriangleAlert } from 'lucide-react';
import Image from 'next/image';
import {
  ctaImageAssets,
  ctaSectionContent,
} from '@/features/home/data/cta.data';
import { YellowButton } from '@/shared/components/neobrutal-button';

export const CtaSection = () => (
  <section className="relative z-10 border-t border-gray-800 bg-background-dark py-12 pb-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="flex flex-col items-center gap-8 rounded-2xl border border-gray-800 bg-background-peach p-2 md:flex-row md:p-12">
        <div className="w-full md:w-1/2">
          <div className="overflow-hidden rounded-xl border-2 border-gray-900 shadow-xl">
            <Image
              alt="Person meditating in nature"
              className="h-64 w-full object-cover"
              height={512}
              src={ctaImageAssets.ctaImage}
              width={800}
            />
          </div>
        </div>
        <div className="w-full text-gray-900 md:w-1/2">
          <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900 lg:text-4xl">
            {ctaSectionContent.heading}
          </h2>
          <p className="mb-8 text-sm text-gray-700">
            {ctaSectionContent.description}
          </p>
          <div className="flex flex-col gap-3">
            <YellowButton className="w-fit">
              {ctaSectionContent.primaryCta}
            </YellowButton>
            <p className="mt-2 text-xs font-semibold text-red-600">
              <TriangleAlert className="mr-1 inline size-3.5 align-middle" />
              {ctaSectionContent.helpline}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
