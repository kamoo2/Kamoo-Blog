import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';
import Profile from '../../public/images/profile.png';
export default function HomePage() {
  return (
    <section>
      <div className="mb-4 grid border-b-2 border-slate-300 lg:mb-6 lg:grid-cols-2">
        <Hero />
        <div className="hidden items-center justify-center border-t-2 border-dashed border-slate-300 py-8 lg:flex lg:border-l-2 lg:border-t-0">
          <Image src={Profile} alt="profile" />
        </div>
      </div>
      <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-4xl">Featured Posts</h1>
      <div className="flex flex-col gap-4 md:grid md:flex-none md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/photo-1602300991431-27a957a5bcf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGdyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        />
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGdyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        />
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/photo-1543675185-08d5b223274e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxncmVlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </section>
  );
}
