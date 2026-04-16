import type { LucideIcon } from 'lucide-react';
import type { ComponentType } from 'react';
import { z } from 'zod';

export type IconComponent =
  | LucideIcon
  | ComponentType<{ size?: number; className?: string }>;

export const lucideIconSchema = z.custom<IconComponent>(
  (val) =>
    typeof val === 'function' || (typeof val === 'object' && val !== null),
  { message: 'Expected an icon component' }
);
