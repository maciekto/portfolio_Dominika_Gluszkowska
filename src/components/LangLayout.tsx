import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { detectLang, isLang } from '../i18n/useLang'
import { Seo } from './Seo'

export const LangLayout = () => {
  const { lang } = useParams()
  const { pathname, hash } = useLocation()

  // Po zmianie podstrony zacznij od góry, a przy kotwicy (np. #contact) przewiń do sekcji
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    const timer = window.setInterval(() => {
      const el = document.getElementById(id)
      if (el || ++tries > 20) {
        window.clearInterval(timer)
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
    return () => window.clearInterval(timer)
  }, [pathname, hash])

  // Adres bez języka (np. /campaign) → dopisz język
  if (!isLang(lang)) return <Navigate to={`/${detectLang()}${pathname}`} replace />

  return (
    <>
      <Seo />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
