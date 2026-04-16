'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type CloudRainIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type CloudRainIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const RAIN_VARIANTS: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const RAIN_CHILD_VARIANTS: Variants = {
  animate: {
    opacity: [1, 0.2, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: Number.POSITIVE_INFINITY,
    },
  },
  normal: {
    opacity: 1,
  },
};

const CloudRainIcon = forwardRef<CloudRainIconHandle, CloudRainIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

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
        onMouseEnter={(e) => {
          void handleMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          void handleMouseLeave(e);
        }}
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
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />

          <motion.g
            animate={controls}
            initial="normal"
            variants={RAIN_VARIANTS}
          >
            <motion.path d="M16 14v6" variants={RAIN_CHILD_VARIANTS} />
            <motion.path d="M8 14v6" variants={RAIN_CHILD_VARIANTS} />
            <motion.path d="M12 16v6" variants={RAIN_CHILD_VARIANTS} />
          </motion.g>
        </svg>
      </button>
    );
  }
);

CloudRainIcon.displayName = 'CloudRainIcon';

export { CloudRainIcon };
