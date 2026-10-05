// Jedno źródło prawdy o zdjęciach.
// `ai: true` = zdjęcie powstało z wykorzystaniem AI. Dostaje etykietę „AI”
// i automatycznie trafia do galerii na podstronie AI & Automation.
// Źródło oznaczeń: folder src/assets/images/ai/ = zdjęcia z AI, src/assets/images/nieai/ = bez AI.
// Nazwy plików są opisowe (trafiają do publicznych adresów zdjęć – liczy się to dla SEO).

import type { Dictionary } from '../i18n/dictionary'

import snow from '../assets/images/ai/ai-campaign-cream-coat-burgundy-bag-snow.jpg'
import woodTote from '../assets/images/ai/ai-campaign-beige-outfit-woven-tote.jpg'
import woodLeather from '../assets/images/ai/ai-campaign-brown-leather-blazer-knee-boots.jpg'
import greenBoots from '../assets/images/ai/ai-campaign-beige-knee-high-boots-green-studio.jpg'
import greenDuo from '../assets/images/ai/ai-campaign-couple-green-studio-checkerboard.jpg'
import checkerMan from '../assets/images/ai/ai-campaign-white-suit-checkerboard-floor.jpg'
import gardenMan from '../assets/images/ai/ai-campaign-white-linen-suit-sun-lounger.jpg'
import gardenDuo from '../assets/images/ai/ai-campaign-garden-striped-dress-white-suit.jpg'
import gardenDress from '../assets/images/ai/ai-campaign-striped-dress-garden-table.jpg'
import bag from '../assets/images/ai/ai-product-black-leather-hobo-bag.jpg'
import sandals from '../assets/images/ai/ai-product-vanilla-stiletto-sandals-satin.jpg'
import portrait from '../assets/images/ai/ai-portrait-cat-eye-sunglasses-gold-earrings.jpg'
import skater from '../assets/images/ai/ai-campaign-skater-orange-cap-skatepark.jpg'

import laptop from '../assets/images/nieai/ecommerce-online-store-laptop-mockup.png'
import mockup1 from '../assets/images/nieai/ecommerce-shopping-app-screens-mockup.png'
import mockup2 from '../assets/images/nieai/ecommerce-shopping-app-home-screen-mockup.png'
import mockup3 from '../assets/images/nieai/aura-branding-cosmetic-jar-packaging.png'
import mockup4 from '../assets/images/nieai/aura-branding-bath-foam-bottle-packaging.png'
import mockup5 from '../assets/images/nieai/aura-logo-light-background.png'
import mockup6 from '../assets/images/nieai/aura-logo-dark-background.png'
import mockup7 from '../assets/images/nieai/vbrnt-logo-light-background.png'
import mockup8 from '../assets/images/nieai/vbrnt-logo-dark-background.png'
import mockup9 from '../assets/images/nieai/vbrnt-sportswear-branding.png'
import portraitDominika from '../assets/images/nieai/dominika-gluszkowska-portrait.jpg'

export type AltKey = keyof Dictionary['alt']

export interface PhotoData {
  src: string
  alt: AltKey
  ai: boolean
  /** Proporcje używane w galerii AI */
  aspect: string
  /**
   * Punkt skupienia przy przycinaniu (CSS object-position), np. '50% 10%'.
   * Działa tylko tam, gdzie zdjęcie jest wyświetlane w innych proporcjach niż oryginał
   * (np. zajawki na stronie głównej) – pilnuje, żeby nie ucinać głów.
   */
  focus?: string
}

const photo = (src: string, alt: AltKey, ai: boolean, aspect: string, focus?: string): PhotoData => ({ src, alt, ai, aspect, focus })

export const photos = {
  // Kampania
  hero: photo(woodTote, 'hero', true, 'aspect-[3/4]'),
  snow: photo(snow, 'snow', true, 'aspect-[16/9]'),
  woodLeather: photo(woodLeather, 'woodLeather', true, 'aspect-[3/4]', '50% 22%'),
  greenDuo: photo(greenDuo, 'greenDuo', true, 'aspect-square', '50% 4%'),
  greenBoots: photo(greenBoots, 'greenBoots', true, 'aspect-square', '50% 0%'),
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

/** Zdjęcia w suwaku porównania (images/ai/ai-styling-comparison-*.png) – stworzone z AI. */
export const COMPARISON_IS_AI = true

/**
 * Portret Dominiki na podstronie „Co dalej” (prawdziwe zdjęcie, nie AI).
 * Ustaw na null, żeby wrócić do typograficznej zaślepki z monogramem.
 */
export const PORTRAIT_PHOTO: string | null = portraitDominika
