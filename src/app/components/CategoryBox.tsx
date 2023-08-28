import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
    <div className={`flex h-screen w-80 flex-col border-4 border-gray-400 p-4 ${className}`}>
      <h2 className="mb-2 text-xl font-semibold text-neutral-470">Tags</h2>
      <div className="flex flex-col gap-1 px-6">
        {tags.map((tag) => (
          <Link href={`?key=${tag.name}`} key={tag.name}>
            <IconText
              className="gap-1 text-xl"
              Icon={MdKeyboardArrowRight}
              text={`${tag.name} (${tag.count})`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
