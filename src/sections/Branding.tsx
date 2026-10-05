import { Photo } from '../components/ui/Photo'
import { ChapterTitle } from '../components/ui/ChapterTitle'
import { AnimatedSection } from '../components/ui/AnimatedSection'

import mockup3 from '../assets/images/mockup-3.png'
import mockup4 from '../assets/images/mockup-4.png'
import mockup5 from '../assets/images/mockup-5.png'
import mockup6 from '../assets/images/mockup-6.png'
import mockup7 from '../assets/images/mockup-7.png'
import mockup8 from '../assets/images/mockup-8.png'
import mockup9 from '../assets/images/mockup-9.png'

const BrandName = ({ index, name }: { index: string; name: string }) => (
  <AnimatedSection className="flex items-baseline justify-between border-t border-espresso/20 pt-4">
    <span className="font-luxury uppercase text-4xl md:text-6xl">{name}</span>
    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em]">{index}</span>
  </AnimatedSection>
)

export const Branding = () => (
  <section id="branding" className="bg-paper text-espresso px-5 md:px-10 py-24 md:py-40 flex flex-col gap-12 md:gap-20">
    <ChapterTitle number="03" label="Identity" title="Branding" />

    <div className="flex flex-col gap-4 md:gap-8">
      <BrandName index="03.1" name="Aura" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <Photo src={mockup3} alt="Słoik kremu marki aura na marmurowej półce" />
        <Photo src={mockup4} alt="Butelka pianki do kąpieli marki aura" delay={0.15} />
        <Photo src={mockup5} alt="Logo aura na jasnym tle" />
        <Photo src={mockup6} alt="Logo aura na ciemnym tle" delay={0.15} />
      </div>
    </div>

    <div className="flex flex-col gap-4 md:gap-8">
      <BrandName index="03.2" name="VBRNT" />
      <Photo src={mockup9} alt="Sportowa odzież marki VBRNT" aspect="h-[45svh] md:h-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <Photo src={mockup7} alt="Logo VBRNT na jasnym tle" />
        <Photo src={mockup8} alt="Logo VBRNT na ciemnym tle" delay={0.15} />
      </div>
    </div>
  </section>
)
