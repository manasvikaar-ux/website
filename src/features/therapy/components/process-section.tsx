'use client';

import { motion } from 'motion/react';
import { therapyProcessSteps } from '@/features/therapy/data/process.data';

export const ProcessSection = () => (
  <section className="overflow-hidden bg-background-cream py-34">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 font-display text-4xl font-semibold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600">
          Your journey to wellness in four simple steps.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:flex md:items-start md:justify-between">
        {therapyProcessSteps.map((step, i) => {
          const stepDelay = i * 0.6;
          const lineDelay = stepDelay + 0.3;

          return (
            <div
              className="group relative flex flex-1 flex-col items-center text-center"
              key={step.title}
            >
              <div className="relative flex w-full items-center justify-center overflow-visible">
                {/* RIGHT LINE */}
                {i !== therapyProcessSteps.length - 1 && (
                  <motion.div
                    animate={{ scaleX: 1 }}
                    className={`absolute left-1/2 -mt-5 h-[2px] w-[calc(100%+3rem)] origin-left -translate-y-1/2 rounded-full ${step.lineClassName ?? 'bg-gray-300/80'}`}
                    initial={{ scaleX: 0 }}
                    transition={{
                      delay: lineDelay,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                )}

                {/* STEP ICON */}
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
                  className={`relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 bg-white shadow-sm ${step.borderClassName}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 30,
                  }}
                >
                  <step.icon className="size-10 text-gray-700" size={40} />
                </motion.div>
              </div>

              {/* TITLE */}
              <motion.h3
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
              </motion.h3>

              {/* DESCRIPTION */}
              <motion.p
                animate={{
                  opacity: 1,
                  transition: {
                    delay: stepDelay + 0.3,
                  },
                }}
                className="text-md text-gray-500"
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
        {therapyProcessSteps.map((step, i) => (
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
              className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 bg-white shadow-sm ${step.borderClassName}`}
            >
              <step.icon className="size-10 text-gray-700" size={40} />
            </div>

            <h3 className="mb-2 font-display text-xl font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="text-md text-gray-500">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
