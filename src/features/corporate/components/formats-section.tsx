import {
  corporateFormats,
  corporateFormatsContent,
} from '@/features/corporate/data/formats.data';

export const FormatsSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h3 className="mb-4 font-display text-3xl font-semibold text-gray-900 md:text-4xl">
          {corporateFormatsContent.title}
        </h3>
        <p className="text-gray-600">{corporateFormatsContent.description}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {corporateFormats.map((format) => (
          <article
            className="flex flex-col items-center p-6 text-center"
            key={format.title}
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <format.icon className="size-8 text-gray-800" size={32} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {format.title}
            </h3>
            <p className="text-sm text-gray-600">{format.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
