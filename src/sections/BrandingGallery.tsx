'use client'

import { Photo } from '../components/ui/Photo'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { photos } from '../data/photos'
import { useLang } from '../i18n/useLang'

const BrandName = ({ index, name }: { index: string; name: string }) => (
  <AnimatedSection className="flex items-baseline justify-between border-t border-espresso/20 pt-4">
    <h2 className="font-luxury uppercase text-4xl md:text-6xl">{name}</h2>
    <span className="text-[10px] md:text-xs uppercase tracking-[0.3em]">{index}</span>
  </AnimatedSection>
)

export const BrandingGallery = () => {
  const { t } = useLang()
  return (
    <section className="bg-paper text-espresso px-5 md:px-10 pb-24 md:pb-40 flex flex-col gap-16 md:gap-28">
      <div className="flex flex-col gap-4 md:gap-8">
        <BrandName index="03.1" name={t.branding.aura} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Photo data={photos.mockup3} />
          <Photo data={photos.mockup4} delay={0.15} />
          <Photo data={photos.mockup5} />
          <Photo data={photos.mockup6} delay={0.15} />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        <BrandName index="03.2" name={t.branding.vbrnt} />
        <Photo data={photos.mockup9} aspect="h-[45svh] md:h-auto md:aspect-[1920/778]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Photo data={photos.mockup7} />
          <Photo data={photos.mockup8} delay={0.15} />
        </div>
      </div>
    </section>
  )
}
