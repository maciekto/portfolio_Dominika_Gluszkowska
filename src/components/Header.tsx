import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { chapters } from '../data/chapters'
import { LANGS } from '../i18n/dictionary'
import { useLang } from '../i18n/useLang'

const LangSwitch = ({ className = '' }: { className?: string }) => {
  const { lang } = useLang()
  const { pathname, hash } = useLocation()
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-40">/</span>}
          <Link
            to={pathname.replace(/^\/(en|pl)/, `/${l}`) + hash}
            aria-current={l === lang ? 'true' : undefined}
            className={l === lang ? 'underline underline-offset-4' : 'opacity-50 hover:opacity-100 transition-opacity'}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  )
}

export const Header = () => {
  const { lang, t } = useLang()
  const { pathname } = useLocation()
  // Menu jest otwarte tylko na stronie, na której je otwarto – po przejściu dalej samo się zamyka
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  const open = openedAt === pathname
  const close = () => setOpenedAt(null)

  // Zablokuj przewijanie strony pod otwartym menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-opacity hover:opacity-60 ${isActive ? 'underline underline-offset-[6px]' : ''}`

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white">
        <nav className="flex items-center justify-between gap-6 px-5 md:px-10 py-5 text-[10px] md:text-xs uppercase tracking-[0.3em]">
          <Link to={`/${lang}`} className="font-luxury text-2xl md:text-3xl tracking-normal leading-none" aria-label={t.nav.home}>
            DG
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
            {chapters.map((c) => (
              <li key={c.key}>
                <NavLink to={`/${lang}/${c.slug}`} className={linkClass}>
                  {t.nav[c.key]}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <LangSwitch className="hidden lg:flex" />
            <button
              type="button"
              onClick={() => setOpenedAt(pathname)}
              className="lg:hidden uppercase tracking-[0.3em] cursor-pointer"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {t.nav.menu}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-espresso text-ivory flex flex-col px-5 md:px-10 py-5"
          >
            <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.3em]">
              <Link to={`/${lang}`} onClick={close} className="font-luxury text-2xl md:text-3xl tracking-normal leading-none">DG</Link>
              <button type="button" onClick={close} className="uppercase tracking-[0.3em] cursor-pointer">
                {t.nav.close}
              </button>
            </div>

            <ul className="flex-1 flex flex-col justify-center gap-4">
              {chapters.map((c, i) => (
                <motion.li
                  key={c.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <NavLink to={`/${lang}/${c.slug}`} onClick={close} className="flex items-baseline gap-4">
                    {({ isActive }) => (
                      <>
                        <span className="text-[10px] tracking-[0.3em] opacity-60">{c.number}</span>
                        <span className={`font-luxury uppercase text-5xl md:text-7xl leading-none ${isActive ? 'text-sand' : ''}`}>
                          {t.nav[c.key]}
                        </span>
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <LangSwitch className="text-xs uppercase tracking-[0.3em]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
