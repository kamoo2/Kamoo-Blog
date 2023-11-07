import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostFooterProps } from '@/components/layout/PostFooter';
import PostLayout from '@/components/layout/PostLayout';
import { parseToc } from '@/lib/mdx';
import { blogService } from '@/lib/post';
import { Post } from '@/types/Post';

type FindPostReturnType = {
  post: Post | undefined;
  index: number;
};
const findPostBySlug = (slug: string): FindPostReturnType => {
  const post = blogService.postList.find((post) => post.slug === slug);
  const index = blogService.postList.findIndex((post) => post.slug === slug);

  return { post, index };
};

export default function PostPage({ params: { slug: slugs } }: { params: { slug: string[] } }) {
  const slug = `/blog/${slugs.join('/')}`;
  const { post, index: postIndex } = findPostBySlug(slug);

  if (!post || postIndex === -1) {
    notFound();
  }

  const postFooterProps: PostFooterProps = {
    prevPost: blogService.postList.at(postIndex + 1) ?? null,
    nextPost: postIndex === 0 ? null : blogService.postList.at(postIndex - 1) ?? null,
  };

  const props = { post, ...postFooterProps, headingList: parseToc(post.body.raw) };
  return <PostLayout {...props} />;
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const slug = `/blog/${params.slug.join('/')}`;

  const { post } = findPostBySlug(slug);
  return {
    title: post?.title,
    description: post?.description,
  };
};

export function generateStaticParams() {
  return blogService.postList.map((post) => ({
    slug: post.slug.split('/').slice(2),
  }));
}
