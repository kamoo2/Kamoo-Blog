import React from 'react';
import IconText from '@/components/common/IconText';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function CategoryBox({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <div className={`flex h-screen w-80 flex-col border-4 border-gray-400 p-4 ${className}`}>
      <h2 className="mb-2 text-xl font-semibold text-neutral-470">Tags</h2>
      <div className="flex flex-col gap-1 px-6">
        {tags.map((tag) => (
          <IconText className="gap-1 text-xl" Icon={MdKeyboardArrowRight} text={tag} key={tag} />
        ))}
      </div>
    </div>
  );
}
