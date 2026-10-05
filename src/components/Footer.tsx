import { Link } from 'react-router'
import { AnimatedSection } from './ui/AnimatedSection'
import { chapters } from '../data/chapters'
import { useLang } from '../i18n/useLang'

export const Footer = () => {
  const { lang, t } = useLang()
  return (
    <footer className="bg-espresso text-ivory px-5 md:px-10 pt-24 md:pt-40 pb-8 overflow-hidden">
      <AnimatedSection>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">{t.footer.thanks}</p>
        <p className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[11vw] mt-6">Dominika</p>
        <p className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[11vw] text-right">Głuszkowska</p>
      </AnimatedSection>

      <ul className="mt-16 md:mt-24 flex flex-wrap gap-x-8 gap-y-3 text-[10px] md:text-xs uppercase tracking-[0.3em]">
        {chapters.map((c) => (
          <li key={c.key}>
            <Link to={`/${lang}/${c.slug}`} className="opacity-70 hover:opacity-100 transition-opacity">
              {c.number} {t.nav[c.key]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 pt-6 border-t border-ivory/15 flex justify-between gap-6 text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">
        <span>{t.footer.madeBy}</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="uppercase tracking-[0.3em] cursor-pointer hover:opacity-60 transition-opacity"
        >
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  )
}
