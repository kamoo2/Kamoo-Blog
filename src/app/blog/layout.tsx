import { ReactNode } from 'react';

import CategoryBox from '@/components/CategoryBox';
import { allBlogTagsWithCount } from '@/lib/post';

export default function BlogPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4 py-3">
      <CategoryBox className="hidden lg:block" tags={allBlogTagsWithCount} />
      {children}
    </div>
  );
}
