import { Link } from 'react-router'
import { nextChapter, type ChapterKey } from '../data/chapters'
import { useLang } from '../i18n/useLang'
import { AnimatedSection } from './ui/AnimatedSection'

/** Duży link na dole podstrony prowadzący do kolejnego rozdziału. */
export const NextChapterLink = ({ current }: { current: ChapterKey }) => {
  const { lang, t } = useLang()
  const next = nextChapter(current)
  return (
    <AnimatedSection className="bg-ivory text-espresso border-t border-espresso/15">
      <Link to={`/${lang}/${next.slug}`} className="group block px-5 md:px-10 py-16 md:py-24">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">
          {t.common.nextChapter} · {next.number}
        </span>
        <span className="mt-4 flex items-end justify-between gap-6">
          <span className="font-luxury uppercase leading-[0.85] text-[10vw] md:text-[8vw] group-hover:opacity-70 transition-opacity">
            {t.nav[next.key]}
          </span>
          <span className="text-3xl md:text-6xl pb-2 transition-transform group-hover:translate-x-2">→</span>
        </span>
      </Link>
    </AnimatedSection>
  )
}
