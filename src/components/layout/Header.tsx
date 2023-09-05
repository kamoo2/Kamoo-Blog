import Link from 'next/link';
import { Suspense } from 'react';

import { allBlogTagsWithCount, allSnippetTagsWithCount } from '@/app/lib/post';
import { getAllMenus } from '@/app/service/posts';
import MobileMenu from '@/components/MobileMenu';
import QuickSearchButton from '@/components/QuickSearchButton';
import ThemeToggleButton from '@/components/ThemeToggleButton';

function MobileMenuFallback() {
  return <>placeholder</>;
}

export default async function Header() {
  const menus = await getAllMenus();
  return (
    <header className="text-primary bg-primary border-primary sticky left-0 top-0 z-10  border-b py-2">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 md:max-w-6xl lg:px-0">
        <Link className="hidden font-semibold lg:block" href="/">
          KAMOO
        </Link>
        <Suspense fallback={<MobileMenuFallback />}>
          <MobileMenu
            menus={menus}
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
  );
}
