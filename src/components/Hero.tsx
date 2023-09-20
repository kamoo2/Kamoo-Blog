import Link from 'next/link';
import { SiGithub, SiGmail, SiNotion } from 'react-icons/si';

import CircleIcon from '@/components/common/CircleIcon';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-36">
      <div>
        <div className="flex w-full flex-col items-center justify-center lg:items-start">
          <h1 className="mb-1.5 text-3xl font-light md:text-4xl">
            Hi!
            <span className="font-semibold">{" I'm "}</span>
            <span className="bg-neutral-300 font-semibold dark:bg-neutral-700">Kamoo</span>
          </h1>
          <h1 className="lg mb-1.5 text-center text-3xl font-semibold md:text-4xl lg:text-start">
            JR.FRONTEND DEVELOPER,
          </h1>
          <h1 className="text-3xl font-light md:text-4xl">
            LOOKING FOR A <span className="font-semibold">JOB</span>
          </h1>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-3 lg:mt-8 lg:justify-start">
          <Link
            href="/contact"
            className="bg-button rounded-2xl px-8 py-2.5 text-xs text-slate-50 lg:text-sm"
          >
            CONTACT ME
          </Link>
          <Link
            href="https://www.notion.so/kamoo2/b03b2c0edb424bd580f937d294b29f07?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CircleIcon className="border border-neutral-900 p-2.5 text-sm text-neutral-900 hover:translate-y-0.5 hover:scale-105 hover:bg-neutral-900 hover:text-neutral-50 dark:border-neutral-50 dark:text-neutral-50 lg:text-lg">
              <SiNotion />
            </CircleIcon>
          </Link>
          <Link href="https://github.com/kamoo2" target="_blank" rel="noopener noreferrer">
            <CircleIcon className="border border-neutral-900 p-2.5 text-sm text-neutral-900 hover:translate-y-0.5 hover:scale-105 hover:bg-neutral-900 hover:text-neutral-50 dark:border-neutral-50 dark:text-neutral-50 lg:text-lg">
              <SiGithub />
            </CircleIcon>
          </Link>
          <Link href="" target="_blank" rel="noopener noreferrer">
            <CircleIcon className="border border-neutral-900 p-2.5 text-sm text-neutral-900 hover:translate-y-0.5 hover:scale-105 hover:bg-neutral-900 hover:text-neutral-50 dark:border-neutral-50 dark:text-neutral-50 lg:text-lg">
              <SiGmail />
            </CircleIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
