import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

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
    <html lang="en" className={sans.className}>
      <body>
        <div className="mx-auto flex h-full w-full max-w-3xl flex-col px-6 lg:max-w-6xl lg:px-8">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
