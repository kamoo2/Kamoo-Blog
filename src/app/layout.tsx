import './globals.css';

import type { Metadata } from 'next';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { fontSans } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    default: '카무의 블로그',
    template: '카무의 블로그 | %s',
  },
  description: '프론트엔드 개발자 카무의 개발 블로그',
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.className}>
      <body className="bg-primary">
        <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-6 md:max-w-7xl">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
