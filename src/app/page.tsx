import Image from 'next/image';
import Hero from '@/components/Hero';
import FeaturedPost from '@/components/FeaturedPost';
export default function HomePage() {
  return (
    <section>
      <div className="mb-6 grid grid-rows-2 border-b-2 border-slate-300 lg:grid-cols-2 lg:grid-rows-none">
        <Hero />
        <div className="flex items-center justify-center border-t-2 border-dashed border-slate-300 py-8 lg:border-l-2 lg:border-t-0">
          Image
        </div>
      </div>
      <h1 className="mb-4 text-4xl font-bold">Featured Posts</h1>
      <FeaturedPost />
    </section>
  );
}
