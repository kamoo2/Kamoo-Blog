'use client';
import { useKBar } from 'kbar';
import { AiOutlineSearch } from 'react-icons/ai';

export default function QuickSearchButton() {
  const { query } = useKBar();
  return (
    <div>
      <button
        onClick={() => query.toggle()}
        className="hidden cursor-pointer items-center rounded-lg border border-neutral-400 p-2 text-xs
           text-neutral-400 transition-all duration-300 hover:border-neutral-600 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 md:flex"
      >
        <AiOutlineSearch className="mr-2 text-lg md:mr-0" />
        <span className="mr-12 pl-2 md:inline">Quick Search...</span>
        <div className="ml-auto flex-none text-xs font-semibold">⌘ K</div>
      </button>
    </div>
  );
}
