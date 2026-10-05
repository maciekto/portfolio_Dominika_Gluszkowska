import { Hero } from '../sections/Hero'
import { Marquee } from '../sections/Marquee'
import { ChapterTeasers } from '../sections/ChapterTeasers'

export const HomePage = () => (
  <main className="overflow-hidden">
    <Hero />
    <Marquee />
    <ChapterTeasers />
  </main>
)
