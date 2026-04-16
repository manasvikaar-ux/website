import { Card, CardContent } from '@/shared/components/ui/card';
import { Separator } from '@/shared/components/ui/separator';

const metrics = [
  {
    color: 'bg-green-500',
    label: 'CONFIDENCE',
    level: 'HIGH',
    value: 86,
  },
  {
    color: 'bg-yellow-400',
    label: 'DETAIL ORIENTED',
    level: 'MEDIUM',
    value: 54,
  },
  {
    color: 'bg-purple-400',
    label: 'EMPATHY',
    level: 'VERY HIGH',
    value: 91,
  },
] as const;

export const AnalysisReportCard = () => (
  <div
    className="relative flex h-full min-h-[580px] items-center justify-center overflow-hidden p-10"
    style={{
      backgroundColor: '#f8f8fc',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='173'%3E%3Cline x1='75' y1='0' x2='150' y2='43.25' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='75' y1='0' x2='0' y2='43.25' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='150' y1='43.25' x2='150' y2='129.75' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='0' y1='43.25' x2='0' y2='129.75' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='150' y1='129.75' x2='75' y2='173' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='0' y1='129.75' x2='75' y2='173' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='75' y1='86.5' x2='75' y2='173' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='150' y1='43.25' x2='75' y2='86.5' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3Cline x1='0' y1='43.25' x2='75' y2='86.5' stroke='%23d8d8e0' stroke-width='0.8'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '100px 115px',
    }}
  >
    <div className="relative w-full max-w-[480px]">
      {/* Back card — same size as front, offset left and up */}
      <div
        aria-hidden
        className="absolute inset-0 -translate-x-5 -translate-y-6 rounded-2xl border-2 border-gray-900 bg-[#9ecfc8]"
      />

      {/* Front card */}
      <Card className="relative z-10 w-full rounded-2xl border-2 border-gray-900 bg-white p-8 shadow-none">
        <CardContent className="p-0">
          <h3 className="mb-3 font-display text-2xl font-semibold text-gray-900">
            Analysis Report
          </h3>
          <Separator className="mb-6 bg-gray-200" />
          <div className="space-y-6">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-widest text-gray-600 uppercase">
                    {metric.label}
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest text-gray-600 uppercase">
                    {metric.level}
                  </span>
                </div>
                <div className="h-3.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className={`h-full rounded-full ${metric.color}`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);
