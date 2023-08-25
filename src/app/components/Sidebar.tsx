import React from 'react';
import { fontMono } from '@/lib/fonts';
import Link from 'next/link';

type SidebarProps = {
  isOpen: boolean;
  sidebarRef: React.ForwardedRef<HTMLDivElement>;
  pathname: string;
};

export default function Sidebar({ isOpen, sidebarRef, pathname }: SidebarProps) {
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
      <h2 className="mb-2 text-2xl font-semibold">Menu</h2>
      <nav className="mb-12 flex w-full flex-col gap-2 px-8 text-xl font-medium">
        <Link href="/blog">Blog</Link>
        <Link href="/snippets">Snippets</Link>
        <Link href="/archives">Archives</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {(pathname === '/blog' || pathname === '/snippets') && (
        <>
          <h2 className="text-2xl font-semibold">Tags</h2>
          <nav className="mb-12 flex w-full flex-col gap-2 px-8 text-xl font-medium"></nav>
        </>
      )}
    </div>
  );
}
