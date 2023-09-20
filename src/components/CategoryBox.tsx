import Link from 'next/link';
import React from 'react';
import { FaRegFolder } from 'react-icons/fa';
import { FaRegFolderOpen } from 'react-icons/fa6';

import { TagWithCount } from '@/app/lib/types';
import IconText from '@/components/common/IconText';
import CategoryIcon from '@/components/icons/CategoryIcon';

export default function CategoryBox({
  tags,
  className,
  selectedKey,
}: {
  tags: TagWithCount[];
  className?: string;
  selectedKey: string | undefined | string[];
}) {
  const selectedTag = selectedKey === undefined ? 'all' : selectedKey;
  return (
    <div>
      <div className={`flex max-h-fit w-72 flex-col rounded-lg ${className}`}>
        <IconText className="gap-2 text-2xl font-bold" Icon={CategoryIcon} text="카테고리" />
        <ul className="mt-5 flex flex-col gap-4">
          {tags.map((tag) => (
            <li
              className={`${
                selectedTag === tag.name.toLowerCase()
                  ? 'text-base text-amber-500 dark:text-amber-200'
                  : 'text-base'
              }`}
              key={tag.name}
            >
              <Link href={`?key=${tag.name.toLowerCase()}`}>
                <IconText
                  Icon={selectedTag === tag.name.toLowerCase() ? FaRegFolderOpen : FaRegFolder}
                  text={tag.name}
                  subText={`(${tag.count})`}
                  className="gap-2 text-lg"
                  textStyle=""
                  subTextStyle="text-sm"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
