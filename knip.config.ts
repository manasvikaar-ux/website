import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    'src/features/**/types/*.ts',
    'src/features/**/schemas/*.ts',
    'src/features/**/components/cta-section.tsx',
    'src/features/home/components/neobrutal-button.tsx',
    'src/features/home/components/pricing4.tsx',
    'src/features/corporate/components/partners-section.tsx',
    'src/features/**/data/cta.data.ts',
    'src/features/**/data/disclaimer.data.ts',
    'src/features/**/data/metrics.data.ts',
    'src/features/**/data/partners.data.ts',
    'src/features/**/data/quote.data.ts',
    'src/features/**/data/upcoming.data.ts',
    'src/features/resources/components/disclaimer-section.tsx',
    'src/features/therapy/components/emergency-support-section.tsx',
    'src/features/workshops/components/metrics-section.tsx',
    'src/shared/components/example.tsx',
    'src/shared/components/ui/*.tsx',
    'src/lib/utils.ts',
    'src/lib/formsubmit.ts',
  ],
  ignoreDependencies: ['@commitlint/types', '@swc/helpers', 'postcss'],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
