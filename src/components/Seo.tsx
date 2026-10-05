import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { chapterBySlug } from '../data/chapters'
import { SITE_URL } from '../data/site'
import { LANGS } from '../i18n/dictionary'
import { useLang } from '../i18n/useLang'

const OG_LOCALE = { en: 'en_US', pl: 'pl_PL' } as const

/** Meta tag po atrybucie name/property – tworzy, jeśli go nie ma. */
const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/** <link rel=… hreflang=…> – tworzy, jeśli go nie ma. */
const setLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

/** Tytuł, opis, adres kanoniczny, wersje językowe i Open Graph dla bieżącej podstrony. */
export const Seo = () => {
  const { lang, t } = useLang()
  const { pathname } = useLocation()

  useEffect(() => {
    const slug = pathname.split('/')[2] ?? ''
    const chapter = chapterBySlug(slug)
    const clean = (s: string) => s.replace(/\u00A0/g, ' ')

    const title = chapter ? `${clean(t.nav[chapter.key])} – Dominika Głuszkowska` : clean(t.meta.title)
    const description = clean(chapter ? t.chapters[chapter.key].teaser : t.meta.description)
    const path = chapter ? `/${chapter.slug}` : ''
    const url = `${SITE_URL}/${lang}${path}`

    document.documentElement.lang = lang
    document.title = title
    setMeta('name', 'description', description)
    setLink('canonical', url)
    for (const l of LANGS) setLink('alternate', `${SITE_URL}/${l}${path}`, l)
    setLink('alternate', `${SITE_URL}/en${path}`, 'x-default')

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:locale', OG_LOCALE[lang])
    setMeta('property', 'og:locale:alternate', OG_LOCALE[lang === 'pl' ? 'en' : 'pl'])
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
  }, [lang, pathname, t])

  return null
}
