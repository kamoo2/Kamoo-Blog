import Link from 'next/link';

import { Post } from '@/app/lib/types';

export type PostFooterProps = {
  prevPost: Post | null;
  nextPost: Post | null;
};

type Props = {
  prevPost: Post | null;
  nextPost: Post | null;
};

export default function PostFooter({ prevPost, nextPost }: Props) {
  // 1. Hero 부분 UI -> Design을 조금 더 생각해 보자
  return (
    <div className="relative mt-4 rounded-lg bg-neutral-50 py-10">
      <div className="flex justify-between gap-4">
        {prevPost ? (
          <Link
            href={prevPost.slug}
            className="flex flex-col rounded-sm transition-transform duration-300 hover:-translate-y-1 hover:underline"
          >
            <span className="mb-1 text-xs font-semibold text-green-700">이전 포스트</span>
            <p className="text-lg font-medium text-green-900">{prevPost.title}</p>
          </Link>
        ) : (
          <div className="w-1/2">{''}</div>
        )}
        {nextPost && (
          <Link
            href={nextPost.slug}
            className="flex flex-col items-end transition-transform duration-300 hover:-translate-y-1 hover:underline"
          >
            <span className="mb-1 text-xs font-bold text-green-700">다음 포스트</span>
            <p className="text-lg font-medium text-green-900">{nextPost.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
