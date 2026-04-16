'use client';

import {
  emergencySupportIcon,
  emergencySupportInfo,
} from '@/features/therapy/data/emergency-support.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import { Card, CardContent } from '@/shared/components/ui/card';

const EmergencySupportIcon = emergencySupportIcon;

export const EmergencySupportSection = () => (
  <section className="bg-background-cream pb-24">
    <div className="container mx-auto max-w-4xl sm:px-6">
      <Card className="rounded-2xl border-2 border-red-100 bg-red-50 p-8 text-center">
        <CardContent className="p-0">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <EmergencySupportIcon className="size-6" />
          </div>

          <h3 className="mb-3 font-display text-2xl font-semibold text-red-800">
            {emergencySupportInfo.title}
          </h3>

          <p className="mx-auto mb-6 max-w-2xl text-red-700">
            {emergencySupportInfo.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* FIX 1 */}
            <YellowButton
              nativeButton={false}
              render={
                <a href={emergencySupportInfo.ctaHref}>
                  {emergencySupportInfo.ctaLabel}
                </a>
              }
            >
              {emergencySupportInfo.ctaLabel}
            </YellowButton>

            {/* FIX 2 */}
            <WhiteButton
              nativeButton={false}
              render={
                <a href={emergencySupportInfo.secondaryCtaHref}>
                  {emergencySupportInfo.secondaryCtaLabel}
                </a>
              }
            >
              {emergencySupportInfo.secondaryCtaLabel}
            </WhiteButton>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);
