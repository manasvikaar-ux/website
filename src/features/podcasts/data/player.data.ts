import { Share2, Volume2 } from 'lucide-react';
import { z } from 'zod';
import {
  PlayerContentSchema,
  PlayerIconsSchema,
  TranscriptActionIconsSchema,
  TranscriptEntrySchema,
} from '@/features/podcasts/schemas/player.schema';
import { BookmarkIcon as Bookmark } from '@/shared/components/ui/bookmark';
import { DownloadIcon as Download } from '@/shared/components/ui/download';
import { HeartIcon as Heart } from '@/shared/components/ui/heart';
import { PauseIcon as Pause } from '@/shared/components/ui/pause';
import { RotateCCWIcon as RotateCcw } from '@/shared/components/ui/rotate-ccw';
import { RotateCWIcon as RotateCw } from '@/shared/components/ui/rotate-cw';
import { WavesIcon as Waves } from '@/shared/components/ui/waves';

export const playerContent = PlayerContentSchema.parse({
  episodeTitle: 'Reproductive Health Impacts',
  host: 'Dr. Aditi Sharma',
  speed: '1x Speed',
  timeCurrent: '14:22',
  timeTotal: '45:00',
});

export const playerIcons = PlayerIconsSchema.parse({
  favorite: Heart,
  forward: RotateCw,
  pause: Pause,
  replay: RotateCcw,
  share: Share2,
  visualizer: Waves,
  volume: Volume2,
});

export const transcriptTabs = [
  'Transcript',
  'Key Takeaways (TL;DR)',
  'Resources',
] as const;

export const transcriptEntries = z.array(TranscriptEntrySchema).parse([
  {
    speaker: 'Host (Manas)',
    text: "Welcome back to Conversations on Healing. Today we're diving into a crucial yet often overlooked topic: how reproductive health conditions impact mental well-being. We're joined by Dr. Aditi Sharma.",
    timestamp: '[00:00]',
  },
  {
    quote: true,
    speaker: 'Dr. Aditi',
    text: "\"Mindfulness isn't just a buzzword; in the context of hormonal fluctuations, it's a physiological anchor. When we talk about conditions like PCOS or Endometriosis, we aren't just treating a physical organ, but an entire neuro-endocrine ecosystem.\"",
    timestamp: '[02:15]',
  },
  {
    speaker: 'Host (Manas)',
    text: "That's fascinating. So, for someone experiencing these symptoms, what's the first step in recognizing that their mental fog might be tied to their cycle?",
    timestamp: '[05:40]',
  },
  {
    speaker: 'Dr. Aditi',
    text: "The first step is always tracking. Not just tracking the cycle, but tracking the mood peaks and troughs alongside it. We need data to bridge the gap between 'I feel bad' and 'My hormones are impacting my serotonin levels'.",
    timestamp: '[08:22]',
  },
]);

export const transcriptActionIcons = TranscriptActionIconsSchema.parse({
  bookmark: Bookmark,
  download: Download,
});
