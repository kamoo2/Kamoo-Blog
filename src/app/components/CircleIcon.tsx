import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

export default function CircleIcon({ children }: { children: ReactNode }) {
  return (
    <div className="cursor-pointer rounded-3xl border-2 border-neutral-300 p-2.5 text-sm text-black transition-colors duration-300 hover:border-slate-700 hover:bg-black hover:text-white lg:text-lg">
      {children}
    </div>
  );
}
