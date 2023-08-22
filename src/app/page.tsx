import Hero from '@/components/Hero/Hero';
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';
export default function HomePage() {
  return (
    <section>
      <div className="mb-4 grid grid-rows-2 border-b-2 border-slate-300 lg:mb-6 lg:grid-cols-2 lg:grid-rows-none">
        <Hero />
        <div className="flex items-center justify-center border-t-2 border-dashed border-slate-300 py-8 lg:border-l-2 lg:border-t-0">
          Image
        </div>
      </div>
      <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">Featured Posts</h1>
      <div className="flex flex-col gap-4 md:grid md:flex-none md:grid-cols-2 md:grid-rows-2 lg:flex lg:flex-row">
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/file-1682622471311-bc563ce601cbimage?dpr=2&auto=format&fit=crop&w=416&q=60"
        />
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/file-1682622471311-bc563ce601cbimage?dpr=2&auto=format&fit=crop&w=416&q=60"
        />
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/file-1682622471311-bc563ce601cbimage?dpr=2&auto=format&fit=crop&w=416&q=60"
        />
        <FeaturedPost
          title="CSS-in-JS 라이브러리들에 대한 고찰"
          alt="CSS-in-JS 라이브러리들에 대한 고찰"
          description="ss"
          createdAt="2023.08.21"
          imagePath="https://images.unsplash.com/file-1682622471311-bc563ce601cbimage?dpr=2&auto=format&fit=crop&w=416&q=60"
        />
      </div>
    </section>
  );
}
