import Link from 'next/link';
import React from 'react';
import { BiSolidFoodMenu } from 'react-icons/bi';

import IconText from '@/components/common/IconText';
import { TagWithCount } from '@/lib/types';

export default function CategoryBox({
  tags,
  className,
}: {
  tags: TagWithCount[];
  className?: string;
}) {
  return (
    <div
      className={`flex w-[540px] flex-col rounded-lg bg-green-800 p-4 text-neutral-50 ${className}`}
    >
      <IconText className="gap-2 text-xl font-semibold" Icon={BiSolidFoodMenu} text="Tags" />
      <ul className="mt-2 flex flex-col gap-1.5 px-8">
        {tags.map((tag) => (
          <li className="text-base" key={tag.name}>
            <Link href={`?${tag.name}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
