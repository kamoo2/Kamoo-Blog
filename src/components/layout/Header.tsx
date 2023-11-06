import Link from 'next/link';
import { Suspense } from 'react';

import MobileMenu from '@/components/MobileMenu';
import Nav from '@/components/Nav';
import ProgressBar from '@/components/ProgressBar';
import QuickSearchButton from '@/components/QuickSearchButton';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import { blogService, snippetService } from '@/lib/post';
import SiteConfig from '@/site.config';

function MobileMenuFallback() {
  return <></>;
}

export default function Header() {
  return (
    <div className="sticky left-0 top-0 z-10">
      <header className="text-primary bg-primary border-primary h-14 border-b">
        <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between px-6 md:max-w-6xl lg:px-0">
          <Link className="hidden font-semibold lg:block" href="/">
            KAMOONY
          </Link>
          <Suspense fallback={<MobileMenuFallback />}>
            <MobileMenu
              menus={SiteConfig.nav}
              blogTagList={blogService.tagCountList}
              snippetTagList={snippetService.tagCountList}
            />
          </Suspense>
          <Nav />
          <div className="flex items-center gap-2">
            <QuickSearchButton />
            <ThemeToggleButton />
          </div>
        </div>
      </header>
      <ProgressBar />
    </div>
  );
}
