import type { Dictionary } from '../i18n/dictionary'
import { photos, type PhotoData } from './photos'

export type ChapterKey = keyof Dictionary['chapters']

export interface Chapter {
  key: ChapterKey
  slug: string
  number: string
  /** Klasy tła i tekstu zajawki na stronie głównej */
  tone: string
  teaser: PhotoData[]
}

export const chapters: Chapter[] = [
  { key: 'campaign', slug: 'campaign', number: '01', tone: 'bg-walnut text-ivory', teaser: [photos.snow, photos.woodLeather, photos.greenBoots] },
  { key: 'ecommerce', slug: 'ecommerce', number: '02', tone: 'bg-mist text-espresso', teaser: [photos.laptop, photos.mockup1, photos.mockup2] },
  { key: 'branding', slug: 'branding', number: '03', tone: 'bg-paper text-espresso', teaser: [photos.mockup3, photos.mockup4, photos.mockup9] },
  { key: 'ai', slug: 'ai', number: '04', tone: 'bg-olive text-ivory', teaser: [photos.greenDuo, photos.gardenDuo, photos.portrait] },
  { key: 'next', slug: 'next', number: '05', tone: 'bg-sage text-espresso', teaser: [] },
]

export const chapterBySlug = (slug: string) => chapters.find((c) => c.slug === slug)

export const nextChapter = (key: ChapterKey) => {
  const i = chapters.findIndex((c) => c.key === key)
  return chapters[(i + 1) % chapters.length]
}
