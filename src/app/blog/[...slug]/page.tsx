import { notFound } from 'next/navigation';

import { parseToc } from '@/app/lib/mdx';
import { allBlogPosts } from '@/app/lib/post';
import { PostFooterProps } from '@/components/layout/PostFooter';
import PostLayout from '@/components/layout/PostLayout';

export default function PostPage({ params: { slug: slugs } }: { params: { slug: string[] } }) {
  const slug = `/blog/${slugs.join('/')}`;

  const post = allBlogPosts.find((post) => post.slug === slug);
  const postIndex = allBlogPosts.findIndex((post) => post.slug === slug);

  if (!post || postIndex === -1) {
    notFound();
  }

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
