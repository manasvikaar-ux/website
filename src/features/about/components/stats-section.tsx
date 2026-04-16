import { aboutStats } from '@/features/about/data/stats.data';

const toneClasses = [
  'bg-background-teal',
  'bg-background-peach',
  'bg-[#FCD34D]',
];

export const StatsSection = () => (
  <section className="border-y border-gray-200 bg-background-cream py-16">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {aboutStats.map((stat, index) => (
          <div
            className={`${toneClasses[index]} rounded-xl border border-gray-900 p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1`}
            key={stat.label}
          >
            <p className="mb-2 font-display text-4xl font-semibold text-gray-900">
              {stat.value}
            </p>
            <p className="mb-2 text-lg font-semibold text-gray-900">
              {stat.label}
            </p>
            {/* <p className="mx-auto max-w-xs text-sm text-gray-800">
              {stat.description}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);
