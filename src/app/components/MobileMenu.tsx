'use client';
import React, { useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import IconButton from '@/components/common/IconButton';
import { fontCabinSketch } from '@/lib/fonts';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';

const SidebarOverlay = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? <div className="fixed inset-0 bg-gray-500 bg-opacity-25"></div> : null;
};

export default function MobileMenu() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    const body = document.querySelector('body');
    setIsOpen(!isOpen);
  };

  const closeSidebar = (): void => {
    setIsOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      closeSidebar();
    }
  };

  useEffect(() => {
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
      <Sidebar isOpen={isOpen} sidebarRef={sidebarRef} />
    </div>
  );
}
