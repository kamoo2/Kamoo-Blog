import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';

import { ReducedPost } from '@/app/lib/types';
import IconText from '@/components/common/IconText';
import DefaultImage from '@/images/default-thumbnail.png';

export default function PostListItem({
  post: { title, description, createdAt, tags, slug },
}: {
  post: ReducedPost;
}) {
  const tag = tags[0];
  return (
    <Link
      href={slug}
      className="mb-12 flex flex-col shadow-[5px_5px_rgba(40,_68,_46,_0.4),_10px_10px_rgba(40,_68,_46,_0.3),_15px_15px_rgba(40,_68,_46,_0.2),_20px_20px_rgba(40,_68,_46,_0.1),_25px_25px_rgba(40,_68,_46,_0.05)] hover:text-[#1E4927]"
    >
      <Image className="mb-4 w-full" src={DefaultImage} alt={title} priority />
      <div className="px-4 py-3">
        <h1 className="truncate text-xl font-semibold">{title}</h1>
        <div className="mt-1.5 flex items-center gap-2 text-sm font-thin text-neutral-600">
          <span className="underline">{tag}</span>
          <IconText
            className="gap-1"
            Icon={AiOutlineCalendar}
            text={dayjs(createdAt).format('YY.MM.DD')}
          />
        </div>
        <p className="mt-2 line-clamp-3 font-light text-neutral-600">{description}</p>
      </div>
    </Link>
  );
}
