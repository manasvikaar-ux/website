'use client';

import {
  emergencySupportIcon,
  emergencySupportInfo,
} from '@/features/therapy/data/emergency-support.data';
import { therapyFaqItems } from '@/features/therapy/data/faq.data';
import {
  WhiteButton,
  YellowButton,
} from '@/shared/components/neobrutal-button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';
import { Card, CardContent } from '@/shared/components/ui/card';

const EmergencySupportIcon = emergencySupportIcon;

export const FaqSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[60%_1fr]">
        {/* FAQ */}
        <div>
          <h2 className="mb-12 font-display text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>

          <Accordion
            className="space-y-4"
            defaultValue={
              therapyFaqItems[0] ? [therapyFaqItems[0].question] : undefined
            }
            multiple={false}
          >
            {therapyFaqItems.map((item) => (
              <AccordionItem
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                key={item.question}
                value={item.question}
              >
                <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium text-gray-900">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-6 leading-relaxed text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Emergency Support */}
        <Card className="flex flex-col rounded-2xl border-2 border-red-100 bg-red-50 p-8 text-center">
          <CardContent className="flex flex-1 flex-col items-center justify-center p-0">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <EmergencySupportIcon className="size-6" />
            </div>

            <h3 className="mb-3 font-display text-2xl font-semibold text-red-800">
              {emergencySupportInfo.title}
            </h3>

            <p className="text-md mb-8 text-red-700">
              {emergencySupportInfo.description}
            </p>

            <div className="flex w-full flex-col gap-3">
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
    </div>
  </section>
);
