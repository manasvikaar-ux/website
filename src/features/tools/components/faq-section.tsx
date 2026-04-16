import { toolsFaqItems } from '@/features/tools/data/faq.data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';

export const FaqSection = () => (
  <section className="bg-[#FAF5FF] py-24">
    <div className="container mx-auto px-5">
      <h2 className="text-center font-display text-4xl font-semibold text-gray-900">
        Common Questions
      </h2>
      <p className="mb-16 text-center text-sm text-gray-500">
        Everything you need to know about using our tools safely.
      </p>
      <Accordion
        className="space-y-4"
        defaultValue={
          toolsFaqItems[0] ? [toolsFaqItems[0].question] : undefined
        }
        multiple={false}
      >
        {toolsFaqItems.map((item) => (
          <AccordionItem
            className="overflow-hidden rounded-lg border border-gray-200"
            key={item.question}
            value={item.question}
          >
            <AccordionTrigger className="bg-[#F3E8FF] px-6 py-4 text-left font-semibold">
              {item.question}
            </AccordionTrigger>
            {item.answer !== null &&
            item.answer !== undefined &&
            item.answer !== '' ? (
              <AccordionContent className="bg-white px-6 py-4 text-sm text-gray-600">
                {item.answer}
              </AccordionContent>
            ) : null}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
