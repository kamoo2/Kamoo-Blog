import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import FeaturedPost from '@/components/FeaturedPost';
import Hero from '@/components/Hero';
import Profile from '@/images/profile.png';
export default function HomePage() {
  return (
    <>
      <section>
        <div className="border-primary mb-4 grid border-b-2 lg:mb-6 lg:grid-cols-2">
          <Hero />
          <div className="border-primary hidden items-center justify-center border-t-2 border-dashed py-8 lg:flex lg:border-l-2 lg:border-t-0">
            <Image src={Profile} alt="profile" priority />
          </div>
        </div>
      </section>
      <section>
        <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-4xl">Featured Posts</h1>
        <div className="grid grid-rows-4 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
          <FeaturedPost
            title="CSS-in-JS 라이브러리들에 대한 고찰"
            alt="CSS-in-JS 라이브러리들에 대한 고찰"
            linkPath="blog"
            createdAt="2023.08.21"
            imagePath="https://images.unsplash.com/photo-1602300991431-27a957a5bcf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
          <FeaturedPost
            title="CSS-in-JS 라이브러리들에 대한 고찰"
            alt="CSS-in-JS 라이브러리들에 대한 고찰"
            linkPath="blog"
            createdAt="2023.08.21"
            imagePath="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGdyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          />
          <FeaturedPost
            title="CSS-in-JS 라이브러리들에 대한 고찰"
            alt="CSS-in-JS 라이브러리들에 대한 고찰"
            linkPath="blog"
            createdAt="2023.08.21"
            imagePath="https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
          <FeaturedPost
            title="CSS-in-JS 라이브러리들에 대한 고찰"
            alt="CSS-in-JS 라이브러리들에 대한 고찰"
            linkPath="blog"
            createdAt="2023.08.21"
            imagePath="https://images.unsplash.com/photo-1543675185-08d5b223274e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxncmVlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="text-end">
          <Link
            href="/blog"
            className="my-3 inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-100 hover:text-gray-800 "
          >
            Show all posts
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
