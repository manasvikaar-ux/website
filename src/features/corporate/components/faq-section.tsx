'use client';

import { useState } from 'react';
import {
  corporateFaqContent,
  corporateFaqItems,
} from '@/features/corporate/data/faq.data';
import { WhiteButton } from '@/shared/components/neobrutal-button';
import { CalendarDaysIcon as CalendarDays } from '@/shared/components/ui/calendar-days';
import { ChevronDownIcon as ChevronDown } from '@/shared/components/ui/chevron-down';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-gray-200 bg-background-cream py-24 text-gray-900">
      <div className="container mx-auto px-5">
        {/* Two-column layout: FAQ left, CTA right */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_auto]">
          {/* Left: Title + Accordion */}
          <div>
            <h2 className="mb-2 font-display text-4xl font-semibold">
              {corporateFaqContent.title}
            </h2>
            <p className="mb-10 text-sm text-gray-600">
              {corporateFaqContent.description}
            </p>

            <div className="space-y-4">
              {corporateFaqItems.map((item, i) => (
                <div
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white text-gray-900"
                  key={item.question}
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold"
                    onClick={() => {
                      setOpenIndex(openIndex === i ? null : i);
                    }}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                      size={16}
                    />
                  </button>
                  {openIndex === i &&
                    item.answer !== null &&
                    item.answer !== undefined &&
                    item.answer !== '' && (
                      <div className="border-t border-gray-200 px-6 pt-4 pb-6 text-sm text-gray-700">
                        {item.answer}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-900 bg-background-peach p-10 text-center text-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:w-96">
            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/60">
                <CalendarDays className="text-gray-900" size={24} />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold">
                {corporateFaqContent.ctaTitle}
              </h3>
              <p className="mb-6 text-sm text-gray-700">
                {corporateFaqContent.ctaDescription}
              </p>
              <WhiteButton className="w-full border-gray-900 bg-primary hover:bg-primary/90">
                <CalendarDays size={16} />
                {corporateFaqContent.ctaButton}
              </WhiteButton>
            </div>
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
