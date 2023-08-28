import Link from 'next/link';
import { Suspense } from 'react';
import { RiSunLine } from 'react-icons/ri';

import IconButton from '@/components/common/IconButton';
import MobileMenu from '@/components/MobileMenu';
import QuickSearchButton from '@/components/QuickSearchButton';
import { allBlogTagsWithCount, allSnippetTagsWithCount } from '@/lib/post';
import { getAllMenus } from '@/service/posts';

function MobileMenuFallback() {
  return <>placeholder</>;
}

export default async function Header() {
  const menus = await getAllMenus();
  return (
    <header className="sticky left-0 top-0 border-b-2 border-b-gray-400 bg-white py-2 text-gray-800">
      <div className="flex items-center justify-between">
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
          <IconButton
            Icon={RiSunLine}
            className="text-2xl text-slate-600 transition-colors duration-300 hover:text-slate-800"
          />
        </div>
      </div>
    </header>
  );
}
