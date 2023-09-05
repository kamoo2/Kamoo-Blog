'use client';
import { Action } from 'kbar';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineSnippets } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';
import { SlHome } from 'react-icons/sl';
import { TbBrandBlogger } from 'react-icons/tb';
import { TfiArchive } from 'react-icons/tfi';

export default function UseKbarAction(): Action[] {
  const router = useRouter();

  return [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['H'],
      section: 'Pages',
      keywords: 'Navigation To Home',
      icon: <SlHome />,
      perform: () => router.push('/'),
    },
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['B'],
      section: 'Pages',
      keywords: 'Navigation To Blog',
      icon: <TbBrandBlogger />,
      perform: () => router.push('/blog'),
    },
    {
      id: 'snippets',
      name: 'Snippets',
      shortcut: ['S'],
      section: 'Pages',
      keywords: 'Navigation To Snippet',
      icon: <AiOutlineSnippets />,
      perform: () => router.push('/snippets'),
    },
    {
      id: 'archives',
      name: 'Archives',
      shortcut: ['A'],
      section: 'Pages',
      keywords: 'Navigation To Archive',
      icon: <TfiArchive />,
      perform: () => router.push('/archives'),
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['C'],
      section: 'Pages',
      keywords: 'Navigation To Contact',
      icon: <GrContact />,
      perform: () => router.push('/contact'),
    },
  ];
}
