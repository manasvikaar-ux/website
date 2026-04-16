import Image from 'next/image';
import { faqItems, faqSectionContent } from '@/features/home/data/faq.data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';

export const FaqSection = () => (
  <section className="container mx-auto border-t border-gray-200 bg-background-cream py-24 text-gray-900">
    <div className="mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Image — neobrutal card, tilted */}
        <div className="relative flex items-center justify-center py-12">
          <div className="relative mx-auto aspect-4/5 w-2/3 -rotate-3 overflow-hidden">
            <Image
              alt="FAQ illustration"
              className="object-cover"
              fill
              src="/assets/hero.png"
            />
          </div>
          {/* Badge — counter-tilted */}
          <div className="absolute top-6 right-0 rotate-2 rounded-xl border-2 border-gray-900 bg-background-peach py-2 font-display text-sm font-semibold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            Common Inquiries
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mb-2 font-display text-4xl font-semibold">
            {faqSectionContent.heading}
          </h2>
          <p className="mb-10 text-sm text-gray-600">
            {faqSectionContent.subheading}
          </p>

          <Accordion
            className="space-y-3"
            defaultValue={faqItems[0] ? [faqItems[0].question] : undefined}
          >
            {faqItems.map((item) => (
              <AccordionItem
                className="rounded-xl border border-gray-200 bg-white px-6 shadow-sm last:border-b"
                key={item.question}
                value={item.question}
              >
                <AccordionTrigger className="text-base font-semibold text-gray-900 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                {item.answer !== null &&
                item.answer !== undefined &&
                item.answer !== '' ? (
                  <AccordionContent>
                    <p className="pb-4 text-sm text-gray-600">{item.answer}</p>
                  </AccordionContent>
                ) : null}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);
