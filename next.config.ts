import withBundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const withMDX = createMDX({});

const baseConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
};

// Step 1: MDX first
let config = withMDX(baseConfig);

// Step 2: optionally wrap analyzer
if (process.env.ANALYZE === 'true') {
  config = withBundleAnalyzer()(config);
}

export default config;
