import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Treasure Warp UI';
export const APP_DESCRIPTION = 'A DApp for Treasure Warp Route transfers';
export const APP_URL = 'hyperlane-warp-template.vercel.app';
export const BRAND_COLOR = Color.red;
export const BACKGROUND_COLOR = Color.black;
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
