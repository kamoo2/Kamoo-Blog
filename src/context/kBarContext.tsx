'use client';

import { KBarProvider } from 'kbar';

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['b'],
    keywords: 'This is blog',
    perform: () => (window.location.pathname = 'blog'),
  },
  {
    id: 'snippet',
    name: 'Snippet',
    shortcut: ['s'],
    keywords: 'This is Snippet',
    perform: () => (window.location.pathname = 'snippet'),
  },
  {
    id: 'archive',
    name: 'Archive',
    shortcut: ['a'],
    keywords: 'This is Archive',
    perform: () => (window.location.pathname = 'archive'),
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'This is Contact',
    perform: () => (window.location.pathname = 'contact'),
  },
];

export default function KBarContext({ children }: { children: React.ReactNode }) {
  return <KBarProvider actions={actions}>{children}</KBarProvider>;
}
