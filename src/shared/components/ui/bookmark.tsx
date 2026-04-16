'use client';

import type { Variants } from 'motion/react';
import { motion, useAnimation } from 'motion/react';
import type { HTMLAttributes } from 'react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cn } from '@/shared/lib/utils';

export type BookmarkIconHandle = {
  startAnimation: () => Promise<void>;
  stopAnimation: () => Promise<void>;
};

type BookmarkIconProps = {
  size?: number;
} & HTMLAttributes<HTMLSpanElement>;

const BOOKMARK_VARIANTS: Variants = {
  animate: {
    scaleX: [1, 0.9, 1.1, 0.95, 1],
    scaleY: [1, 1.3, 0.9, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  normal: {
    scaleX: 1,
    scaleY: 1,
  },
};

const BookmarkIcon = forwardRef<BookmarkIconHandle, BookmarkIconProps>(
  ({ className, size = 28, onMouseEnter, onMouseLeave, ...props }, ref) => {
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
          <motion.path
            animate={controls}
            d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
            style={{ originX: 0.5, originY: 0.5 }}
            variants={BOOKMARK_VARIANTS}
          />
        </svg>
      </span>
    );
  }
);

BookmarkIcon.displayName = 'BookmarkIcon';

export { BookmarkIcon };
