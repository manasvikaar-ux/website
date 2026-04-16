'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type LanguagesIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type LanguagesIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const SVG_VARIANTS: Variants = {
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  normal: { opacity: 1 },
};

const LanguagesIcon = forwardRef<LanguagesIconHandle, LanguagesIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const svgControls = useAnimation();
    const pathControls = useAnimation();
    const isControlledRef = useRef(false);

    // ✅ shared safe runner (handles BOTH controllers)
    const safeStart = useCallback(
      async (variant: 'animate' | 'normal') => {
        try {
          await Promise.all([
            svgControls.start(variant),
            pathControls.start(variant),
          ]);
        } catch (error) {
          console.error(error);
        }
      },
      [svgControls, pathControls]
    );

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: async () => {
          await safeStart('animate');
        },
        stopAnimation: async () => {
          await safeStart('normal');
        },
      };
    });

    const handleMouseEnter = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          await safeStart('animate');
        }
      },
      [onMouseEnter, safeStart]
    );

    const handleMouseLeave = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          await safeStart('normal');
        }
      },
      [onMouseLeave, safeStart]
    );

    return (
      <button
        className={cn(className)}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        {...props}
      >
        <motion.svg
          animate={svgControls}
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          variants={SVG_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
        >
          {/* paths unchanged */}
        </motion.svg>
      </button>
    );
  }
);

LanguagesIcon.displayName = 'LanguagesIcon';

export { LanguagesIcon };
