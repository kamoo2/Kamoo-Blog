'use client';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

import IconText from '@/components/common/IconText';
import { ListOfHeading } from '@/lib/types';
import useScroll from '@/lib/useScroll';

export default function HeadingToc({ headingList }: { headingList: ListOfHeading }) {
  const { currentHeading } = useScroll(headingList);

  const isSubActive = (flag: string) => {
    // parent가 있다는 것은 Sub 아이템이란 것이고 이때 만약 parent의 값이랑
    return currentHeading === flag;
  };

  const isMainActive = (flag: string) => {
    return (
      currentHeading === flag ||
      headingList.find((element) => element.flag === currentHeading)?.parent === flag
    );
  };

  return (
    <div className="ml-auto mt-12">
      <div className="sticky top-[120px] hidden w-72 overflow-hidden rounded-lg bg-neutral-100 shadow-[5px_5px_0px_0px_rgba(40,68,46,0.2)] lg:block">
        <h3 className="p-6 text-center font-bold">#Heading List</h3>
        <div className="flex flex-col text-neutral-700">
          {headingList.map((item) => {
            const { flag, text, isSub } = item;
            return (
              <Link key={flag} href={`#${flag}`} className={`flex items-center ${isSub && 'ml-8'}`}>
                {isSub ? (
                  <IconText
                    Icon={FaAngleRight}
                    text={text}
                    className={`mb-2.5 px-6 text-sm font-light ${
                      isSubActive(flag) && 'font-medium text-green-600'
                    }`}
                  />
                ) : (
                  <span
                    className={`my-1 line-clamp-2 w-full px-6 font-medium ${
                      isMainActive(flag) &&
                      'border-l-4 border-green-600 bg-neutral-150 py-3 text-neutral-900'
                    }`}
                  >
                    {text}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
