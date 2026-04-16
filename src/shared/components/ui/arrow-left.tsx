'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type ArrowLeftIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type ArrowLeftIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const PATH_VARIANTS: Variants = {
  animate: {
    d: 'm12 19-7-7 7-7',
    transition: {
      duration: 0.4,
    },
    translateX: [0, 3, 0],
  },
  normal: {
    d: 'm12 19-7-7 7-7',
    translateX: 0,
  },
};

const SECOND_PATH_VARIANTS: Variants = {
  animate: {
    d: ['M19 12H5', 'M19 12H10', 'M19 12H5'],
    transition: {
      duration: 0.4,
    },
  },
  normal: {
    d: 'M19 12H5',
  },
};

const ArrowLeftIcon = forwardRef<ArrowLeftIconHandle, ArrowLeftIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    // ✅ safe async wrapper
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
            d="m12 19-7-7 7-7"
            variants={PATH_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M19 12H5"
            variants={SECOND_PATH_VARIANTS}
          />
        </svg>
      </button>
    );
  }
);

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export { ArrowLeftIcon };
