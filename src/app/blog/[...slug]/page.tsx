import { notFound } from 'next/navigation';

import { PostFooterProps } from '@/components/layout/PostFooter';
import PostLayout from '@/components/layout/PostLayout';
import { allBlogPosts } from '@/lib/post';
import { ListOfHeading } from '@/lib/types';

export default function PostPage({ params: { slug: slugs } }: { params: { slug: string[] } }) {
  // 1. slug를 이용해서 해당 post data 찾기
  // 2. 찾은 post data의 next post prev post 찾기

  const slug = `/blog/${slugs.join('/')}`;

  const post = allBlogPosts.find((post) => post.slug === slug);
  const postIndex = allBlogPosts.findIndex((post) => post.slug === slug);

  if (!post || postIndex === -1) {
    notFound();
  }

  const headingList = post.body.raw
    .split('\n')
    .filter((line) => line.match(/(^#{2,3})\s/))
    .reduce<ListOfHeading>((ac, heading) => {
      const nac = [...ac];
      const removeMDX = heading.replace(/^#*\s/, '');

      const section = {
        flag: removeMDX
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣 -]/g, '')
          .replace(/\s/g, '-'),
        text: removeMDX,
      };

      const isSubTitle = heading.split('#').length - 1 === 3;

      if (ac.length && isSubTitle) {
        nac.push({ ...section, isSub: true });
      } else {
        nac.push({ ...section, isSub: false });
      }
      return nac;
    }, []);

  const postFooterProps: PostFooterProps = {
    prevPost: allBlogPosts.at(postIndex + 1) ?? null,
    nextPost: allBlogPosts.at(postIndex - 1) ?? null,
  };

  const props = { post, ...postFooterProps, headingList };

  return <PostLayout {...props} />;
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug.split('/').slice(2),
  }));
}
