import {
  moduleCards,
  moduleMeta,
} from '@/features/workshops/data/art-therapy.data';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';

export const MindfulnessSection = () => (
  <section className="bg-background-cream py-34">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-10 text-center">
        <h3 className="font-display text-4xl font-semibold text-gray-900">
          Journaling & Mindfulness Modules
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {moduleCards.map((card) => (
          <Card
            className={`${card.backgroundClassName} group relative w-full overflow-hidden rounded-2xl border border-gray-900 p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:w-[calc(33.333%-1rem)]`}
            key={card.title}
          >
            <CardContent className="relative z-10 p-0 text-center">
              <h3
                className={`mb-3 font-display text-2xl font-semibold ${card.titleClassName}`}
              >
                {card.title}
              </h3>
              <p
                className={`text-md text-center leading-relaxed ${card.textClassName}`}
              >
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12">
        {moduleMeta.map((meta, index) => (
          <div className="flex items-center gap-8 sm:gap-12" key={meta.label}>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">{meta.label}</p>
              <p className="mt-1 font-display text-lg font-semibold text-gray-900">
                {meta.value}
              </p>
            </div>
            {index < moduleMeta.length - 1 && (
              <Separator className="h-16 bg-black" orientation="vertical" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
