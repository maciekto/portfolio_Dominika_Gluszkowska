'use client'

import { useEffect } from 'react'
import { detectLang } from '@/i18n/getDictionary'

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${detectLang()}${window.location.hash}`)
  }, [])
  return (
    <noscript>
      <a href="/pl">Polski</a> · <a href="/en">English</a>
    </noscript>
  )
}
