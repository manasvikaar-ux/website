'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type MicIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type MicIconProps = {
  size?: number;
} & HTMLAttributes<HTMLButtonElement>;

const CAPSULE_VARIANTS: Variants = {
  animate: {
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
    y: [0, -3, 0, -2, 0],
  },
  normal: {
    y: 0,
  },
};

const MicIcon = forwardRef<MicIconHandle, MicIconProps>(
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
          overflow="visible"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 19v3" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />

          <motion.rect
            animate={controls}
            height="13"
            rx="3"
            variants={CAPSULE_VARIANTS}
            width="6"
            x="9"
            y="2"
          />
        </svg>
      </button>
    );
  }
);

MicIcon.displayName = 'MicIcon';

export { MicIcon };
