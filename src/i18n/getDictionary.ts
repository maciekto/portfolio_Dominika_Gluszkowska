import { dictionaries, LANGS, type Lang } from './dictionary'
import { withTypography } from './typography'

// Słowniki z poprawioną typografią (twarde spacje po jednoliterowych wyrazach)
const prepared: Record<Lang, (typeof dictionaries)[Lang]> = {
  en: withTypography(dictionaries.en),
  pl: withTypography(dictionaries.pl),
}

export const isLang = (v: string | undefined): v is Lang => !!v && (LANGS as string[]).includes(v)

export const getDictionary = (lang: Lang) => prepared[lang]

/** Domyślny język na podstawie przeglądarki. */
export const detectLang = (): Lang =>
  typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en'
