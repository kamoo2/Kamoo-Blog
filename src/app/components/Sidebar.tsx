import Link from 'next/link';

import { fontMono } from '@/lib/fonts';
import { Menu, TagWithCount } from '@/lib/types';

type SidebarProps = {
  isOpen: boolean;
  sidebarRef: React.ForwardedRef<HTMLDivElement>;
  tagList: TagWithCount[];
  pathname: string;
  menus: Menu[];
  keyName: string | null;
};

export default function Sidebar({
  isOpen,
  sidebarRef,
  tagList,
  pathname,
  menus,
  keyName,
}: SidebarProps) {
  const selectedTag = keyName === 'all' || keyName === null ? 'all' : keyName;
  return (
    <div
      ref={sidebarRef}
      className={`absolute -left-[324px] top-0 z-0 flex ${
        fontMono.className
      } h-screen w-[300px] flex-col bg-green-800 px-6 py-4 text-neutral-100 transition-transform duration-500 ${
        isOpen ? 'translate-x-[300px]' : 'translate-x-0'
      }`}
    >
      <Link href="/" className={`mb-12 text-center text-3xl`}>
        Kamoo
      </Link>
      <h2 className="mb-3 text-2xl font-semibold">Menu</h2>
      <nav className="mb-12 flex w-full flex-col gap-2 px-8 text-xl font-medium">
        {menus.map((menu) => (
          <Link
            className={`${pathname === menu.path && 'text-amber-300'}`}
            key={menu.path}
            href={menu.path}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
      {(pathname === '/blog' || pathname === '/snippets') && (
        <>
          <h2 className="mb-3 text-2xl font-semibold">Tags</h2>
          <nav className="flex w-full flex-col gap-2 px-8 text-xl font-medium">
            {tagList.map((tag) => (
              <Link
                className={`${selectedTag === tag.name && 'text-amber-300'}`}
                key={tag.name}
                href={`?key=${tag.name}`}
              >
                {tag.name} ({tag.count})
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
