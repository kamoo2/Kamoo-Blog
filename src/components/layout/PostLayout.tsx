import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

import { ListOfHeading, Post } from '@/app/lib/types';
import IconText from '@/components/common/IconText';
import Title from '@/components/common/Title';
import Giscus from '@/components/Giscus';
import HeadingToc from '@/components/HeadingToc';
import PostFooter, { PostFooterProps } from '@/components/layout/PostFooter';

export type PostLayoutProps = PostFooterProps & {
  post: Post;
  headingList: ListOfHeading;
};

export default function PostLayout({ post, nextPost, prevPost, headingList }: PostLayoutProps) {
  const { title, description, createdAt, thumbnail, readingMinutes, slug, tags, body } = post;
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="">
      <div className="relative mt-9 border-b border-neutral-hr pb-8 lg:flex lg:gap-x-24">
        <article className="max-w-none lg:w-full lg:max-w-4xl">
          <Image
            className="h-[440px] w-full rounded-2xl border-2 object-cover"
            src={thumbnail ?? '/images/default-thumbnail.png'}
            alt={slug}
            width={300}
            height={300}
            priority
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
          <div className="mb-20 rounded-xl bg-neutral-200 px-8 py-4 font-semibold leading-8 text-neutral-950">
            {description}
          </div>
          <div className="dark:prose-dark prose max-w-none lg:w-full lg:max-w-4xl">
            <MDXContent />
          </div>

          <div className="mt-16 flex gap-5">
            {tags.map((tag) => {
              return (
                <Link
                  className="overflow-hidden rounded-md font-semibold text-green-600"
                  key={tag}
                  href={`/archives?key=${tag}`}
                >
                  <div className="bg-slash-pattern py-1.5"></div>
                  <div className="bg-neutral-100 px-1.5 py-1 text-sm">{tag}</div>
                </Link>
              );
            })}
          </div>
        </article>
        <HeadingToc headingList={headingList} />
      </div>
      {/*  Post Footer */}
      <PostFooter prevPost={prevPost} nextPost={nextPost} />
      <Giscus />
    </section>
  );
}
