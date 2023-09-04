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
    <div className="relative mt-8 overflow-hidden rounded-lg border-t border-neutral-hr bg-neutral-50 py-20">
      <div className="flex justify-between gap-1.5 bg-amber-500">
        <div>{prevPost?.title}</div>
        <div>{nextPost?.title}</div>
      </div>
    </div>
  );
}
