import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../globals.css'
import { inter, kalieb } from '../fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LANGS } from '@/i18n/dictionary'
import { SITE_URL } from '@/data/site'

// Tylko /en i /pl – każda wersja jest generowana jako statyczny HTML
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }))
export const dynamicParams = false

export const viewport: Viewport = { themeColor: '#1F1712' }

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Dominika Głuszkowska' }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dominika Głuszkowska',
  jobTitle: 'Senior Graphic Designer',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  knowsAbout: ['AI imagery', 'Campaign photography', 'E-commerce design', 'Branding', 'Design automation', 'Figma'],
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return (
    <html lang={lang} className={`${inter.variable} ${kalieb.variable}`}>
      <body>
        <div className="min-h-screen bg-ivory selection:bg-cognac selection:text-ivory">
          <Header />
          {children}
          <Footer />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  )
}
