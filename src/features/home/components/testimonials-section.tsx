'use client';

import { useState } from 'react';
import {
  testimonials,
  testimonialsSectionContent,
} from '@/features/home/data/testimonials.data';
import { ArrowLeftIcon } from '@/shared/components/ui/arrow-left';
import { ArrowRightIcon } from '@/shared/components/ui/arrow-right';
import { Card, CardContent } from '@/shared/components/ui/card';

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  if (current === undefined) {
    return null;
  }

  const prev = () => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section className="bg-background-cream pt-25 pb-25">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-4xl font-semibold text-gray-900 lg:text-4xl">
              {testimonialsSectionContent.heading}
            </h2>
            <p className="mb-8 max-w-md text-gray-600">
              {testimonialsSectionContent.description}
            </p>
            <div className="flex items-center gap-4">
              <button
                className="flex h-14 w-14 items-center justify-center rounded-md border border-black bg-white text-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                onClick={prev}
                type="button"
              >
                <ArrowLeftIcon size={24} />
              </button>
              <button
                className="flex h-14 w-14 items-center justify-center rounded-md border border-black bg-gray-900 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                onClick={next}
                type="button"
              >
                <ArrowRightIcon size={24} />
              </button>
              <span className="text-sm text-gray-400">
                {index + 1} / {testimonials.length}
              </span>
            </div>
          </div>
          <Card className="h-80 overflow-hidden rounded-xl border border-gray-900 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <CardContent className="flex h-full flex-col justify-between px-8 pt-8 pb-12">
              <p className="mb-8 text-lg leading-relaxed font-medium text-gray-800">
                "{current.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{current.author}</p>
                <p className="mt-1 text-xs tracking-wide text-gray-500 uppercase">
                  {current.designation}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
