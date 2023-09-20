import { useEffect, useState } from 'react';

import { ListOfHeading } from '@/app/lib/types';

type Heading = {
  id: string;
  minTop: number;
  maxTop?: number;
};

export default function useScroll(headingList: ListOfHeading) {
  const [currentHeading, setCurrentHeading] = useState<string | undefined>();

  // headingList가 바뀌면 즉 Post가 바뀌면 재 실행
  useEffect(() => {
    if (headingList.length === 0) return;

    let headings: Heading[];
    const style = window.getComputedStyle(document.documentElement); // 내가 사용하고 있는 모든 CSS style 선언자
    const scrollMt =
      parseFloat(style.getPropertyValue('--scroll-mt').match(/[\d.]+/)?.[0] ?? '0') *
      parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? '16');

    const onResize = () => {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>(
          '.prose h2:not(#heading-list),.prose h3:not(#heading-list)',
        ),
      ).map((element) => ({ id: element.id, minTop: element.offsetTop }));

      for (let i = 0; i < headings.length; i++) {
        if (i < headings.length - 1) {
          headings[i].maxTop = headings[i + 1].minTop - 1;
        }
      }
    };

    const onScroll = () => {
      if (!headings) return;
      const top = (window.scrollY || window.pageYOffset) + scrollMt + 1;

      let current: typeof currentHeading = undefined;
      for (let i = 0; i < headings.length; i++) {
        if (headings[i].minTop <= top && top < (headings[i].maxTop ?? 10000)) {
          // top 값이 해당 값 사이에 있는 경우에만
          current = headings[i].id;
        }
      }
      setCurrentHeading(current);
    };

    onResize();
    onScroll();

    window.addEventListener('scroll', onScroll, { capture: true, passive: true });
    window.addEventListener('resize', onResize, { capture: true, passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [headingList]);

  return { headingList, currentHeading };
}
