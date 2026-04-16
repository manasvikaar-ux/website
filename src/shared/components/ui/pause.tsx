'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type PauseIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type PauseIconProps = {
  size?: number;
} & HTMLAttributes<HTMLSpanElement>;

const BASE_RECT_VARIANTS: Variants = {
  normal: {
    y: 0,
  },
};

const BASE_RECT_TRANSITION = {
  transition: {
    damping: 20,
    duration: 0.5,
    stiffness: 260,
    times: [0, 0.2, 0.5, 1],
  },
};

const LEFT_RECT_VARIANTS: Variants = {
  ...BASE_RECT_VARIANTS,
  animate: {
    y: [0, 2, 0, 0],
    ...BASE_RECT_TRANSITION,
  },
};

const RIGHT_RECT_VARIANTS: Variants = {
  ...BASE_RECT_VARIANTS,
  animate: {
    y: [0, 0, 2, 0],
    ...BASE_RECT_TRANSITION,
  },
};

const PauseIcon = forwardRef<PauseIconHandle, PauseIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
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
      async (e: React.MouseEvent<HTMLSpanElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          await safeStart('animate');
        }
      },
      [onMouseEnter, safeStart]
    );

    const handleMouseLeave = useCallback(
      async (e: React.MouseEvent<HTMLSpanElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          await safeStart('normal');
        }
      },
      [onMouseLeave, safeStart]
    );

    return (
      <span
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
          <motion.rect
            animate={controls}
            height="16"
            rx="1"
            variants={LEFT_RECT_VARIANTS}
            width="4"
            x="6"
            y="4"
          />
          <motion.rect
            animate={controls}
            height="16"
            rx="1"
            variants={RIGHT_RECT_VARIANTS}
            width="4"
            x="14"
            y="4"
          />
        </svg>
      </span>
    );
  }
);

PauseIcon.displayName = 'PauseIcon';

export { PauseIcon };
