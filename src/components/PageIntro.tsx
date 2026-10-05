'use client'

import { ChapterTitle } from './ui/ChapterTitle'
import { AnimatedSection } from './ui/AnimatedSection'
import type { Chapter } from '../data/chapters'
import { useLang } from '../i18n/useLang'

/** Otwarcie podstrony: tytuł rozdziału, „co robiłam”, „doświadczenie” i metryczka. */
export const PageIntro = ({ chapter, tone = 'bg-ivory text-espresso' }: { chapter: Chapter; tone?: string }) => {
  const { t } = useLang()
  const copy = t.chapters[chapter.key]
  const hasDetails = 'whatIDid' in copy
  // Metryczka jest opcjonalna (na podstronie AI pusta) – bez niej dwie kolumny tekstu dzielą szerokość.
  const hasMeta = hasDetails && copy.meta.length > 0

  return (
    <section className={`${tone} px-5 md:px-10 pt-32 md:pt-44 pb-16 md:pb-28`}>
      <ChapterTitle as="h1" number={chapter.number} label={copy.label} title={t.nav[chapter.key]} />

      {hasDetails && (
        <div className="mt-14 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <AnimatedSection className={`${hasMeta ? 'md:col-span-5' : 'md:col-span-6'} flex flex-col gap-4`}>
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">{t.common.whatIDid}</h3>
            <p className="text-base md:text-lg leading-relaxed">{copy.whatIDid}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className={`${hasMeta ? 'md:col-span-4' : 'md:col-span-5 md:col-start-8'} flex flex-col gap-4`}>
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">{t.common.experience}</h3>
            <p className="text-sm md:text-base leading-relaxed opacity-80">{copy.experience}</p>
          </AnimatedSection>
          {hasMeta && (
            <AnimatedSection delay={0.2} className="md:col-span-3">
              <dl className="flex flex-col">
                {t.common.details.map((label, i) => (
                  <div key={label} className="border-t border-current/20 py-3 flex flex-col gap-1">
                    <dt className="text-[10px] uppercase tracking-[0.3em] opacity-60">{label}</dt>
                    <dd className="text-sm">{copy.meta[i]}</dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>
          )}
        </div>
      )}
    </section>
  )
}
