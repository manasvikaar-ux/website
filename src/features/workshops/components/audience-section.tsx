import Image from 'next/image';
import { audienceCards } from '@/features/workshops/data/audience.data';
import { Card, CardContent } from '@/shared/components/ui/card';

export const AudienceSection = () => (
  <section className="bg-background-teal py-34">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-10 text-center">
        <h3 className="mb-3 font-display text-4xl font-semibold text-gray-900">
          Who These Workshops Are For
        </h3>
        <p className="text-gray-700">
          Wherever you are in life, there's a place for you here.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {audienceCards.map((item) => (
          <Card
            className="rounded-2xl border border-gray-900 bg-white p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            key={item.title}
          >
            <CardContent className="p-0">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
                <Image
                  alt={`${item.title} icon`}
                  className="h-10 w-10 object-contain"
                  height={40}
                  src={item.iconSrc}
                  width={40}
                />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-md text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
