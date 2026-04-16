import {
  corporateWhyContent,
  corporateWhyItems,
} from '@/features/corporate/data/why.data';

export const WhySection = () => (
  <section className="relative bg-background-teal px-5 py-24">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative z-10 container mx-auto sm:px-6">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h3 className="mb-6 font-display text-4xl font-semibold text-gray-900 md:text-4xl">
          {corporateWhyContent.title}
        </h3>
        <p className="text-lg text-gray-800">
          {corporateWhyContent.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {corporateWhyItems.map((item) => (
          <article
            className="rounded-xl border border-gray-900 bg-white p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            key={item.title}
          >
            {/* Icon + Title Row */}
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${item.iconClassName}`}
              >
                <item.icon className="size-5" size={20} />
              </div>

              <h3 className="ml-2 font-display text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>

            <p className="mt-6 leading-relaxed text-gray-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
