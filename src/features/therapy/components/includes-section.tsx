import { therapyIncludesItems } from '@/features/therapy/data/includes.data';
import { Card, CardContent } from '@/shared/components/ui/card';

export const IncludesSection = () => (
  <section className="bg-background-teal py-34">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold text-teal-900">
          What Therapy Includes
        </h2>
        <p className="mx-auto max-w-2xl text-teal-800">
          Held with care. Guided with expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {therapyIncludesItems.map((item) => (
          <Card
            className="rounded-2xl border border-gray-900 bg-white p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            key={item.title}
          >
            <CardContent className="p-0">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                <item.icon className="size-8" size={32} />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold">
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
