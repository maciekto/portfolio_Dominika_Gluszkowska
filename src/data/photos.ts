// Jedno źródło prawdy o zdjęciach.
// `ai: true` = zdjęcie powstało z wykorzystaniem AI. Dostaje etykietę „AI”
// i automatycznie trafia do galerii na podstronie AI & Automation.
// Źródło oznaczeń: pliki z prefiksem NIEAI_ nie są z AI, wszystkie pozostałe są.

import type { Dictionary } from '../i18n/dictionary'

import snow from '../assets/images/campaign/snow.jpg'
import woodTote from '../assets/images/campaign/wood-tote.jpg'
import woodLeather from '../assets/images/campaign/wood-leather.jpg'
import greenBoots from '../assets/images/campaign/green-boots.jpg'
import greenDuo from '../assets/images/campaign/green-duo.jpg'
import checkerMan from '../assets/images/campaign/checker-man.jpg'
import gardenMan from '../assets/images/campaign/garden-man.jpg'
import gardenDuo from '../assets/images/campaign/garden-duo.jpg'
import gardenDress from '../assets/images/campaign/garden-dress.jpg'
import bag from '../assets/images/campaign/bag.jpg'
import sandals from '../assets/images/campaign/sandals.jpg'
import portrait from '../assets/images/campaign/portrait.jpg'
import skater from '../assets/images/campaign/skater.jpg'

import laptop from '../assets/images/NIEAI_hero-bottom-bg.png'
import mockup1 from '../assets/images/NIEAI_mockup-1.png'
import mockup2 from '../assets/images/NIEAI_mockup-2.png'
import mockup3 from '../assets/images/NIEAI_mockup-3.png'
import mockup4 from '../assets/images/NIEAI_mockup-4.png'
import mockup5 from '../assets/images/NIEAI_mockup-5.png'
import mockup6 from '../assets/images/NIEAI_mockup-6.png'
import mockup7 from '../assets/images/NIEAI_mockup-7.png'
import mockup8 from '../assets/images/NIEAI_mockup-8.png'
import mockup9 from '../assets/images/NIEAI_mockup-9.png'

export type AltKey = keyof Dictionary['alt']

export interface PhotoData {
  src: string
  alt: AltKey
  ai: boolean
  /** Proporcje używane w galerii AI */
  aspect: string
}

const photo = (src: string, alt: AltKey, ai: boolean, aspect: string): PhotoData => ({ src, alt, ai, aspect })

export const photos = {
  // Kampania
  hero: photo(woodTote, 'hero', true, 'aspect-[3/4]'),
  snow: photo(snow, 'snow', true, 'aspect-[16/9]'),
  woodLeather: photo(woodLeather, 'woodLeather', true, 'aspect-[3/4]'),
  greenDuo: photo(greenDuo, 'greenDuo', true, 'aspect-square'),
  greenBoots: photo(greenBoots, 'greenBoots', true, 'aspect-square'),
  checkerMan: photo(checkerMan, 'checkerMan', true, 'aspect-[3/4]'),
  gardenMan: photo(gardenMan, 'gardenMan', true, 'aspect-[3/4]'),
  gardenDuo: photo(gardenDuo, 'gardenDuo', true, 'aspect-[16/9]'),
  gardenDress: photo(gardenDress, 'gardenDress', true, 'aspect-[16/9]'),
  bag: photo(bag, 'bag', true, 'aspect-[3/4]'),
  sandals: photo(sandals, 'sandals', true, 'aspect-[3/4]'),
  portrait: photo(portrait, 'portrait', true, 'aspect-square'),
  skater: photo(skater, 'skater', true, 'aspect-square'),
  // E-commerce
  laptop: photo(laptop, 'laptop', false, 'aspect-[16/9]'),
  mockup1: photo(mockup1, 'mockup1', false, 'aspect-[959/704]'),
  mockup2: photo(mockup2, 'mockup2', false, 'aspect-[959/704]'),
  // Branding
  mockup3: photo(mockup3, 'mockup3', false, 'aspect-[960/778]'),
  mockup4: photo(mockup4, 'mockup4', false, 'aspect-[960/778]'),
  mockup5: photo(mockup5, 'mockup5', false, 'aspect-[960/444]'),
  mockup6: photo(mockup6, 'mockup6', false, 'aspect-[960/444]'),
  mockup7: photo(mockup7, 'mockup7', false, 'aspect-[960/444]'),
  mockup8: photo(mockup8, 'mockup8', false, 'aspect-[960/444]'),
  mockup9: photo(mockup9, 'mockup9', false, 'aspect-[1920/778]'),
} satisfies Record<string, PhotoData>

export const aiPhotos = Object.values(photos).filter((p) => p.ai)

/** Film na stronie (video1.mp4) – stworzony z AI. */
export const VIDEO_IS_AI = true

/** Zdjęcia w suwaku porównania (comparision-image1/2.png) – stworzone z AI. */
export const COMPARISON_IS_AI = true

/**
 * Portret Dominiki na podstronie „Co dalej”.
 * Na razie brak zdjęcia – wyświetla się typograficzna zaślepka z monogramem.
 * Żeby wstawić zdjęcie: zaimportuj plik i podstaw go tutaj, np.
 *   import portraitDominika from '../assets/images/dominika.jpg'
 *   export const PORTRAIT_PHOTO: string | null = portraitDominika
 */
export const PORTRAIT_PHOTO: string | null = null
