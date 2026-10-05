'use client'

import { Hero } from '../sections/Hero'
import { Marquee } from '../sections/Marquee'
import { ChapterTeasers } from '../sections/ChapterTeasers'
import { ContactCta } from '../components/ContactCta'

export const HomePage = () => (
  <main className="overflow-hidden">
    <Hero />
    <Marquee />
    <ChapterTeasers />
    <ContactCta />
  </main>
)
