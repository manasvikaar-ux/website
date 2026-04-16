import { Shield } from 'lucide-react';
import {
  corporatePrograms,
  corporateProgramsContent,
} from '@/features/corporate/data/programs.data';

export const ProgramsSection = () => (
  <section className="bg-background-peach py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-12 text-center">
        <h3 className="mb-6 font-display text-4xl font-semibold text-gray-900 md:text-4xl">
          {corporateProgramsContent.title}
        </h3>
        <p className="text-lg text-gray-800">
          {corporateProgramsContent.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {corporatePrograms.map((program) => (
          <article
            className={`flex min-h-[220px] flex-col rounded-lg border border-gray-900 p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${program.toneClassName} ${program.wide === true ? 'lg:col-span-2' : ''}`}
            key={program.title}
          >
            {program.wide === true ? (
              <div className="flex h-full flex-col items-start gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full border ${program.iconClassName}`}
                  >
                    <program.icon className="size-5" size={20} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed font-medium text-gray-900">
                    {program.description}
                  </p>
                </div>
                <div className="hidden pr-8 md:block">
                  <Shield className="size-16 text-gray-900/20" />
                </div>
              </div>
            ) : (
              <div className="mb-auto">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full border ${program.iconClassName}`}
                >
                  <program.icon className="size-5" size={20} />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-gray-900">
                  {program.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${program.toneClassName === 'bg-primary' ? 'font-medium text-gray-900' : 'text-gray-700'}`}
                >
                  {program.description}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </section>
);
