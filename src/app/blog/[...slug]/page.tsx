import { notFound } from 'next/navigation';

import { PostFooterProps } from '@/components/layout/PostFooter';
import PostLayout from '@/components/layout/PostLayout';
import { parseToc } from '@/lib/mdx';
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

  // nextPost가 at으로 하면 null인 경우가 없다. 1개의 포스트만 존재할 경우 계속 자기 자신이 나온다. 문제가 될듯
  // allBlogPosts.at 이 아닌 다른 방법으로 찾아야 할 거 같다.
  const postFooterProps: PostFooterProps = {
    prevPost: allBlogPosts.at(postIndex + 1) ?? null,
    nextPost: postIndex === 0 ? null : allBlogPosts.at(postIndex - 1) ?? null,
  };

  const props = { post, ...postFooterProps, headingList: parseToc(post.body.raw) };

  return <PostLayout {...props} />;
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug.split('/').slice(2),
  }));
}
