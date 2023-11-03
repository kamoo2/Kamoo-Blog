import Link from 'next/link';
import { Suspense } from 'react';

import MobileMenu from '@/components/MobileMenu';
import ProgressBar from '@/components/ProgressBar';
import QuickSearchButton from '@/components/QuickSearchButton';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import { allBlogTagsWithCount, allSnippetTagsWithCount } from '@/lib/post';

function MobileMenuFallback() {
  return <></>;
}

export default function Header() {
  return (
    <div className="sticky left-0 top-0 z-10">
      <header className="text-primary bg-primary border-primary border-b py-2">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 md:max-w-6xl lg:px-0">
          <Link className="hidden font-semibold lg:block" href="/">
            KAMOO
          </Link>
          <Suspense fallback={<MobileMenuFallback />}>
            <MobileMenu
              menus={[
                {
                  name: 'Blog',
                  path: '/blog',
                },
                {
                  name: 'Snippets',
                  path: '/snippets',
                },
                {
                  name: 'Archives',
                  path: '/archives',
                },
                {
                  name: 'Contact',
                  path: '/contact',
                },
              ]}
              blogTagList={allBlogTagsWithCount}
              snippetTagList={allSnippetTagsWithCount}
            />
          </Suspense>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-semibold lg:block">
            <Link className="mr-4" href="/blog">
              Blog
            </Link>
            <Link className="mr-4" href="/snippets">
              Snippets
            </Link>
            <Link href="/archives">Archives</Link>
          </nav>
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
