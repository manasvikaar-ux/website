'use client';

import { motion } from 'motion/react';
import { toolStartSteps } from '@/features/tools/data/how-to-start.data';

const stepColors = [
  { border: 'border-[#f9dcc4]', line: 'bg-[#f9dcc4]' },
  { border: 'border-background-teal', line: 'bg-background-teal' },
  { border: 'border-primary', line: 'bg-primary' },
];

const fallbackStepColor = stepColors[stepColors.length - 1]!;

export const HowToStartSection = () => (
  <section className="overflow-hidden bg-background-cream py-20">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="font-display text-4xl font-semibold text-gray-900">
          How to Start
        </h2>
        <p className="mt-4 text-gray-600">
          Three simple steps to better mental hygiene.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:flex md:items-start md:justify-between">
        {toolStartSteps.map((step, i) => {
          const stepDelay = i * 0.6;
          const lineDelay = stepDelay + 0.3;
          const colors = stepColors[i] ?? fallbackStepColor;

          return (
            <div
              className="group relative flex flex-1 flex-col items-center text-center"
              key={step.title}
            >
              <div className="relative flex w-full items-center justify-center overflow-visible">
                {/* Connecting line */}
                {i !== toolStartSteps.length - 1 && (
                  <motion.div
                    animate={{ scaleX: 1 }}
                    className={`absolute left-1/2 -mt-5 h-[2px] w-[calc(100%+3rem)] origin-left -translate-y-1/2 rounded-full ${colors.line}`}
                    initial={{ scaleX: 0 }}
                    transition={{
                      delay: lineDelay,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                )}

                {/* Step circle */}
                <motion.div
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: stepDelay,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    y: 0,
                  }}
                  className={`relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 bg-white text-4xl shadow-sm ${colors.border}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 30,
                  }}
                >
                  {step.emoji}
                </motion.div>
              </div>

              {/* Title */}
              <motion.h4
                animate={{
                  opacity: 1,
                  transition: {
                    delay: stepDelay + 0.2,
                  },
                }}
                className="mb-2 font-display text-xl font-semibold text-gray-900"
                initial={{ opacity: 0 }}
              >
                {step.title}
              </motion.h4>

              {/* Description */}
              <motion.p
                animate={{
                  opacity: 1,
                  transition: {
                    delay: stepDelay + 0.3,
                  },
                }}
                className="text-md max-w-xs text-gray-500"
                initial={{ opacity: 0 }}
              >
                {step.description}
              </motion.p>
            </div>
          );
        })}
      </div>

      {/* Mobile (stacked) */}
      <div className="grid grid-cols-1 gap-8 md:hidden">
        {toolStartSteps.map((step, i) => (
          <motion.div
            animate={{
              opacity: 1,
              transition: {
                delay: i * 0.3,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
              x: 0,
            }}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -40 }}
            key={step.title}
          >
            <div
              className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 bg-white text-4xl shadow-sm ${(stepColors[i] ?? fallbackStepColor).border}`}
            >
              {step.emoji}
            </div>

            <h4 className="mb-2 font-display text-xl font-semibold text-gray-900">
              {step.title}
            </h4>

            <p className="text-md max-w-xs text-gray-500">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
