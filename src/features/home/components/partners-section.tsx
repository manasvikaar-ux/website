import { Briefcase } from 'lucide-react';
import {
  partnerItems,
  partnersSectionContent,
} from '@/features/home/data/partners.data';
import { BatteryWarningIcon as BatteryWarning } from '@/shared/components/ui/battery-warning';
import { BrainIcon as Brain } from '@/shared/components/ui/brain';
import { CloudRainIcon as CloudRain } from '@/shared/components/ui/cloud-rain';
import { EyeIcon as Eye } from '@/shared/components/ui/eye';
import { FlameIcon as Flame } from '@/shared/components/ui/flame';
import { FrownIcon as Frown } from '@/shared/components/ui/frown';
import { HeartIcon as Heart } from '@/shared/components/ui/heart';
import { SmileIcon as Smile } from '@/shared/components/ui/smile';
import { SparklesIcon as Sparkles } from '@/shared/components/ui/sparkles';
import { UserIcon as User } from '@/shared/components/ui/user';
import { UsersIcon as Users } from '@/shared/components/ui/users';
import type { IconComponent } from '@/shared/schemas/icon';

const partnerIconConfig: Record<
  string,
  { color: string; icon: IconComponent }
> = {
  Anger: { color: 'text-red-500', icon: Flame },
  Anxiety: { color: 'text-violet-500', icon: Brain },
  Burnout: { color: 'text-orange-600', icon: BatteryWarning },
  Depression: { color: 'text-blue-400', icon: CloudRain },
  Grief: { color: 'text-slate-500', icon: Frown },
  Identity: { color: 'text-cyan-500', icon: Eye },
  Loneliness: { color: 'text-indigo-400', icon: User },
  Mindfulness: { color: 'text-emerald-500', icon: Sparkles },
  'Parental Conflict': { color: 'text-orange-500', icon: Users },
  'Relationship Struggles': { color: 'text-pink-500', icon: Heart },
  'Self-Esteem': { color: 'text-yellow-500', icon: Smile },
  'Workplace Stress': { color: 'text-amber-600', icon: Briefcase },
};

const MarqueeRow = ({ offset }: { offset: number }) => (
  <div className="flex shrink-0 items-center gap-8">
    {partnerItems.map((item) => {
      const config = partnerIconConfig[item.name];
      const Icon = config?.icon;
      return (
        <div
          className="flex shrink-0 cursor-pointer items-center gap-3 rounded-full border border-gray-300 bg-background-cream px-6 py-3 transition-all hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          key={`${item.name}-${offset}`}
        >
          {config !== undefined && Icon !== null && Icon !== undefined ? (
            <Icon className={config.color} size={20} />
          ) : null}
          <span
            className={`text-lg font-semibold whitespace-nowrap text-gray-700 ${item.className}`}
          >
            {item.name}
          </span>
        </div>
      );
    })}
  </div>
);

export const PartnersSection = () => (
  <section
    className="relative border-b border-gray-200 bg-background-cream py-20"
    style={{
      backgroundImage: "url('/assets/hero-grid-pattern.svg')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div className="pointer-events-none absolute inset-0 bg-white/50" />
    <div className="relative container mx-auto text-center">
      <h3 className="mb-3 font-display text-4xl font-semibold text-gray-900">
        {partnersSectionContent.heading}
      </h3>
      <p className="mx-auto mb-12 text-gray-600">
        {partnersSectionContent.description}
      </p>

      <div className="group relative overflow-x-clip py-2">
        <div className="flex w-max animate-marquee items-center gap-8 group-hover:paused">
          <MarqueeRow offset={0} />
          <MarqueeRow offset={1} />
        </div>
      </div>
    </div>
  </section>
);
