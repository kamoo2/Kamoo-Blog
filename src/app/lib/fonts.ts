import {
  Cabin_Sketch as FontCabinSketch,
  Inter as FontSans,
  JetBrains_Mono as FontMono,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const fontCabinSketch = FontCabinSketch({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-cabin-sketch',
  display: 'swap',
});
