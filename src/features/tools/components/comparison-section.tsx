import {
  comparisonPoints,
  toolsComparisonIcon,
} from '@/features/tools/data/comparison.data';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';

const ToolsComparisonIcon = toolsComparisonIcon;

export const ComparisonSection = () => (
  <section className="relative overflow-hidden bg-background-teal py-24">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative z-10 container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-display text-4xl leading-tight font-semibold text-gray-900 lg:text-4xl">
            Self-Support vs.
            <br />
            Professional Therapy
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-800">
            Understanding when to use self-help tools versus seeking
            professional guidance is key to your wellness journey. Our tools are
            designed to complement therapy, not replace it.
          </p>
          <div className="space-y-4">
            {comparisonPoints.map((point) => (
              <div className="flex items-start gap-4" key={point.title}>
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-900 bg-white">
                  <ToolsComparisonIcon className="size-4" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{point.title}</h4>
                  <p className="text-sm text-gray-700">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <Card className="rounded-2xl border border-gray-900 bg-background-cream py-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ring-0">
            <CardHeader className="p-8 pb-0">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-900 bg-orange-100">
                  <span className="font-display text-xl font-semibold text-orange-800">
                    S
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold">
                  Self-Support
                </h3>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <p className="mb-4 text-gray-600">
                Ideal for daily stress management, mood tracking, and building
                resilience through routine.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Available 24/7
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Complete privacy
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
                  Self-paced progress
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
