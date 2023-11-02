'use client';
import { usePathname } from 'next/navigation';

import { fontCabinSketch } from '@/lib/fonts';

export default function PrepareNotice() {
  const pathname = usePathname();
  return (
    <div className="rounded-lg border border-neutral-300 px-10 py-8">
      <h1 className={`mb-4 text-center text-6xl font-semibold ${fontCabinSketch.className}`}>
        SORRY
      </h1>
      <p className="mb-1 text-center text-xl font-medium">
        <span className={`${fontCabinSketch.className} mr-2 text-3xl text-green-600`}>
          {pathname.replace('/', '')} Page
        </span>
        는 개발 중 입니다
      </p>
      <p className="text-center">열심히 만들고 있어요 😆 조금만 기다려 주세요</p>
    </div>
  );
}
