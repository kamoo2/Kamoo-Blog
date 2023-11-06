import Link from 'next/link';
import { SiGithub, SiGmail } from 'react-icons/si';

import SiteConfig from '@/site.config';

export default function Footer() {
  return (
    <footer className="border-primary border-t px-2 py-8">
      <div className="mx-auto w-full max-w-3xl md:max-w-6xl">
        <div className="text-primary flex justify-end gap-2 text-sm">
          <Link href={SiteConfig.link.github} target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </Link>
          <Link href={SiteConfig.link.email} target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </Link>
        </div>
        <p className="text-primary mt-1 text-end text-xs text-slate-800">{SiteConfig.copyright}</p>
      </div>
    </footer>
  );
}
