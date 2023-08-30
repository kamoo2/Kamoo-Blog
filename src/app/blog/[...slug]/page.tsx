import { notFound } from 'next/navigation';

import { PostFooterProps } from '@/components/layout/PostFooter';
import PostLayout from '@/components/layout/PostLayout';
import { allBlogPosts } from '@/lib/post';

export default function PostPage({ params: { slug: slugs } }: { params: { slug: string[] } }) {
  // 1. slug를 이용해서 해당 post data 찾기
  // 2. 찾은 post data의 next post prev post 찾기

  const slug = `/blog/${slugs.join('/')}`;

  const post = allBlogPosts.find((post) => post.slug === slug);
  const postIndex = allBlogPosts.findIndex((post) => post.slug === slug);

  if (!post || postIndex === -1) {
    notFound();
  }

  const postFooterProps: PostFooterProps = {
    prevPost: allBlogPosts.at(postIndex + 1) ?? null,
    nextPost: allBlogPosts.at(postIndex - 1) ?? null,
  };

  const props = { post, ...postFooterProps };

  return <PostLayout {...props} />;
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug.split('/').slice(2),
  }));
}
