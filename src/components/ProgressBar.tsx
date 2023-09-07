'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
  const [width, setWidth] = useState(0);
  const pathname = usePathname();

  const scrollHandler = () => {
    const htmlElement = document.documentElement;
    const currentY = htmlElement.scrollTop || document.body.scrollTop;
    const totalY = htmlElement.scrollHeight || document.body.scrollHeight;
    const percent = (currentY / (totalY - htmlElement.clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div
      className={`h-[8px] bg-green-300 bg-gradient-green ${
        pathname.includes('/blog/') || pathname.includes('/snippet/') ? 'block' : 'hidden'
      }`}
      style={{ width: `${width}%` }}
    ></div>
  );
}
