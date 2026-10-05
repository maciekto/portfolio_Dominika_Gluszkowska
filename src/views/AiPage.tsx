'use client'

import { ChapterPage } from './ChapterPage'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Photo } from '../components/ui/Photo'
import { ComparisonSection } from '../sections/ComparisonSection'
import { aiPhotos } from '../data/photos'
import { useLang } from '../i18n/useLang'

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">{children}</h2>
)

export const AiPage = () => {
  const { t } = useLang()
  const a = t.ai
  return (
    <ChapterPage chapterKey="ai" tone="bg-olive text-ivory">
      {/* Podejście */}
      <section className="bg-olive text-ivory px-5 md:px-10 pb-20 md:pb-32">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-ivory/20 pt-10 md:pt-16">
          <div className="md:col-span-3"><SectionLabel>{a.approachTitle}</SectionLabel></div>
          <p className="md:col-span-8 font-luxury text-3xl md:text-5xl leading-[1.1]">{a.approach}</p>
        </AnimatedSection>
      </section>

      {/* Proces: od wizji do produktu */}
      <section className="bg-ivory text-espresso px-5 md:px-10 py-20 md:py-32">
        <AnimatedSection className="flex flex-col gap-6 md:max-w-[50%]">
          <SectionLabel>04.1</SectionLabel>
          <p className="font-luxury uppercase text-5xl md:text-[5vw] leading-[0.9]">{a.processTitle}</p>
        </AnimatedSection>
        <ol className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-espresso/15 border border-espresso/15">
          {a.steps.map((s, i) => (
            <li key={s.title} className="bg-ivory">
              <AnimatedSection delay={0.08 * i} className="h-full p-6 md:p-8 flex flex-col gap-6 min-h-56">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">0{i + 1}</span>
                <p className="font-luxury uppercase text-3xl leading-none">{s.title}</p>
                <p className="text-sm leading-relaxed opacity-75 mt-auto">{s.text}</p>
              </AnimatedSection>
            </li>
          ))}
        </ol>
      </section>

      {/* Galeria zdjęć AI – zbierana automatycznie z flag w src/data/photos.ts */}
      <section className="bg-paper text-espresso px-5 md:px-10 py-20 md:py-32">
        <AnimatedSection className="flex flex-col gap-6 md:max-w-[50%] mb-12 md:mb-20">
          <SectionLabel>04.2</SectionLabel>
          <p className="font-luxury uppercase text-5xl md:text-[5vw] leading-[0.9]">{a.galleryTitle}</p>
        </AnimatedSection>
        <div className="columns-2 md:columns-3 gap-4 md:gap-6">
          {aiPhotos.map((p, i) => (
            <Photo key={p.src.src} data={p} className="mb-4 md:mb-6 break-inside-avoid" delay={0.05 * (i % 3)} />
          ))}
        </div>
      </section>

      {/* Suwak porównania */}
      <section className="bg-mist text-espresso px-5 md:px-10 py-20 md:py-32 flex flex-col gap-10 md:gap-16">
        <AnimatedSection className="flex flex-col gap-6 md:max-w-[50%]">
          <SectionLabel>04.3</SectionLabel>
          <p className="font-luxury uppercase text-5xl md:text-[5vw] leading-[0.9]">{a.comparisonTitle}</p>
        </AnimatedSection>
        <ComparisonSection />
      </section>

      {/* Automatyzacja i biblioteka Figma – projekt niepubliczny, więc sam opis */}
      <section className="bg-sage text-espresso px-5 md:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <AnimatedSection className="md:col-span-5 flex flex-col gap-6">
            <SectionLabel>04.4</SectionLabel>
            <p className="font-luxury uppercase text-5xl md:text-[5vw] leading-[0.9]">{a.automationTitle}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="text-base md:text-lg leading-relaxed">{a.automation}</p>
          </AnimatedSection>
        </div>
      </section>
    </ChapterPage>
  )
}
