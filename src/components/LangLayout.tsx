import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { detectLang, isLang } from '../i18n/useLang'
import { dictionaries } from '../i18n/dictionary'

export const LangLayout = () => {
  const { lang } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    if (!isLang(lang)) return
    document.documentElement.lang = lang
    document.title = dictionaries[lang].meta.title
  }, [lang])

  // Po zmianie podstrony zacznij od góry
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Adres bez języka (np. /campaign) → dopisz język
  if (!isLang(lang)) return <Navigate to={`/${detectLang()}${pathname}`} replace />

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
