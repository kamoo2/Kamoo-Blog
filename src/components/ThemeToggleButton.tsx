'use client';

import { useEffect, useState } from 'react';
import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2';

import IconButton from '@/components/common/IconButton';
import useSwitchTheme from '@/hooks/useSwitchTheme';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useSwitchTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[36px] w-[36px]"></div>;
  return (
    <IconButton
      onClick={toggleTheme}
      Icon={theme === 'dark' ? HiMiniMoon : HiMiniSun}
      className="rounded-sm p-2 text-xl text-amber-300 transition-colors duration-300 hover:bg-neutral-150 dark:text-amber-200 dark:hover:bg-neutral-800"
    />
  );
}
