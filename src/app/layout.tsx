import './globals.css';
import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import type { Metadata } from 'next';

import { fontSans } from '@/app/lib/fonts';
import KbarContainer from '@/components/KbarContainer';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ThemeContainer from '@/components/ThemeContainer';

dayjs.locale('ko');
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
      <body className="no-scrollbar">
        <ThemeContainer>
          <KbarContainer>
            <div className="bg-primary mx-auto flex min-h-screen flex-col">
              <Header />
              <main className="mx-auto w-full max-w-3xl grow px-7 pb-9 md:max-w-6xl lg:px-0">
                {children}
              </main>
              <Footer />
            </div>
          </KbarContainer>
        </ThemeContainer>
      </body>
    </html>
  );
}
