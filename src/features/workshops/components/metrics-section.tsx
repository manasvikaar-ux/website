import { metrics } from '@/features/workshops/data/metrics.data';

export const MetricsSection = () => (
  <section className="border-y border-gray-200 bg-[#f7f8fb] py-10">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0">
        {metrics.map((metric, index) => (
          <div
            className={`flex flex-col items-center justify-center px-6 py-4 text-center ${index < 3 ? 'md:border-r md:border-gray-200' : ''}`}
            key={metric.value}
          >
            <metric.icon
              className="mb-3 size-8 stroke-[1.75] text-[#4b5563]"
              size={32}
            />
            <p className="text-2xl font-semibold text-gray-900">
              {metric.value}
            </p>
            <p className="mt-2 text-[1.05rem] text-gray-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
