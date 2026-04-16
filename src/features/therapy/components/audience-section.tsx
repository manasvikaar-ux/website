import { therapyAudienceItems } from '@/features/therapy/data/audience.data';
import { Card, CardContent } from '@/shared/components/ui/card';

export const AudienceSection = () => (
  <section className="bg-[#f9dcc4] py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900">
          Why Do You Need This?
        </h2>
        <p className="mx-auto max-w-2xl text-gray-700">
          We are here to support you through various life challenges and goals.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {therapyAudienceItems.map((item) => (
          <Card
            className={`${item.backgroundClassName} group relative w-full overflow-hidden rounded-2xl border border-gray-900 p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:w-[calc(33.333%-1rem)]`}
            key={item.title}
          >
            <CardContent className="relative z-10 p-0 text-center">
              <h3
                className={`mb-3 font-display text-2xl font-semibold ${item.titleClassName}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-md text-center leading-relaxed ${item.textClassName}`}
              >
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
