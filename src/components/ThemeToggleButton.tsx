'use client';

import { HiMiniSun, HiMoon } from 'react-icons/hi2';

import IconButton from '@/components/common/IconButton';
import useSwitchTheme from '@/components/useSwitchTheme';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useSwitchTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      Icon={theme === 'dark' ? HiMoon : HiMiniSun}
      className="rounded-sm p-2 text-xl text-amber-300 transition-colors duration-300 hover:bg-neutral-150 dark:text-amber-200 dark:hover:bg-neutral-800"
    />
  );
}
