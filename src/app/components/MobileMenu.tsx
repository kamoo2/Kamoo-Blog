'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconButton from '@/components/common/IconButton';
import Sidebar from '@/components/Sidebar';
import { Menu, TagWithCount } from '@/lib/types';

type MobileMenuProps = {
  menus: Menu[];
  blogTagList: TagWithCount[];
  snippetTagList: TagWithCount[];
};

const SidebarOverlay = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? <div className="fixed inset-0 bg-gray-500 bg-opacity-25"></div> : null;
};

export default function MobileMenu({ menus, blogTagList, snippetTagList }: MobileMenuProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const keyName = searchParams.get('key');
  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        closeSidebar();
      }
    };
    const handleClickOutside = (event: MouseEvent): void => {
      if (sidebarRef.current && !sidebarRef.current?.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);
  return (
    <div className="lg:hidden">
      <IconButton className="text-2xl" Icon={RxHamburgerMenu} onClick={toggleSidebar} />
      {isOpen && <SidebarOverlay isOpen={isOpen} />}
      <Sidebar
        menus={menus}
        isOpen={isOpen}
        sidebarRef={sidebarRef}
        pathname={pathname}
        keyName={keyName}
        tagList={pathname === '/blog' ? blogTagList : snippetTagList}
      />
    </div>
  );
}
