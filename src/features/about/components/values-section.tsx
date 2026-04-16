import {
  aboutValues,
  aboutValuesSection,
} from '@/features/about/data/values.data';

export const ValuesSection = () => (
  <section className="border-y border-gray-200 bg-white py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900">
          {aboutValuesSection.title}
        </h2>
        <p className="text-gray-600">{aboutValuesSection.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {aboutValues.map((value) => (
          <div
            className="rounded-xl border border-gray-900 bg-background-teal p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            key={value.title}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-900 bg-white">
                <value.icon className="size-5 text-gray-900" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-800">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
