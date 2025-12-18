import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'TagVerse.io - Command the Future with Poise & Precision',
  description: 'A strategic instrument of brand expression. We architect digital ecosystems where intelligence meets elegance.',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${playfair.variable} ${outfit.variable} flex flex-col min-h-screen`}>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
