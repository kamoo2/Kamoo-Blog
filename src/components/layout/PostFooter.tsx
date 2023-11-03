import Link from 'next/link';

import { Post } from '@/lib/types';

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
    <div className="relative mt-4 rounded-lg py-10">
      <div className="flex justify-between gap-4">
        {prevPost ? (
          <Link
            href={prevPost.slug}
            className="flex flex-col rounded-sm transition-transform duration-300 hover:-translate-y-1 hover:underline"
          >
            <span className="text-secondary mb-1 text-xs font-semibold">이전 포스트</span>
            <p className="text-secondary text-lg font-medium">{prevPost.title}</p>
          </Link>
        ) : (
          <div className="w-1/2">{''}</div>
        )}
        {nextPost && (
          <Link
            href={nextPost.slug}
            className="flex flex-col items-end transition-transform duration-300 hover:-translate-y-1 hover:underline"
          >
            <span className="text-secondary mb-1 text-xs font-bold">다음 포스트</span>
            <p className="text-secondary text-lg font-medium">{nextPost.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
