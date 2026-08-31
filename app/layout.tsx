import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { QuoteModalProvider } from "@/providers/QuoteModalProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://riseup.solutions'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RiseUp Solutions | High Performance Digital Engineering',
    template: '%s | RiseUp Solutions',
  },
  description:
    'ERP, Mobile, and Web systems built for scale. We deliver technical excellence designed to drive your business forward with uncompromising reliability and agility.',
  keywords: [
    'software engineering',
    'enterprise ERP development',
    'mobile application development',
    'web platform architecture',
    'custom software solutions',
    'cloud infrastructure',
    'distributed systems',
    'React',
    'Next.js',
    'Flutter',
    'Go',
    'Rust',
  ],
  authors: [{ name: 'RiseUp Solutions' }],
  creator: 'RiseUp Solutions',
  publisher: 'RiseUp Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RiseUp Solutions | High Performance Digital Engineering',
    description:
      'ERP, Mobile, and Web systems built for scale. We deliver technical excellence designed to drive your business forward.',
    url: SITE_URL,
    siteName: 'RiseUp Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiseUp Solutions | High Performance Digital Engineering',
    description:
      'ERP, Mobile, and Web systems built for scale. We deliver technical excellence designed to drive your business forward.',
    creator: '@RiseUpSolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <ThemeProvider>
          <QuoteModalProvider>
            <Navbar />
            <main className="pt-16 flex-1">{children}</main>
            <Footer />
          </QuoteModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
