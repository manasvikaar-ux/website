import { resourcesFaqItems } from '@/features/resources/data/faq.data';
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

export const FaqSection = () => (
  <section className="bg-background-cream py-20">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="mb-10 font-display text-4xl font-semibold">
            Frequently Asked Questions
          </h2>
          <Accordion
            className="space-y-4"
            defaultValue={
              resourcesFaqItems[0] ? [resourcesFaqItems[0].question] : undefined
            }
            multiple={false}
          >
            {resourcesFaqItems.map((item) => (
              <AccordionItem
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                key={item.question}
                value={item.question}
              >
                <AccordionTrigger className="px-6 py-5 text-left font-semibold hover:bg-gray-50">
                  {item.question}
                </AccordionTrigger>
                {item.answer !== null &&
                item.answer !== undefined &&
                item.answer !== '' ? (
                  <AccordionContent className="border-t border-gray-200 px-6 py-4 text-sm text-gray-700">
                    {item.answer}
                  </AccordionContent>
                ) : null}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="lg:col-span-2 lg:mt-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <h3 className="mb-3 font-display text-2xl font-semibold text-gray-900">
              Looking for Non-Emergency Care?
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              If you are not in immediate danger but need support for your
              mental wellness journey, Manasvikaar is here to help you heal and
              grow.
            </p>
            <div className="space-y-3">
              <YellowButton className="w-full">Book Consultation</YellowButton>
              <WhiteButton className="w-full">Contact Manasvikaar</WhiteButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
