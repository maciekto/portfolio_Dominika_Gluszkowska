import { Link } from 'react-router'
import { chapters } from '../data/chapters'
import { useLang } from '../i18n/useLang'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Photo } from '../components/ui/Photo'

/** Zajawki rozdziałów na stronie głównej – każdy prowadzi do podstrony. */
export const ChapterTeasers = () => {
  const { lang, t } = useLang()
  return (
    <div id="chapters">
      {chapters.map((c) => {
        const copy = t.chapters[c.key]
        const href = `/${lang}/${c.slug}`
        const [main, ...rest] = c.teaser
        return (
          <section key={c.key} className={`${c.tone} px-5 md:px-10 py-20 md:py-32`}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
              <AnimatedSection className="md:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.3em]">
                  <span>{c.number}</span>
                  <span className="h-px w-10 bg-current opacity-50" />
                  <span>{copy.label}</span>
                </div>
                <Link to={href} className="group">
                  <h2 className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[5vw] group-hover:opacity-70 transition-opacity">
                    {t.nav[c.key]}
                  </h2>
                </Link>
                <p className="max-w-md text-sm leading-relaxed opacity-75">{copy.teaser}</p>
                <Link
                  to={href}
                  className="self-start mt-2 border-b border-current pb-1 text-[10px] md:text-xs uppercase tracking-[0.3em] hover:opacity-60 transition-opacity"
                >
                  {t.common.seeChapter}
                </Link>
              </AnimatedSection>

              {main && (
                <Link to={href} className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-6" tabIndex={-1} aria-hidden>
                  <Photo data={main} className="col-span-2" aspect="aspect-[16/9]" />
                  {rest.map((p, i) => (
                    <Photo key={p.src} data={p} aspect="aspect-[4/3]" delay={0.1 * (i + 1)} />
                  ))}
                </Link>
              )}
            </div>
          </section>
        )
      })}
    </div>
  )
}
