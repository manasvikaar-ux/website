import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: ['src/libs/I18n.ts', 'src/types/I18n.ts'],
  ignoreDependencies: [
    '@commitlint/types',
    '@swc/helpers',
    'oxfmt',
    'oxlint-tsgolint',
    'postcss',
  ],
  ignoreBinaries: ['production'],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
