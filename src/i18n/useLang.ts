'use client'

import { useParams } from 'next/navigation'
import type { Lang } from './dictionary'
import { getDictionary, isLang } from './getDictionary'

export { isLang, detectLang } from './getDictionary'

/** Język z adresu (/en/…, /pl/…) i słownik dla niego. Tylko w komponentach klienckich. */
export const useLang = () => {
  const params = useParams<{ lang: string }>()
  const lang: Lang = isLang(params?.lang) ? params.lang : 'en'
  return { lang, t: getDictionary(lang) }
}
