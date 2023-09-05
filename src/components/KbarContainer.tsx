'use client';
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from 'kbar';
import { ReactNode } from 'react';

import { fontMono } from '@/app/lib/fonts';
import useKbarAction from '@/app/lib/useKbarAction';

export default function KbarContainer({ children }: { children: ReactNode }) {
  const actions = useKbarAction();

  return (
    <KBarProvider actions={actions} options={{ enableHistory: true }}>
      {children}
      <KBarPortal>
        <KBarPositioner className="z-50">
          <div className="pointer-events-none fixed inset-0 h-full w-full bg-white/50 backdrop-blur" />
          <KBarAnimator className="w-full max-w-[600px] overflow-hidden rounded-lg bg-neutral-50 p-2 shadow-xl">
            <KBarSearch
              className={`box-border ${fontMono.className} w-full rounded-md border-none bg-neutral-50 px-3 py-4 outline-none placeholder:text-neutral-500`}
            />
            <div className="pb-4">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="mx-3 py-2 text-xs">{item}</div>
        ) : (
          <div
            className={`mx-3 flex cursor-pointer items-center gap-4 rounded-lg p-3 text-sm text-neutral-900 hover:bg-green-100 ${
              active && 'bg-green-100'
            } ${fontMono.className}`}
          >
            {item.icon && item.icon}
            <div className="flex flex-col font-medium">
              <div>{item.name}</div>
              {item.subtitle && (
                <span className="text-secondary text-xs font-normal">{item.subtitle}</span>
              )}
            </div>
            <div className="ml-auto flex gap-2">
              {item.shortcut?.map((keyword) => (
                <span
                  className={`rounded-md bg-green-300 px-2 py-1 text-xs font-bold text-neutral-900`}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )
      }
    />
  );
}
