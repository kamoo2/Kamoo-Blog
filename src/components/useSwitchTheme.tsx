'use client';
import { useTheme } from 'next-themes';

export default function useSwitchTheme() {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';
  const setDarkTheme = () => setTheme('dark');
  const setLightTheme = () => setTheme('light');

  const toggleTheme = () => {
    if (isDarkTheme) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };
  return {
    theme,
    isDarkTheme,
    setDarkTheme,
    setLightTheme,
    toggleTheme,
  };
}
