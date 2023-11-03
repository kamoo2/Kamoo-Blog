'use client';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

import IconText from '@/components/common/IconText';
import useScroll from '@/hooks/useScroll';
import { ListOfHeading } from '@/lib/types';

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
    <div className="ml-auto lg:mt-12 ">
      <div className="bg-secondary sticky top-[120px] hidden w-72 overflow-hidden rounded-lg py-6 shadow-[5px_5px_0px_0px_rgba(40,68,46,0.2)] lg:block">
        <h3 id="heading-list" className="pb-6 text-center font-bold">
          Heading List
        </h3>
        <div className="flex flex-col">
          {headingList.map((item) => {
            const { flag, text, isSub } = item;
            return (
              <Link
                key={flag}
                href={`#${flag}`}
                className={`flex items-center ${isSub && 'ml-8'}`}
                replace
              >
                {isSub ? (
                  <IconText
                    Icon={FaAngleRight}
                    text={text}
                    className={`text text-secondary mb-2.5 px-6 text-sm font-light transition-colors duration-300 hover:text-green-600 dark:hover:text-green-400 ${
                      isSubActive(flag) && 'font-medium text-green-600 dark:text-green-400'
                    }`}
                  />
                ) : (
                  <span
                    className={`text-primary my-1 line-clamp-2 w-full px-6 font-medium transition-colors duration-300 hover:text-green-600 dark:hover:text-green-400 ${
                      isMainActive(flag) &&
                      'border-l-4 border-green-600 bg-neutral-150 py-3 text-neutral-900 dark:bg-neutral-700'
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
