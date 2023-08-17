import Image from 'next/image';
import Hero from '@/components/Hero';
export default function HomePage() {
  return (
    <section>
      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
        <Hero />
        <div className="flex items-center justify-center border-t-2 border-dashed border-slate-300 py-8 lg:border-l-2 lg:border-t-0">
          Image
        </div>
      </div>
    </section>
  );
}
