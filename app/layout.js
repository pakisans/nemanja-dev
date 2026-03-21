import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({ children }) => children;

export default RootLayout;
