'use client';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import { ReducedPost } from '@/app/lib/types';
import IconButton from '@/components/common/IconButton';
import PostListItem from '@/components/PostListItem';

export default function PostList({ posts }: { posts: ReducedPost[] }) {
  const PAGE_LIMIT = 8;
  const LAST_PAGE = Math.ceil(posts.length / PAGE_LIMIT); // 전체 페이지
  const FIRST_PAGE = 1;

  const [page, setPage] = useState(1);
  const origPageArr = Array(LAST_PAGE)
    .fill(0)
    .map((_, index) => index + 1);

  useEffect(() => {
    setPage(1);
  }, [posts]);

  // 조금더 가독성이 높은 코드로 리팩토링 해야 할듯 😭
  const convertPageArr = () => {
    if (LAST_PAGE >= 6) {
      if (page >= 4) {
        if (page >= LAST_PAGE - 2) {
          // 마지막 페이지에서 3개인 경우
          return origPageArr.slice(LAST_PAGE - 5, LAST_PAGE + 1);
        } else {
          // 그 외 page -3 ~ page + 2
          return origPageArr.slice(page - 3, page + 2);
        }
      }
    }
    return origPageArr.slice(0, LAST_PAGE > 5 ? 5 : LAST_PAGE);
  };

  const handlePageUp = () => {
    setPage((prevPage) => (prevPage + 1 > LAST_PAGE ? LAST_PAGE : prevPage + 1));
  };

  const handlePageDown = () => {
    setPage((prevPage) => (prevPage - 1 < FIRST_PAGE ? FIRST_PAGE : prevPage - FIRST_PAGE));
  };

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
          {convertPageArr().map((item) => {
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
