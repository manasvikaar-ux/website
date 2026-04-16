import {
  recentConversationIcons,
  recentConversationsContent,
  recentEpisodes,
  recentEpisodeToneIcons,
} from '@/features/podcasts/data/recent-conversations.data';
import { WhiteButton } from '@/shared/components/neobrutal-button';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';

const FilterIcon = recentConversationIcons.filter;
const SearchIcon = recentConversationIcons.search;
const PlayIcon = recentConversationIcons.play;

export const RecentConversationsSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h3 className="mb-4 font-display text-4xl font-semibold">
            {recentConversationsContent.title}
          </h3>
          <p className="text-gray-600">
            {recentConversationsContent.description}
          </p>
        </div>
        <div className="flex space-x-2">
          <Button
            className="rounded-md border-gray-200"
            size="icon"
            variant="outline"
          >
            <FilterIcon className="size-4" size={16} />
          </Button>
          <Button
            className="rounded-md border-gray-200"
            size="icon"
            variant="outline"
          >
            <SearchIcon className="size-4" size={16} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recentEpisodes.map((episode, index) => {
          const ToneIcon = recentEpisodeToneIcons[index];
          return (
            <Card
              className={`group rounded-3xl bg-white py-0 ring-0 transition-all hover:shadow-xl ${index === 2 ? 'border border-primary/30 ring-2 ring-primary/5' : 'border border-gray-100'}`}
              key={episode.title}
            >
              <CardContent className="flex h-full flex-col p-6">
                <div
                  className={`relative mb-6 flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-2xl ${episode.tone}`}
                >
                  {ToneIcon !== undefined ? (
                    <ToneIcon className="size-16 opacity-25" size={64} />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                    <span className="flex h-12 w-12 scale-0 items-center justify-center rounded-md bg-white shadow-lg transition-transform group-hover:scale-100">
                      <PlayIcon className="size-5 text-gray-900" size={20} />
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="mb-3 text-xl font-semibold">
                    {episode.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-500">
                    {episode.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <span className="text-xs font-semibold text-gray-400">
                    {episode.duration} • {episode.episode}
                  </span>
                  <Button
                    className="h-auto p-0 text-sm font-semibold text-primary hover:underline"
                    variant="link"
                  >
                    Listen Now{' '}
                    <svg
                      aria-hidden="true"
                      className="ml-1 size-3.5"
                      fill="none"
                      height={14}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width={14}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <WhiteButton className="rounded-md">
          {recentConversationsContent.actionLabel}
        </WhiteButton>
      </div>
    </div>
  </section>
);
