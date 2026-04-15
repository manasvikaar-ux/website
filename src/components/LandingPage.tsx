'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `Count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

export function LandingPage() {
  const counterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (counterRef.current) {
      setupCounter(counterRef.current);
    }
  }, []);

  return (
    <div className="landing-container">
      <section className="landing-center">
        <div className="hero">
          <div className="relative w-[170px]">
            <Image
              src="/assets/hero.svg"
              alt="Next.js logo"
              className="base"
              width={170}
              height={179}
              priority
            />
            <div
              className="framework absolute left-1/2 top-[34px] z-10 -translate-x-1/2"
              style={{
                height: '28px',
                transform: 'perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4)',
              }}
            >
              <Image
                src="/assets/hero.svg"
                alt="TypeScript logo"
                width={170}
                height={179}
                className="h-full w-auto"
                style={{ height: '28px', width: 'auto' }}
              />
            </div>
            <div
              className="vite absolute left-1/2 top-[107px] z-0 -translate-x-1/2"
              style={{
                height: '26px',
                transform: 'perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8)',
              }}
            >
              <Image
                src="/assets/hero.svg"
                alt="Vite logo"
                width={170}
                height={179}
                className="h-full w-auto"
                style={{ height: '26px', width: 'auto' }}
              />
            </div>
          </div>
        </div>

        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/app/page.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button id="counter" type="button" className="counter" ref={counterRef}>
          Count is 0
        </button>
      </section>

      <div className="landing-ticks" />

      <section className="landing-section">
        <div className="landing-docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon" />
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul className="landing-links">
            <li>
              <Link href="https://vite.dev/" target="_blank" rel="noreferrer">
                <Image
                  src="/assets/hero.svg"
                  alt=""
                  className="logo"
                  width={18}
                  height={18}
                />
                Explore Vite
              </Link>
            </li>
            <li>
              <Link href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
                <Image
                  src="/assets/hero.svg"
                  alt=""
                  className="button-icon"
                  width={18}
                  height={18}
                />
                Learn more
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon" />
          </svg>
          <h2>Connect with us</h2>
          <p>Join the community</p>
          <ul className="landing-links">
            <li>
              <Link href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon" />
                </svg>
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon" />
                </svg>
                Discord
              </Link>
            </li>
            <li>
              <Link href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon" />
                </svg>
                X.com
              </Link>
            </li>
            <li>
              <Link href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon" />
                </svg>
                Bluesky
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <div className="landing-ticks" />
      <div className="landing-spacer" />
    </div>
  );
}