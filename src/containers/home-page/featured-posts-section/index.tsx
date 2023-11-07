import Link from 'next/link';
import { FC } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import FeaturedPost from '@/components/FeaturedPost';
import { FeaturedPosts } from '@/containers/home-page/featured-posts-section/constants';

interface FeaturedPostsSectionProps {}

const FeaturedPostsSection: FC<FeaturedPostsSectionProps> = ({}) => {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-4xl">Featured Posts</h1>
      <div className="grid grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {FeaturedPosts.map((post) => (
          <FeaturedPost key={post.id} {...post} />
        ))}
      </div>
      <div className="text-end">
        <Link
          href="/blog"
          className="my-3 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-100 hover:text-gray-800 "
        >
          Show all posts
          <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
