'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type WindIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type WindIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const PATH_VARIANTS: Variants = {
  animate: (custom: number) => ({
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay: custom,
      duration: 0.5,
      ease: 'easeInOut',
    },
  }),
  normal: (custom: number) => ({
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      delay: custom,
      duration: 0.3,
      ease: 'easeInOut',
    },
  }),
};

const WindIcon = forwardRef<WindIconHandle, WindIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    // ✅ reusable safe async
    const safeStart = useCallback(
      async (variant: 'animate' | 'normal') => {
        try {
          await controls.start(variant);
        } catch (error) {
          console.error(error);
        }
      },
      [controls]
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
        <svg
          aria-hidden="true"
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
        >
          <motion.path
            animate={controls}
            custom={0.2}
            d="M12.8 19.6A2 2 0 1 0 14 16H2"
            initial="normal"
            variants={PATH_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0}
            d="M17.5 8a2.5 2.5 0 1 1 2 4H2"
            initial="normal"
            variants={PATH_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.4}
            d="M9.8 4.4A2 2 0 1 1 11 8H2"
            initial="normal"
            variants={PATH_VARIANTS}
          />
        </svg>
      </button>
    );
  }
);

WindIcon.displayName = 'WindIcon';

export { WindIcon };
