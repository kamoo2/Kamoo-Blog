import dayjs from 'dayjs';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

import IconText from '@/components/common/IconText';
import Title from '@/components/common/Title';
import HeadingToc from '@/components/HeadingToc';
import { PostFooterProps } from '@/components/layout/PostFooter';
import { ListOfHeading, Post } from '@/lib/types';

export type PostLayoutProps = PostFooterProps & {
  post: Post;
  headingList: ListOfHeading;
};

export default function PostLayout({ post, nextPost, prevPost, headingList }: PostLayoutProps) {
  const { title, description, createdAt, thumbnail, readingMinutes, slug, tags, body } = post;
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="">
      <div className="relative mt-9 lg:flex lg:gap-x-24">
        <article className="max-w-none lg:w-full lg:max-w-4xl">
          <Image
            className="h-[440px] w-full rounded-2xl border-2 object-cover"
            src={thumbnail ?? '/images/default-thumbnail.png'}
            alt={slug}
            width={300}
            height={300}
          />
          <Title>{`${title}`}</Title>
          <div className="mb-6 flex justify-between text-sm font-light text-neutral-500">
            <IconText
              className="gap-1 text-xs"
              Icon={AiOutlineClockCircle}
              text={`${readingMinutes}분`}
            />
            <IconText
              className="gap-1"
              Icon={AiOutlineCalendar}
              text={dayjs(createdAt).format('YYYY.MM.DD')}
            />
          </div>
          <div className="mb-12 rounded-xl bg-neutral-200 px-8 py-4 font-semibold leading-8 text-neutral-950">
            {description}
          </div>
          <div className="dark:prose-dark prose max-w-none lg:w-full lg:max-w-4xl">
            <MDXContent />
          </div>
        </article>
        <HeadingToc headingList={headingList} />
      </div>
      {/*  Post Footer */}
    </section>
  );
}
