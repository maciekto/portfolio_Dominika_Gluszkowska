import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const kalieb = localFont({
  src: '../assets/fonts/KaliebLuxuryDemo-Regular.otf',
  variable: '--font-kalieb',
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  // Oś rozmiaru optycznego – tak jak wcześniej z Google Fonts (opsz 14..32)
  axes: ['opsz'],
  variable: '--font-inter',
  display: 'swap',
})
