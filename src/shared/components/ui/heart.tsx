'use client';

import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type HeartIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type HeartIconProps = {
  size?: number;
} & HTMLAttributes<HTMLSpanElement>;

const HeartIcon = forwardRef<HeartIconHandle, HeartIconProps>(
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
        <motion.svg
          animate={controls}
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          transition={{
            duration: 0.45,
            repeat: 2,
          }}
          variants={{
            animate: { scale: [1, 1.08, 1] },
            normal: { scale: 1 },
          }}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </motion.svg>
      </span>
    );
  }
);

HeartIcon.displayName = 'HeartIcon';

export { HeartIcon };
