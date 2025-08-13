import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Tiny Code Share - Privacy-First Code Snippet Sharing',
    template: '%s | Tiny Code Share'
  },
  description:
    'Share code snippets instantly with complete privacy. No server storage, no accounts needed. Client-side code sharing with syntax highlighting and automatic language detection.',
  keywords: [
    'code sharing',
    'snippet sharing',
    'privacy-focused',
    'no storage',
    'client-side',
    'syntax highlighting',
    'code snippets',
    'developer tools',
    'open source',
    'secure code sharing'
  ],
  authors: [{ name: 'Nico De Giacomo' }],
  creator: 'Nico De Giacomo',
  publisher: 'Tiny Code Share',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tiny-code-share.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tiny Code Share - Privacy-First Code Snippet Sharing',
    description: 'Share code snippets instantly with complete privacy. No server storage, no accounts needed. Client-side code sharing with syntax highlighting.',
    url: 'https://tiny-code-share.vercel.app',
    siteName: 'Tiny Code Share',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tiny Code Share - Privacy-First Code Snippet Sharing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiny Code Share - Privacy-First Code Snippet Sharing',
    description: 'Share code snippets instantly with complete privacy. No server storage, no accounts needed.',
    images: ['/og-image.png'],
    creator: '@NicoDeGiacomo',
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
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        url: '/icon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tiny Code Share",
    "description": "Privacy-first code snippet sharing tool with no server storage",
    "url": "https://tiny-code-share.vercel.app",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Nico De Giacomo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tiny Code Share"
    },
    "softwareVersion": "1.0.0",
    "datePublished": "2024-01-01",
    "license": "https://opensource.org/licenses/MIT",
    "programmingLanguage": ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Go", "Rust"],
    "featureList": [
      "Privacy-focused code sharing",
      "No server storage",
      "Client-side only",
      "Syntax highlighting",
      "Automatic language detection",
      "URL fragment sharing",
      "Mobile responsive"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
