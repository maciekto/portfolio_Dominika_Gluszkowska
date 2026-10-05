import { Photo } from '../components/ui/Photo'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { photos } from '../data/photos'
import { useLang } from '../i18n/useLang'

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em]">{children}</p>
)

export const CampaignGallery = () => {
  const { t } = useLang()
  const c = t.campaign
  return (
    <>
      {/* Śnieg – pełna szerokość */}
      <div className="relative bg-ivory">
        <Photo data={photos.snow} aspect="h-[75svh] md:h-auto md:aspect-[16/9]" />
        <AnimatedSection className="absolute left-5 md:left-10 bottom-5 md:bottom-10 text-espresso">
          <Label>01.1</Label>
          <p className="font-luxury uppercase text-5xl md:text-8xl leading-none mt-2">{c.snow}</p>
        </AnimatedSection>
      </div>

      {/* Orzech */}
      <div className="bg-walnut text-ivory px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          <AnimatedSection className="md:col-span-5 md:sticky md:top-28 flex flex-col gap-6">
            <Label>01.2</Label>
            <p className="font-luxury uppercase text-7xl md:text-[9vw] leading-[0.85]">{c.walnut}</p>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/70">{c.walnutText}</p>
          </AnimatedSection>
          <Photo data={photos.woodLeather} className="md:col-span-6 md:col-start-7" index="02" />
        </div>
      </div>

      {/* Zielony pokój */}
      <div className="bg-olive text-ivory px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <Photo data={photos.greenDuo} className="md:col-span-7" index="03" />
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between gap-10">
            <AnimatedSection className="flex flex-col gap-6">
              <Label>01.3</Label>
              <p className="font-luxury uppercase text-6xl md:text-[6vw] leading-[0.85]">{c.greenRoom}</p>
            </AnimatedSection>
            <Photo data={photos.greenBoots} index="04" delay={0.15} />
          </div>
        </div>
      </div>

      {/* Ogród */}
      <div className="bg-stone text-espresso">
        <div className="px-5 md:px-10 pt-20 md:pt-32 pb-10 md:pb-16 flex items-end justify-between gap-6">
          <AnimatedSection className="flex flex-col gap-6">
            <Label>01.4</Label>
            <p className="font-luxury uppercase text-7xl md:text-[9vw] leading-[0.85]">{c.garden}</p>
          </AnimatedSection>
          <AnimatedSection className="hidden md:block max-w-xs text-sm leading-relaxed opacity-70 pb-4">
            {c.gardenText}
          </AnimatedSection>
        </div>
        <Photo data={photos.gardenDuo} aspect="h-[60svh] md:h-auto md:aspect-[16/9]" />
        <div className="px-5 md:px-10 py-20 md:py-32 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
          <Photo data={photos.checkerMan} className="md:col-span-4 md:col-start-2" index="05" />
          <Photo data={photos.gardenMan} className="md:col-span-4 md:col-start-8 mt-16 md:mt-48" index="06" delay={0.15} />
          <Photo data={photos.gardenDress} className="col-span-2 md:col-span-10 md:col-start-2 mt-6 md:mt-16" index="07" />
        </div>
      </div>

      {/* Martwa natura */}
      <div className="bg-paper text-espresso px-5 md:px-10 py-20 md:py-32">
        <AnimatedSection className="flex flex-col gap-6 mb-12 md:mb-20 items-center text-center">
          <Label>01.5</Label>
          <p className="font-luxury uppercase text-6xl md:text-[9vw] leading-[0.85]">{c.stillLife}</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          <Photo data={photos.bag} index="08" />
          <Photo data={photos.sandals} index="09" delay={0.15} />
        </div>
      </div>

      {/* Portrety */}
      <div className="bg-mist text-espresso px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
          <Photo data={photos.portrait} className="md:col-span-6" index="10" />
          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-10">
            <AnimatedSection className="flex flex-col gap-6">
              <Label>01.6</Label>
              <p className="font-luxury uppercase text-6xl md:text-[7vw] leading-[0.85]">{c.portraits}</p>
            </AnimatedSection>
            <Photo data={photos.skater} index="11" delay={0.15} />
          </div>
        </div>
      </div>
    </>
  )
}
