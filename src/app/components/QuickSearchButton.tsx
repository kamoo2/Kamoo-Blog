import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { LuSearch } from 'react-icons/lu';
import IconButton from '@/components/common/IconButton';

export default function QuickSearchButton() {
  return (
    <div>
      <button
        className="hidden cursor-pointer items-center rounded-lg border border-neutral-400
           p-2 text-xs text-neutral-400 transition-all duration-300 hover:border-neutral-600 md:flex"
      >
        <AiOutlineSearch className="mr-2 text-lg md:mr-0" />
        <span className="mr-12 pl-2 md:inline">Quick Search...</span>
        <div className="ml-auto flex-none text-xs font-semibold">⌘ K</div>
      </button>
      <IconButton Icon={LuSearch} className="h-8 w-8 text-2xl text-neutral-600 md:hidden" />
    </div>
  );
}
