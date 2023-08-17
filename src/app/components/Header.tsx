import React from 'react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import QuickSearchButton from '@/components/QuickSearchButton';
import { RiSunLine } from 'react-icons/ri';

export default function Header() {
  return (
    <header className="sticky left-0 top-0 border-b-2 border-b-slate-300 bg-white py-2">
      <div className="relative flex items-center justify-between">
        <Link className="font-semibold" href="/">
          KAMOO
        </Link>
        <nav className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold text-slate-700">
          <Link className="mr-4" href="/blog">
            Blog
          </Link>
          <Link className="mr-4" href="/snippets">
            Snippets
          </Link>
          <Link href="/archivecs">Archives</Link>
        </nav>
        <div className="flex items-center gap-2">
          <QuickSearchButton />
          <RiSunLine className="cursor-pointer text-slate-400 transition-colors duration-300 hover:text-slate-500" />
        </div>
      </div>
      {/*<div className="mt-6 text-center text-8xl font-bold text-slate-800">*/}
      {/*  <Link href="/">Kamoo</Link>*/}
      {/*</div>*/}
    </header>
  );
}
