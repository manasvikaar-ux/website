import { artTherapyCards } from '@/features/workshops/data/art-therapy.data';
import { Card, CardContent } from '@/shared/components/ui/card';
import { CheckIcon } from '@/shared/components/ui/check';

export const ArtTherapySection = () => (
  <section className="bg-background-cream py-16">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-10 text-center">
        <h3 className="font-display text-4xl font-semibold text-gray-900">
          Art Therapy Sessions
        </h3>
        <p className="mt-2 text-gray-600">
          You don't need to be an artist. You just need to show up.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {artTherapyCards.map((card) => {
          const toneClassName =
            card.tone === 'blue'
              ? 'border-2 border-blue-200 bg-white shadow-[6px_6px_0px_0px_rgba(147,197,253,0.9)]'
              : 'border-2 border-orange-200 bg-white shadow-[6px_6px_0px_0px_rgba(253,186,116,0.7)]';

          const iconToneClassName =
            card.tone === 'blue'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-orange-100 text-orange-700';

          const tickToneClassName =
            card.tone === 'blue' ? 'text-blue-600' : 'text-orange-600';

          return (
            <Card
              className={`rounded-2xl p-8 ${toneClassName}`}
              key={card.title}
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('/assets/hero-grid-pattern.svg')",
                backgroundRepeat: 'repeat',
                backgroundSize: '140%',
              }}
            >
              <CardContent className="p-0">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${iconToneClassName}`}
                  >
                    <card.icon className="size-4" size={16} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                <p className="mb-5 text-[18px] leading-relaxed text-gray-600">
                  {card.description}
                </p>
                <ul className="space-y-3 text-[17px] text-gray-700">
                  {card.bullets.map((bullet) => (
                    <li className="flex items-start gap-2" key={bullet}>
                      <CheckIcon
                        className={`mt-1 ${tickToneClassName}`}
                        size={20}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
