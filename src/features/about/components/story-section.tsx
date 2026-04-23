import { aboutStory } from '@/features/about/data/story.data';

export const StorySection = () => (
  <section className="relative bg-background-cream py-24">
    <div className="absolute top-1/4 left-0 h-64 w-32 rounded-r-full bg-background-teal/20 blur-3xl" />
    <div className="relative z-10 container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-4">
          <h2 className="sticky top-24 font-display text-4xl leading-tight font-semibold text-gray-900 lg:text-4xl">
            {aboutStory.title}
          </h2>
        </div>
        <div className="space-y-8 text-lg leading-relaxed font-light text-gray-700 lg:col-span-8">
          {aboutStory.sections.map((section) => (
            <div
              className="space-y-8"
              key={section.heading || section.paragraphs[0]?.slice(0, 40)}
            >
              {section.heading ? (
                <h3 className="text-4xl font-semibold text-gray-800">
                  {section.heading}
                </h3>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
