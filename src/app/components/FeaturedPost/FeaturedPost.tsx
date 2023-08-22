import React from 'react';
import Image from 'next/image';

type Props = {
  imagePath: string;
  alt: string;
  title: string;
  description: string;
  createdAt: string;
};
export default function FeaturedPost({ imagePath, alt, title, description, createdAt }: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <Image
        className="h-72 w-full object-cover"
        src={imagePath}
        alt={alt}
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 px-6 py-3 lg:px-4">
        <h2 className="text-xl font-bold lg:text-base">{title}</h2>
        <span className="self-end text-sm text-gray-500">{createdAt}</span>
      </div>
    </div>
  );
}
