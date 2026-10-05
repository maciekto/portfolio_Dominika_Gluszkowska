import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// Strona „/” tylko przekierowuje na /pl albo /en. Na serwerze robi to już nginx (po Accept-Language),
// ten plik jest zapasem, np. dla trybu deweloperskiego.
export const metadata: Metadata = {
  title: 'Dominika Głuszkowska – Portfolio',
  robots: { index: false, follow: true },
}

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
