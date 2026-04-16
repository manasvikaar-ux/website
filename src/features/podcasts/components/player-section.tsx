import {
  playerContent,
  playerIcons,
  transcriptActionIcons,
  transcriptEntries,
  transcriptTabs,
} from '@/features/podcasts/data/player.data';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

const VisualizerIcon = playerIcons.visualizer;
const PauseIcon = playerIcons.pause;
const ReplayIcon = playerIcons.replay;
const ForwardIcon = playerIcons.forward;
const FavoriteIcon = playerIcons.favorite;
const ShareIcon = playerIcons.share;
const VolumeIcon = playerIcons.volume;

const DownloadIcon = transcriptActionIcons.download;
const BookmarkIcon = transcriptActionIcons.bookmark;

export const PlayerSection = () => (
  <section className="border-y border-gray-100 bg-white py-12">
    <div className="container mx-auto px-5 sm:px-6">
      <Card className="min-h-[600px] overflow-hidden rounded-3xl border-gray-200 bg-background-cream py-0 shadow-2xl ring-0">
        <CardContent className="flex h-full flex-col p-0 lg:flex-row">
          <div className="border-r border-gray-200 p-10 lg:w-2/5">
            <div className="text-center">
              <div className="relative mx-auto mb-8 flex h-64 w-64 items-center justify-center overflow-hidden rounded-3xl bg-background-teal/30 shadow-inner">
                <VisualizerIcon
                  className="size-16 text-teal-600/70"
                  size={64}
                />
              </div>
              <h3 className="mb-2 text-4xl font-semibold text-gray-900">
                {playerContent.episodeTitle}
              </h3>
              <p className="mb-8 text-gray-500">
                Episode 14 • {playerContent.host}
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-1.5 w-full overflow-hidden rounded-md bg-gray-200">
                  <div className="h-full w-1/3 bg-primary" />
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-400">
                  <span>{playerContent.timeCurrent}</span>
                  <span>{playerContent.timeTotal}</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8">
                <Button className="rounded-md" size="icon" variant="ghost">
                  <ReplayIcon className="size-8 text-gray-400" size={32} />
                </Button>
                <Button className="flex h-16 w-16 items-center justify-center rounded-md bg-primary shadow-lg hover:bg-primary/90">
                  <PauseIcon className="size-8 text-gray-900" size={32} />
                </Button>
                <Button className="rounded-md" size="icon" variant="ghost">
                  <ForwardIcon className="size-8 text-gray-400" size={32} />
                </Button>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-3">
                  <Button className="rounded-md" size="icon-sm" variant="ghost">
                    <FavoriteIcon className="size-5 text-gray-400" size={20} />
                  </Button>
                  <Button className="rounded-md" size="icon-sm" variant="ghost">
                    <ShareIcon className="size-5 text-gray-400" size={20} />
                  </Button>
                </div>
                <div className="flex items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold">
                  <VolumeIcon className="size-3.5" size={14} />
                  <span>{playerContent.speed}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white lg:w-3/5">
            <div className="flex border-b border-gray-200 px-8">
              {transcriptTabs.map((tab, index) => (
                <Button
                  className={`rounded-none px-6 py-5 text-sm ${index === 0 ? 'border-b-2 border-primary font-semibold text-gray-900' : 'border-b-2 border-transparent text-gray-400'}`}
                  key={tab}
                  variant="ghost"
                >
                  {tab}
                </Button>
              ))}
            </div>

            <div className="max-h-[500px] flex-grow space-y-8 overflow-y-auto p-8">
              {transcriptEntries.map((entry) => (
                <div
                  className={`flex gap-4 ${entry.quote === true ? 'rounded-2xl border border-background-teal/20 bg-background-teal/10 p-4' : ''}`}
                  key={`${entry.timestamp}-${entry.speaker}`}
                >
                  <span
                    className={`mt-1 font-mono text-xs ${entry.quote === true ? 'font-semibold text-teal-600' : 'text-gray-400'}`}
                  >
                    {entry.timestamp}
                  </span>
                  <div className="flex-grow">
                    <p
                      className={`mb-1 text-sm font-semibold ${entry.quote === true ? 'text-teal-700' : 'text-gray-900'}`}
                    >
                      {entry.speaker}:
                    </p>
                    <p
                      className={`leading-relaxed ${entry.quote === true ? 'text-gray-700' : 'text-gray-600'}`}
                    >
                      {entry.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 rounded-br-3xl border-t border-gray-200 bg-gray-50 p-6">
              <Button
                className="text-xs font-semibold tracking-wider uppercase"
                variant="ghost"
              >
                <DownloadIcon className="size-3.5" size={14} />
                Download PDF Transcript
              </Button>
              <Button
                className="text-xs font-semibold tracking-wider uppercase"
                variant="ghost"
              >
                <BookmarkIcon className="size-3.5" size={14} />
                Save Highlights
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);
