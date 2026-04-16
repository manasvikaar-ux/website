import Link from 'next/link';
import { workshopsFaqItems } from '@/features/workshops/data/faq.data';
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

export const FaqSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[60%_1fr]">
        {/* FAQ — 60% */}
        <div>
          <h3 className="mb-12 font-display text-4xl font-semibold text-gray-900">
            Common Questions
          </h3>
          <Accordion
            className="space-y-4"
            defaultValue={
              workshopsFaqItems[0] ? [workshopsFaqItems[0].question] : undefined
            }
            multiple={false}
          >
            {workshopsFaqItems.map((item) => (
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

        {/* Looking for something specific — 40% */}
        <Card className="flex flex-col rounded-2xl border-2 border-teal-100 bg-teal-50 p-8 text-center">
          <CardContent className="flex flex-1 flex-col items-center justify-center p-0 py-5">
            <h3 className="mb-3 font-display text-2xl font-semibold text-teal-800">
              Looking for Something Specific?
            </h3>
            <p className="text-md mb-8 text-teal-700">
              We organize custom workshops for schools, corporate offices, and
              private groups tailored to your specific needs.
            </p>
            <div className="flex w-full flex-col gap-3">
              <YellowButton
                nativeButton={false}
                render={<Link href="/workshops/custom" />}
              >
                Request Custom Workshop
              </YellowButton>
              <WhiteButton
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Contact Us
              </WhiteButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
