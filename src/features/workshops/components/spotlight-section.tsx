'use client';

import {
  spotlight,
  spotlightBulletIcon,
} from '@/features/workshops/data/spotlight.data';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { openCalendlyPopup } from '@/shared/lib/calendly';
import { AnalysisReportCard } from './analysis-report-card';

const SpotlightBulletIcon = spotlightBulletIcon;

export const SpotlightSection = () => (
  <section className="bg-background-cream py-34">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid overflow-hidden rounded-xl border-2 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:grid-cols-2">
        <div className="bg-background-peach p-8 lg:py-10 lg:pr-16 lg:pl-10">
          <Badge className="mb-5 rounded-full border border-gray-900 bg-white px-2 py-1 text-[10px] font-semibold tracking-wide uppercase">
            {spotlight.badge}
          </Badge>
          <h3 className="font-display text-4xl font-semibold text-gray-900">
            {spotlight.title}
            <br />
            {spotlight.titleLineTwo}
          </h3>
          <p className="mt-5 mb-5 max-w-[38rem] text-sm leading-relaxed text-gray-700">
            {spotlight.description}
          </p>
          <ul className="mb-7 max-w-[38rem] space-y-3 text-sm text-gray-800">
            {spotlight.bullets.map((bullet) => (
              <li className="flex items-center gap-3" key={bullet}>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-900">
                  <SpotlightBulletIcon className="size-4" size={16} />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
          <Button
            className="h-14 rounded-md border border-black bg-[#0f172a] px-8 font-semibold text-white shadow-[8px_8px_0px_0px_rgba(123,211,206,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            onClick={() => {
              openCalendlyPopup('https://calendly.com/manasvikaar/30min');
            }}
          >
            {spotlight.cta}
          </Button>
        </div>
        <div className="p-0">
          <AnalysisReportCard />
        </div>
      </div>
    </div>
  </section>
);
