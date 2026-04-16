'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type SparklesIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type SparklesIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const SPARKLE_VARIANTS: Variants = {
  hover: {
    fill: 'currentColor',
    transition: {
      bounce: 0.3,
      duration: 1,
    },
    y: [0, -1, 0, 0],
  },
  initial: {
    fill: 'none',
    y: 0,
  },
};

const STAR_VARIANTS: Variants = {
  blink: () => ({
    opacity: [0, 1, 0, 0, 0, 0, 1],
    transition: {
      damping: 10,
      duration: 2,
      mass: 0.4,
      stiffness: 70,
      type: 'spring',
    },
  }),
  initial: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const SparklesIcon = forwardRef<SparklesIconHandle, SparklesIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const sparkleControls = useAnimation();
    const starControls = useAnimation();
    const isControlledRef = useRef(false);

    const safeStart = useCallback(
      async (
        sparkleVariant: 'hover' | 'initial',
        starVariant: 'blink' | 'initial'
      ) => {
        try {
          await Promise.all([
            sparkleControls.start(sparkleVariant),
            starControls.start(starVariant),
          ]);
        } catch (error) {
          console.error(error);
        }
      },
      [sparkleControls, starControls]
    );

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: async () => {
          await safeStart('hover', 'blink');
        },
        stopAnimation: async () => {
          await safeStart('initial', 'initial');
        },
      };
    });

    const handleMouseEnter = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          await safeStart('hover', 'blink');
        }
      },
      [onMouseEnter, safeStart]
    );

    const handleMouseLeave = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          await safeStart('initial', 'initial');
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
            animate={sparkleControls}
            d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
            variants={SPARKLE_VARIANTS}
          />
          <motion.path
            animate={starControls}
            d="M20 3v4"
            variants={STAR_VARIANTS}
          />
          <motion.path
            animate={starControls}
            d="M22 5h-4"
            variants={STAR_VARIANTS}
          />
          <motion.path
            animate={starControls}
            d="M4 17v2"
            variants={STAR_VARIANTS}
          />
          <motion.path
            animate={starControls}
            d="M5 18H3"
            variants={STAR_VARIANTS}
          />
        </svg>
      </button>
    );
  }
);

SparklesIcon.displayName = 'SparklesIcon';

export { SparklesIcon };
