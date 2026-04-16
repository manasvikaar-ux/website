'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WhiteButton } from '@/shared/components/neobrutal-button';
import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { MenuIcon } from '@/shared/components/ui/menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/shared/components/ui/navigation-menu';
import { siteBrand } from '@/shared/data/branding';
import { siteNavItems } from '@/shared/data/navigation';
import { cn } from '@/shared/lib/utils';

export const SiteHeader = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-background-cream/95 backdrop-blur-sm">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt={siteBrand.logoAlt}
              className="h-10 w-10 object-contain"
              height={40}
              src={siteBrand.logoSrc}
              width={40}
            />
            <span className="font-display text-2xl font-semibold">
              {siteBrand.name}
            </span>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-3">
              {siteNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      className={cn(
                        'font-medium text-sm transition-colors hover:text-gray-600',
                        isActive
                          ? 'text-gray-900 underline underline-offset-4'
                          : ''
                      )}
                      render={<Link href={item.href} />}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:block">
            <Link href="/about">
              <WhiteButton size="sm">Lets Talk</WhiteButton>
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              className="lg:hidden"
              render={
                <Button
                  className="h-11 w-11 rounded-md border border-gray-900 bg-white hover:bg-gray-100"
                  size="icon"
                  variant="ghost"
                />
              }
            >
              <MenuIcon className="text-gray-900" size={20} />
              <span className="sr-only">Open navigation menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-2">
              {siteNavItems.map((item) => (
                <DropdownMenuItem className="p-0" key={item.label}>
                  <Link
                    className="w-full px-2 py-2 text-sm font-semibold"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="mt-2">
                <Link href="/about">
                  <WhiteButton className="w-full" size="sm">
                    Lets Talk
                  </WhiteButton>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
