'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function ThemeContainer({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      storageKey="theme"
      attribute="class"
      defaultTheme="light"
      themes={['light', 'dark']}
    >
      {children}
    </ThemeProvider>
  );
}
