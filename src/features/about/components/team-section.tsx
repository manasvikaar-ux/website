import Image from 'next/image';
import { aboutTeam, aboutTeamSection } from '@/features/about/data/team.data';

export const TeamSection = () => (
  <section className="bg-background-cream py-24">
    <div className="container mx-auto px-5 sm:px-6">
      <h2 className="mb-16 text-center font-display text-4xl font-semibold text-gray-900 lg:text-4xl">
        {aboutTeamSection.title}
      </h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3">
        {aboutTeam.map((member) => (
          <div className="group text-center" key={member.name}>
            <div className="relative mx-auto mb-6 h-48 w-48">
              <div
                className={`absolute inset-0 translate-x-2 translate-y-2 rounded-full border-2 border-gray-900 ${member.shadowColor}`}
              />
              <Image
                alt={member.imgAlt}
                className="relative z-10 h-full w-full rounded-full border-2 border-gray-900 bg-white object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                height={192}
                src={member.imgSrc}
                width={192}
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p
              className={`mb-3 text-sm font-semibold tracking-wider uppercase ${member.roleClassName}`}
            >
              {member.role}
            </p>
            <p className="text-sm text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
