'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import siteConfig from '@/site.config';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold">
      {siteConfig.nav.map((menu) => (
        <Link
          key={menu.path}
          className={`mr-4 h-full ${pathname === menu.path ? 'text-green-600' : 'text-inherit'}`}
          href={menu.path}
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  );
}
