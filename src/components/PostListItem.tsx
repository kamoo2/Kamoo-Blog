import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';

import IconText from '@/components/common/IconText';
import { ReducedPost } from '@/lib/types';

export default function PostListItem({
  post: { title, thumbnail, description, createdAt, tags, slug },
}: {
  post: ReducedPost;
}) {
  const tag = tags[0];
  return (
    <Link
      href={slug}
      className="c mb-12 flex flex-col shadow-[5px_5px_rgba(71,_109,_84,_0.4),_10px_10px_rgba(71,_109,_84,_0.3),_15px_15px_rgba(71,_109,_84,_0.2),_20px_20px_rgba(71,_109,_84,_0.1),_25px_25px_rgba(40,_68,_46,_0.05)] hover:text-[#1E4927] dark:bg-neutral-800 dark:hover:text-green-500"
    >
      <Image
        className="mb-4 h-56 w-full"
        src={thumbnail ? thumbnail : '/images/default-thumbnail.png'}
        alt={title}
        width={300}
        height={250}
        priority
      />
      <div className="px-4 py-3">
        <p className="truncate text-xl font-medium">{title}</p>
        <div className="text-sub mt-1.5 flex items-center gap-2 text-sm font-thin">
          <span className="underline">{tag}</span>
          <IconText
            className="gap-1"
            Icon={AiOutlineCalendar}
            text={dayjs(createdAt).format('YY.MM.DD')}
          />
        </div>
        <p className="text-sub mt-2 line-clamp-3 font-light">{description}</p>
      </div>
    </Link>
  );
}
