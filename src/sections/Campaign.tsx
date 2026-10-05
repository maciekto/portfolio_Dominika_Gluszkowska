import { Photo } from '../components/ui/Photo'
import { ChapterTitle } from '../components/ui/ChapterTitle'
import { AnimatedSection } from '../components/ui/AnimatedSection'

import snow from '../assets/images/campaign/snow.jpg'
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

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em]">{children}</p>
)

export const Campaign = () => (
  <section id="campaign">
    {/* Otwarcie rozdziału */}
    <div className="bg-ivory text-espresso px-5 md:px-10 pt-24 md:pt-40 pb-12 md:pb-20">
      <ChapterTitle number="01" label="Fashion imagery" title="Campaign" />
    </div>

    {/* Snow – pełna szerokość */}
    <div className="relative bg-ivory">
      <Photo src={snow} alt="Modelka w kremowym płaszczu z bordową torebką na tle ośnieżonych gór" aspect="h-[75svh] md:h-auto md:aspect-[16/9]" />
      <AnimatedSection className="absolute left-5 md:left-10 bottom-5 md:bottom-10 text-espresso">
        <Label>01.1</Label>
        <p className="font-luxury uppercase text-5xl md:text-8xl leading-none mt-2">Snow</p>
      </AnimatedSection>
    </div>

    {/* Walnut – ciemny orzech */}
    <div className="bg-walnut text-ivory px-5 md:px-10 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
        <AnimatedSection className="md:col-span-5 md:sticky md:top-28 flex flex-col gap-6">
          <Label>01.2</Label>
          <p className="font-luxury uppercase text-7xl md:text-[9vw] leading-[0.85]">Walnut</p>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            Cognac leather, polished wood and warm tungsten light.
          </p>
        </AnimatedSection>
        <Photo src={woodLeather} alt="Modelka w brązowej skórzanej marynarce i kozakach na skórze bydlęcej" aspect="aspect-[3/4]" className="md:col-span-6 md:col-start-7" caption="Leather" index="02" />
      </div>
    </div>

    {/* Green Room – oliwka i szachownica */}
    <div className="bg-olive text-ivory px-5 md:px-10 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        <Photo src={greenDuo} alt="Para modeli w brązach na tle zielonej tkaniny i czarno-białej szachownicy" aspect="aspect-square" className="md:col-span-7" caption="Duo" index="03" />
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between gap-10">
          <AnimatedSection className="flex flex-col gap-6">
            <Label>01.3</Label>
            <p className="font-luxury uppercase text-7xl md:text-[7vw] leading-[0.85]">Green<br />Room</p>
          </AnimatedSection>
          <Photo src={greenBoots} alt="Modelka w beżowych kozakach na czarnym krześle" aspect="aspect-square" caption="Boots" index="04" delay={0.15} />
        </div>
      </div>
    </div>

    {/* Garden – zieleń i biel */}
    <div className="bg-sage text-espresso">
      <div className="px-5 md:px-10 pt-20 md:pt-32 pb-10 md:pb-16 flex items-end justify-between gap-6">
        <AnimatedSection className="flex flex-col gap-6">
          <Label>01.4</Label>
          <p className="font-luxury uppercase text-7xl md:text-[9vw] leading-[0.85]">Garden</p>
        </AnimatedSection>
        <AnimatedSection className="hidden md:block max-w-xs text-sm leading-relaxed opacity-70 pb-4">
          White linen, striped cotton and late-afternoon sun.
        </AnimatedSection>
      </div>
      <Photo src={gardenDuo} alt="Kobieta w sukience w paski i mężczyzna w białym garniturze na leżaku w ogrodzie" aspect="h-[60svh] md:h-auto md:aspect-[16/9]" />
      <div className="px-5 md:px-10 py-20 md:py-32 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
        <Photo src={checkerMan} alt="Mężczyzna w białym garniturze na czarno-białej szachownicy" aspect="aspect-[3/4]" className="md:col-span-4 md:col-start-2" caption="Checker" index="05" />
        <Photo src={gardenMan} alt="Mężczyzna w białym garniturze odpoczywający na leżaku" aspect="aspect-[3/4]" className="md:col-span-4 md:col-start-8 mt-16 md:mt-48" caption="Lounge" index="06" delay={0.15} />
        <Photo src={gardenDress} alt="Kobieta w sukience w paski przy drewnianym stoliku w ogrodzie" aspect="aspect-[16/9]" className="col-span-2 md:col-span-10 md:col-start-2 mt-6 md:mt-16" caption="Stripes" index="07" />
      </div>
    </div>

    {/* Still Life – produkty */}
    <div className="bg-paper text-espresso px-5 md:px-10 py-20 md:py-32">
      <AnimatedSection className="flex flex-col gap-6 mb-12 md:mb-20 items-center text-center">
        <Label>01.5</Label>
        <p className="font-luxury uppercase text-7xl md:text-[9vw] leading-[0.85]">Still Life</p>
      </AnimatedSection>
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
        <Photo src={bag} alt="Czarna skórzana torba hobo na chromowanej kuli" aspect="aspect-[3/4]" caption="Bag" index="08" />
        <Photo src={sandals} alt="Waniliowe sandały na szpilce na kremowej satynie" aspect="aspect-[3/4]" caption="Sandals" index="09" delay={0.15} />
      </div>
    </div>

    {/* Portraits */}
    <div className="bg-mist text-espresso px-5 md:px-10 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
        <Photo src={portrait} alt="Portret blondynki w okularach kocie oko i złotych kolczykach" aspect="aspect-square" className="md:col-span-6" caption="Gold" index="10" />
        <div className="md:col-span-5 md:col-start-8 flex flex-col gap-10">
          <AnimatedSection className="flex flex-col gap-6">
            <Label>01.6</Label>
            <p className="font-luxury uppercase text-7xl md:text-[8vw] leading-[0.85]">Portraits</p>
          </AnimatedSection>
          <Photo src={skater} alt="Skater w pomarańczowej czapce z deskorolką w skateparku" aspect="aspect-square" caption="Street" index="11" delay={0.15} />
        </div>
      </div>
    </div>
  </section>
)
