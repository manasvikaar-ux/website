import { aboutStorySchema } from '@/features/about/schemas/story.schema';

export const aboutStory = aboutStorySchema.parse({
  imgAlt: 'Team brainstorming session',
  imgSrc:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBVoe_I3Bg9xATAItHxrMpssoidTWGxflkiofcyviLXpaspYhHBJYbTyGjVdETU8MjSsUv7yYuA7gSLcTBaRQlFpRX1rSNdN6aFm0wnV77jwAtWcdW6XIGeR418xIvGyLLeDLMMd-MQOlwJeUs5pezikKf-KXlT0RWMT5_VBMT0-IejiG4Tk-2FV7KlnxK1LnKlhmvHFh2UJ-Td8tTF2PhdidYXGsryh7_-Yh9yRHeq4GYYVKro-seF_pLrYcmL6aGvNvUrDWKqOmU',
  sections: [
    {
      heading: '',
      paragraphs: [
        'When I first imagined Manasvikaar, I wanted to build something simple: a place where people could arrive exactly as they are and feel seen.',
      ],
    },
    {
      heading: '',
      paragraphs: [
        'Not a place that demands you already have the vocabulary of mental health, or that you arrive with a diagnosis, or that you prove your pain is serious enough. Just a door that stays open.',
      ],
    },
    {
      heading: '',
      paragraphs: [
        "I've watched people, friends, strangers, colleagues, quietly carry things they were afraid to name. Not because the help didn't exist, but because asking for it felt too big, too unfamiliar, too vulnerable. Manasvikaar exists to make that first step smaller. To say: you don't have to explain everything. You don't have to be at your lowest. You just have to show up and we'll meet you there.",
      ],
    },
  ],
  title: "Founder's Note",
});
