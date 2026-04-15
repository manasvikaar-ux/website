import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import './src/libs/Env';

const baseConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
};

let configWithPlugins = baseConfig;

if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

export default configWithPlugins;