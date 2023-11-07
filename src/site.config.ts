import { Nav } from '@/types/Nav';

type SiteConfigType = {
  url: string;
  title: string;
  copyright: string;
  google: string;
  nav: Nav[];
  link: {
    github: string;
    notion: string;
    email: string;
  };
};

const SiteConfig: SiteConfigType = {
  url: 'https://www.kamoony.com',
  title: 'Kamoony',
  copyright: `© ${new Date().getFullYear()} Kamoony blog by SeokHwanMoon. All rights reserved.`,
  google: '_rdNeAEdVwiFZJVhLeCqqV9SRacwSp2f_Q0uDS_8eBg',

  nav: [
    { name: 'Blog', path: '/blog' },
    { name: 'Archives', path: '/archives' },
    { name: 'Contact', path: '/contact' },
  ],

  link: {
    github: 'https://github.com/kamoo2',
    notion: 'https://kamoo2.notion.site/b03b2c0edb424bd580f937d294b29f07',
    email: 'mailto:tjrghks96@naver.com',
  },
};

export default SiteConfig;
