import { type NextRequest, NextResponse } from 'next/server';

const PAGE_MARKDOWN: Record<string, string> = {
  '/': `# Manasvikaar – Mental Health & Wellness

> A Mental Health Platform For You, By You, With You.

Your Story, Has a Place Here. You don't need to have it all figured out to begin. Whether you're carrying something heavy or simply feeling off, Manasvikaar is a space where you can pause, be heard, and find your way forward. Guided by real people. Rooted in compassion.

## What We Offer

- **Workshops** – Interactive sessions using art therapy, journaling, and handwriting analysis to deepen self-awareness and emotional expression. [Explore Workshops](/workshops)
- **Individual, Couple & Group Therapy** – Safe, confidential sessions with licensed professionals to navigate emotions, relationships, and life's hardest chapters. [Book Session](/therapy)
- **Coaching** – Structured learning experiences that build emotional intelligence, sharpen self-awareness, and bring mental health concepts to life. [Explore Coaching](/coaching)
- **Journaling & Gratitude** – Guided prompts to help you reflect on your thoughts, track your moods, and build emotional clarity over time. [Start Journaling](/tools)
- **Podcast and Blogs** – Honest, thoughtful conversations on mental health, identity, and growth. [Listen Now](/podcasts)

## Workshops

Our workshops are spaces where something shifts. Through guided creative experiences, you learn to notice your emotions, name them, and move through them, without judgment and without pressure.

- **Handwriting Analysis** – Uncover personality patterns and emotional states through the science of graphology.
- **Stress Management** – Practical, evidence-backed tools to help you manage pressure before it becomes burnout.
- **Art Therapy** – A quiet, expressive space for emotions that words alone can't hold.
- **Journaling** – Guided writing prompts to help you reflect, reconnect, and rediscover clarity.

## The Reality

- 85% of people in low to middle-income countries receive no mental health care.
- 700k lives are lost to suicide yearly — a leading cause in ages 15–29.
- 72% of all suicide victims in India are men.
- 1 in 8 people globally live with a mental health condition.

## Links

- [About](/about)
- [Therapy](/therapy)
- [Workshops](/workshops)
- [Coaching](/coaching)
- [Tools](/tools)
- [Resources](/resources)
- [Contact](/about#contact)
`,

  '/about': `# About Manasvikaar

Manasvikaar is a mental health platform rooted in compassion, community, and real human connection. We believe every story deserves a safe place.

## Our Mission

To make mental health support accessible, human, and judgment-free — for everyone, wherever they are in their journey.

## Services

- Individual, Couple & Group Therapy
- Creative Workshops (Art Therapy, Journaling, Handwriting Analysis)
- Life Coaching & Emotional Intelligence Programs
- Podcasts, Blogs & Wellness Resources

## Contact

[Get in touch](/about#contact)

## Links

- [Home](/)
- [Therapy](/therapy)
- [Workshops](/workshops)
- [Coaching](/coaching)
`,

  '/therapy': `# Therapy at Manasvikaar

Safe, confidential sessions with licensed professionals to navigate emotions, relationships, and life's hardest chapters.

## Types of Therapy

- **Individual Therapy** – One-on-one sessions tailored to your personal journey.
- **Couple Therapy** – Guided conversations to help partners reconnect and communicate.
- **Group Therapy** – Shared healing in a safe, facilitated space.

## How to Start

[Book a Consultation](/therapy)

## Links

- [Home](/)
- [About](/about)
- [Workshops](/workshops)
`,

  '/workshops': `# Workshops at Manasvikaar

Our workshops are not classrooms. They are spaces where something shifts. Through guided creative experiences, you learn to notice your emotions, name them, and move through them, without judgment and without pressure.

## Workshop Types

- **Handwriting Analysis** – Uncover personality patterns and emotional states through the science of graphology.
- **Stress Management** – Practical, evidence-backed tools to help you manage pressure before it becomes burnout.
- **Art Therapy** – A quiet, expressive space for emotions that words alone can't hold.
- **Journaling** – Guided writing prompts to help you reflect, reconnect, and rediscover clarity.

## Upcoming Events

- **Play Pause & Heal (For Kids)** – 4th April 2026, Bunaphile Roasters, Kolkata
- **Play Pause & Heal (For Adults)** – 9th November 2025, Bunaphile Roasters, Kolkata

## Links

- [Home](/)
- [Therapy](/therapy)
- [Coaching](/coaching)
`,

  '/coaching': `# Coaching at Manasvikaar

For those pursuing a deeper understanding of psychology — structured learning experiences that build emotional intelligence, sharpen self-awareness, and bring mental health concepts to life.

## What You'll Gain

- Deeper self-awareness
- Practical emotional intelligence tools
- Mental health frameworks applied to everyday life

## Links

- [Home](/)
- [Therapy](/therapy)
- [Workshops](/workshops)
`,

  '/tools': `# Wellness Tools at Manasvikaar

Guided prompts and resources to help you reflect on your thoughts, track your moods, and build emotional clarity over time.

## Available Tools

- **Journaling** – Structured prompts for daily reflection and mood tracking.
- **Gratitude Practice** – Build a consistent gratitude habit for emotional resilience.

## Links

- [Home](/)
- [Workshops](/workshops)
- [Resources](/resources)
`,

  '/resources': `# Resources – Manasvikaar

Curated mental health resources, articles, and guides to support your wellbeing journey.

## Links

- [Home](/)
- [Tools](/tools)
- [About](/about)
`,
};

export function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') ?? '/';
  const content = PAGE_MARKDOWN[path];

  if (!content) {
    return new NextResponse('Not found', { status: 404 });
  }

  const encoder = new TextEncoder();
  const bytes = encoder.encode(content);

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(bytes.length),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
