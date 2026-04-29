export const gallerySectionContent = {
  title: 'Moments From Our Community',
  description: 'Real people, real spaces, real healing.',
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { src: '/assets/tools/workshops.png', alt: 'Workshop session' },
  { src: '/assets/tools/workshops-adults-1.png', alt: 'Adults workshop' },
  { src: '/assets/tools/workshops-adults-2.png', alt: 'Adults workshop session' },
  { src: '/assets/tools/coaching.png', alt: 'Coaching session' },
  { src: '/assets/tools/journaling.png', alt: 'Journaling & gratitude' },
  { src: '/assets/tools/podcast.png', alt: 'Podcast and blogs' },
  { src: '/assets/tools/therapy.png', alt: 'Therapy session' },
  { src: '/about/story/story.png', alt: 'Our story' },
];
