import {
  workshopBenefitItems,
  workshopsSectionContent,
} from '@/features/home/data/workshops.data';
import { Card, CardContent } from '@/shared/components/ui/card';

export const WorkshopsSection = () => (
  <section className="bg-background-peach py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6 md:[grid-template-areas:'left_card1_card2''left_card3_card4']">
        <div className="md:pr-8 md:[grid-area:left]">
          <h2 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900">
            {workshopsSectionContent.heading}
          </h2>

          <p className="text-lg leading-relaxed text-gray-800">
            {workshopsSectionContent.description}
          </p>

          <div className="mt-8 hidden md:block">
            <svg
              aria-hidden="true"
              className="opacity-30"
              fill="none"
              height="100"
              viewBox="0 0 200 100"
              width="200"
            >
              <path
                d="M10 50 C 50 10, 150 90, 190 50"
                stroke="#000"
                strokeWidth="2"
              />
              <circle cx="10" cy="50" fill="#000" r="4" />
              <circle cx="190" cy="50" fill="#000" r="4" />
            </svg>
          </div>
        </div>

        {workshopBenefitItems.map((item, index) => (
          <Card
            className={`flex flex-col rounded-lg border border-gray-800 shadow-sm md:[grid-area:card${index + 1}]`}
            key={item.title}
            style={{ background: item.background }}
          >
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-lg text-gray-800">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
