declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { WorkshopMetadata } from '@/content/workshops';

  export const metadata: WorkshopMetadata;

  const MDXComponent: ComponentType<unknown>;
  export default MDXComponent;
}
