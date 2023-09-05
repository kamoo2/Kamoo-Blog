import Image from 'next/image';
import Link from 'next/link';

import CalendarIcon from '@/components/icons/CalendarIcon';

type Props = {
  imagePath: string;
  alt: string;
  title: string;
  linkPath: string;
  createdAt: string;
};
export default function PostCard({ imagePath, alt, title, linkPath, createdAt }: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <Link href={`/${linkPath}`}>
        <Image
          className="h-56 w-full object-cover"
          src={imagePath}
          alt={alt}
          width={300}
          height={300}
        />
        <div className="flex flex-col gap-2 px-6 py-3 lg:px-4">
          <h2 className="text-xl font-bold lg:text-base">{title}</h2>
          <div className="flex items-center gap-0.5 self-end text-gray-500">
            <CalendarIcon />
            <span className="text-base md:text-sm">{createdAt}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
