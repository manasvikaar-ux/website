import Image from 'next/image';
import Link from 'next/link';
import { YellowButton } from '@/shared/components/neobrutal-button';
import { Input } from '@/shared/components/ui/input';
import { siteBrandFooter } from '@/shared/data/branding';
import { footerLinkGroups, footerSocialItems } from '@/shared/data/footer';

export const SiteFooter = () => (
  <footer className="border-t border-gray-800 bg-background-dark pt-16 pb-10 text-white">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-6 flex items-center">
            <Image
              alt={siteBrandFooter.logoAlt}
              className="mr-2 h-10 w-10 object-contain"
              height={52}
              src={siteBrandFooter.logoSrc}
              width={52}
            />
            <span className="font-display text-2xl font-semibold">
              {siteBrandFooter.name}
            </span>
          </div>
          <p className="mb-6 max-w-xs text-xs leading-relaxed text-gray-400">
            A community-rooted mental wellness platform dedicated to making
            healing accessible, understandable, and human, for everyone.
          </p>
          <div className="mb-6 flex max-w-xs items-center rounded border border-gray-700 bg-[#333] p-1 pr-1.5">
            <Input
              className="h-auto border-none bg-transparent text-sm text-white shadow-none placeholder:text-gray-500 focus-visible:ring-0"
              placeholder="Work Email"
              type="email"
            />
            <YellowButton
              className="h-8 px-3 text-xs whitespace-nowrap shadow-none"
              size="sm"
            >
              Stay Updated
            </YellowButton>
          </div>
          <div className="flex space-x-3">
            {footerSocialItems.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:bg-white hover:text-gray-900"
                  href={social.href}
                  key={social.id}
                >
                  <Icon className="size-4" size={16} />
                </a>
              );
            })}
          </div>
        </div>
        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              {group.title}
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-primary"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-xs text-gray-500 md:flex-row">
        <p>Copyright © 2026 Manasvikaar Wellness Pvt Ltd.</p>
        <div className="mt-2 space-x-6 md:mt-0">
          <Link className="hover:text-white" href="/terms">
            Terms & Conditions
          </Link>
          <Link className="hover:text-white" href="/privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
