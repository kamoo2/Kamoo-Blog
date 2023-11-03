'use client';
import { useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import IconButton from '@/components/common/IconButton';
import PostListItem from '@/components/PostListItem';
import usePagination from '@/hooks/usePagination';
import { ReducedPost } from '@/lib/types';

export default function PostList({ posts }: { posts: ReducedPost[] }) {
  const PAGE_LIMIT = 8;
  const LAST_PAGE = Math.ceil(posts.length / PAGE_LIMIT); // 전체 페이지
  const FIRST_PAGE = 1;
  const { page, setPage, handlePageUp, handlePageDown, pageList, compressPageList } = usePagination(
    FIRST_PAGE,
    LAST_PAGE
  );

  const compressdPageList = compressPageList(pageList);
  useEffect(() => {
    setPage(1);
  }, [posts, setPage]);

  return (
    <section className="grow">
      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
        {posts.slice((page - 1) * PAGE_LIMIT, (page - 1) * PAGE_LIMIT + PAGE_LIMIT).map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
      <div className="flex justify-between">
        <IconButton
          className="px-1 py-0.5"
          onClick={handlePageDown}
          Icon={FaAngleLeft}
          disabled={page === FIRST_PAGE}
        />
        <div className="flex gap-3">
          {compressdPageList.map((item) => {
            return (
              <button
                className={`${
                  item === page
                    ? 'rounded-md bg-neutral-300 font-semibold dark:bg-neutral-700'
                    : 'rounded-md transition-all duration-300 hover:-translate-y-[1px] hover:bg-neutral-300 dark:hover:bg-neutral-700'
                } px-2.5 py-0.5 text-base`}
                onClick={() => setPage(item)}
                key={item}
              >
                {item}
              </button>
            );
          })}
        </div>
        <IconButton
          className="px-1 py-0.5"
          onClick={handlePageUp}
          Icon={FaAngleRight}
          disabled={page === LAST_PAGE}
        />
      </div>
    </section>
  );
}
