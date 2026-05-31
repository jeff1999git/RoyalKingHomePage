import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0047AB',
}

export const metadata: Metadata = {
  title: 'Royal King — Pure Water, Pure Life',
  description:
    'Trusted drinking water delivery for homes, offices and events in Thrissur, Kerala. Call 7306067616.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Royal King Water',
    description: 'Pure Water, Pure Life — Trusted water delivery in Thrissur, Kerala',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'Royal King Water',
    description: 'Pure Water, Pure Life — Trusted water delivery in Thrissur, Kerala',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Royal King',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
