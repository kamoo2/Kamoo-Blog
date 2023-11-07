import Image from 'next/image';
import { FC } from 'react';

import Hero from '@/components/Hero';
import Profile from '@/images/profile.png';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="border-primary mb-4 grid border-b-2 md:mb-5 lg:mb-6 lg:grid-cols-2">
      <Hero />
      <div className="border-primary hidden items-center justify-center border-t-2 border-dashed py-8 lg:flex lg:border-l-2 lg:border-t-0">
        <Image src={Profile} alt="profile" priority />
      </div>
    </section>
  );
};

export default HeroSection;
