import React from 'react';
import { ReducedPost } from '@/lib/types';
import Image from 'next/image';
import DefaultThumbnail from '../../../public/images/profile.png';
import dayjs from 'dayjs';
import IconText from '@/components/common/IconText';
import { AiOutlineCalendar } from 'react-icons/ai';
import Link from 'next/link';
export default function PostListItem({
  post: { title, description, createdAt, tags, readingMinutes, slug, wordCount },
}: {
  post: ReducedPost;
}) {
  return (
    <Link href={slug} className="mb-4 flex gap-4 border-2 border-gray-500 p-4">
      <Image className="h-40 w-40" src={DefaultThumbnail} alt={slug} />
      <div className="">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{description}</p>
        <IconText
          className="gap-1 text-base"
          Icon={AiOutlineCalendar}
          text={dayjs(createdAt).format('YY.MM.DD')}
        />
      </div>
    </Link>
  );
}
