import { ChapterPage } from './ChapterPage'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { useLang } from '../i18n/useLang'

export const NextPage = () => {
  const { t } = useLang()
  const n = t.next
  return (
    <ChapterPage chapterKey="next" tone="bg-sage text-espresso">
      <section className="bg-sage text-espresso px-5 md:px-10 pb-20 md:pb-32">
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-espresso/20 pt-10 md:pt-16">
          <p className="md:col-span-9 md:col-start-4 font-luxury text-3xl md:text-5xl leading-[1.1]">{n.intro}</p>
        </AnimatedSection>
      </section>

      <section className="bg-ivory text-espresso px-5 md:px-10 py-20 md:py-32">
        <AnimatedSection>
          <h2 className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">{n.directionsTitle}</h2>
        </AnimatedSection>
        <ol className="mt-10 md:mt-16 flex flex-col">
          {n.directions.map((d, i) => (
            <li key={i}>
              <AnimatedSection delay={0.08 * i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-espresso/20 py-8 md:py-12">
                <span className="md:col-span-1 text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">0{i + 1}</span>
                <p className="md:col-span-5 font-luxury uppercase text-4xl md:text-6xl leading-none">{d.title}</p>
                <p className="md:col-span-5 md:col-start-8 text-sm md:text-base leading-relaxed opacity-80">{d.text}</p>
              </AnimatedSection>
            </li>
          ))}
        </ol>
        <AnimatedSection className="mt-16 md:mt-24 max-w-2xl text-base md:text-lg leading-relaxed">
          {n.closing}
        </AnimatedSection>
      </section>
    </ChapterPage>
  )
}
