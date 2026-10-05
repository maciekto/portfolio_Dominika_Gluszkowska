import type { Metadata } from 'next'
import { chapters, type ChapterKey } from '../data/chapters'
import type { Lang } from './dictionary'
import { getDictionary, isLang } from './getDictionary'

const OG_LOCALE = { en: 'en_US', pl: 'pl_PL' } as const
const clean = (s: string) => s.replace(/\u00A0/g, ' ')

/** Tytuł, opis, adres kanoniczny, wersje językowe i Open Graph dla podstrony – generowane przy buildzie. */
export const pageMetadata = (langParam: string, key?: ChapterKey): Metadata => {
  const lang: Lang = isLang(langParam) ? langParam : 'en'
  const t = getDictionary(lang)
  const chapter = key ? chapters.find((c) => c.key === key) : undefined

  const title = chapter ? `${clean(t.nav[chapter.key])} – Dominika Głuszkowska` : clean(t.meta.title)
  const description = clean(chapter ? t.chapters[chapter.key].teaser : t.meta.description)
  const path = chapter ? `/${chapter.slug}` : ''

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: { pl: `/pl${path}`, en: `/en${path}`, 'x-default': `/en${path}` },
    },
    openGraph: {
      type: 'website',
      siteName: 'Dominika Głuszkowska',
      title,
      description,
      url: `/${lang}${path}`,
      locale: OG_LOCALE[lang],
      alternateLocale: OG_LOCALE[lang === 'pl' ? 'en' : 'pl'],
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dominika Głuszkowska – Portfolio, Senior Graphic Designer' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  }
}
