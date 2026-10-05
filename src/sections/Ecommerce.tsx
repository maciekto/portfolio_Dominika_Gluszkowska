import { Photo } from '../components/ui/Photo'
import { ChapterTitle } from '../components/ui/ChapterTitle'
import VideoSection from './VideoSection'
import { ComparisonSection } from './ComparisonSection'

import laptop from '../assets/images/hero-bottom-bg.png'
import mockup1 from '../assets/images/mockup-1.png'
import mockup2 from '../assets/images/mockup-2.png'

export const Ecommerce = () => (
  <section id="ecommerce" className="bg-mist text-espresso px-5 md:px-10 py-24 md:py-40 flex flex-col gap-12 md:gap-20">
    <ChapterTitle number="02" label="Digital product" title="E-commerce" />
    <Photo src={laptop} alt="Strona sklepu internetowego na laptopie" aspect="aspect-[4/3] md:aspect-[16/9]" caption="Desktop" index="01" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <Photo src={mockup1} alt="Ekrany aplikacji mobilnej sklepu na trzech telefonach" caption="Mobile app" index="02" />
      <Photo src={mockup2} alt="Ekran główny aplikacji mobilnej sklepu" caption="Home" index="03" delay={0.15} />
    </div>
    <VideoSection />
    <ComparisonSection />
  </section>
)
