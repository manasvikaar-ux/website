# Manasvikaar - Mental Health & Wellness Platform

<p align="center">
  <a href="#">
    <img
      src="public/assets/images/nextjs-starter-banner.png?raw=true"
      alt="Manasvikaar banner"
      style="max-width: 100%; height: auto;"
    />
  </a>
</p>

Manasvikaar is a mental health and wellness website built with Next.js 16, Tailwind CSS 4, and TypeScript. It offers therapy sessions, coaching services, workshops, podcasts, digital wellness tools, corporate wellness programs, and resources for mental health support.

## Features

- ⚡ [Next.js](https://nextjs.org) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 [Tailwind CSS v4](https://tailwindcss.com) for styling
- 🤖 AI coding agent instructions for Claude Code, Codex, Cursor, OpenCode, Copilot, and more
- ✅ Strict Mode for TypeScript and React 19
- 📦 Type-safe form handling with React Hook Form and Zod
- 💖 Motion for animations
- 📏 Linter with Oxlint
- 🦺 Unit Testing with Vitest
- 🌍 Internationalization (i18n) support
- 📝 Logging with LogTape

## Pages

| Route | Description |
| --- | --- |
| `/` | Home - Landing page with hero, tools, partners, workshops, testimonials, pricing, FAQ |
| `/about` | About the company with stats, story, values, team |
| `/therapy` | Therapy services with booking, pricing, process sections |
| `/workshops` | Workshop listings with art therapy, mindfulness, booking |
| `/coaching` | Corporate/coaching services with programs, outcomes |
| `/tools` | Digital wellness tools section |
| `/podcasts` | Podcast player and conversations |
| `/resources` | Helplines, emergency contacts, facilities |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |

## Getting Started

Run the following command on your local environment:

```shell
git clone https://github.com/webalar-developers/manasvikaar-ux.git
cd manasvikaar-ux
pnpm install
```

Then, run the project locally in development mode:

```shell
pnpm run dev
```

Open http://localhost:3000 with your favorite browser.

## Project Structure

```shell
.
├── src
│   ├── app                    # Next.js App (App Router)
│   ├── features               # Feature-based organization
│   ├── shared                # Shared components and utilities
│   ├── content               # Static content
│   ├── lib                   # Utilities
│   ├── styles                # Global styles
│   ├── types                 # Type definitions
│   └── utils                 # Utility functions
├── public                    # Public assets
├── next.config.ts            # Next.js configuration
├── package.json              # pnpm dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── tailwind.config.ts        # Tailwind configuration
```

## Customization

- `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon
- `src/utils/AppConfig.ts`: configuration file
- `src/styles/global.css`: Tailwind theme configuration
- `next.config.ts`: Next.js configuration

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run linter
- `pnpm run check:types` - Check TypeScript types
