import React from 'react';
import Link from 'next/link';
import CircleIcon from '@/components/CircleIcon';
import { SiGithub, SiGmail, SiNotion } from 'react-icons/si';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-36">
      <div>
        <div className="flex w-full flex-col items-center justify-center lg:items-start">
          <h1 className="mb-1.5 text-3xl font-light md:text-4xl">
            Hello!
            <span className="font-semibold">{"I'm "}</span>
            <span className="bg-neutral-300 font-semibold">Kamoo</span>
            <span className="font-semibold">, </span>A
          </h1>
          <h1 className="lg mb-1.5 text-center text-3xl font-semibold md:text-4xl lg:text-start">
            JR.FRONTEND DEVELOPER,
          </h1>
          <h1 className="text-3xl font-light md:text-4xl">LOOKING FOR A JOB.</h1>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-3 lg:mt-8 lg:justify-start">
          <Link
            href="/contact"
            className="rounded-2xl bg-black px-8 py-2.5 text-xs text-slate-50 lg:text-sm"
          >
            CONTACT ME
          </Link>
          <CircleIcon>
            <SiGithub />
          </CircleIcon>
          <CircleIcon>
            <SiGmail />
          </CircleIcon>
          <CircleIcon>
            <SiNotion />
          </CircleIcon>
        </div>
      </div>
    </div>
  );
}
