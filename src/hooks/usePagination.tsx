'use client';

import { useState } from 'react';

export default function usePagination(firstPage: number, lastPage: number) {
  const [page, setPage] = useState(1);

  const pageList = Array.from({ length: lastPage }, (_, i) => i + 1);

  const handlePageUp = () => {
    setPage((prev) => (prev + 1 > lastPage ? lastPage : prev + 1));
  };
  const handlePageDown = () => {
    setPage((prev) => (prev - 1 < firstPage ? firstPage : prev - 1));
  };

  const compressPageList = (pList: number[]): number[] => {
    if (lastPage >= 6) {
      if (page >= 4) {
        if (page >= lastPage - 2) {
          return pList.slice(lastPage - 5, lastPage + 1);
        } else {
          return pList.slice(page - 3, page + 2);
        }
      }
    }
    return pList.slice(0, lastPage > 5 ? 5 : lastPage);
  };

  return { page, setPage, handlePageUp, handlePageDown, pageList, compressPageList };
}
