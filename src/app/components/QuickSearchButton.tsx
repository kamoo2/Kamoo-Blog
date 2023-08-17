import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function QuickSearchButton() {
  return (
    <button
      className="flex cursor-pointer items-center rounded-lg border
           border-neutral-300 p-2 text-xs text-slate-400 transition-all duration-300 hover:border-slate-400"
    >
      <AiOutlineSearch className="mr-2 text-lg md:mr-0" />
      <span className="mr-12 hidden pl-2 md:inline">Quick Search...</span>
      <div className="ml-auto flex-none text-xs font-semibold">⌘ K</div>
    </button>
  );
}
