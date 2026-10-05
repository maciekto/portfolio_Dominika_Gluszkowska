import { motion } from 'framer-motion'
import { photos } from '../data/photos'
import { useLang } from '../i18n/useLang'
import { AiBadge } from '../components/ui/AiBadge'

const ease = [0.22, 1, 0.36, 1] as const

export const Hero = () => {
  const { t } = useLang()
  return (
    <section id="top" className="relative bg-ivory text-espresso min-h-svh px-5 md:px-10 pt-24 pb-10 md:pb-12 flex flex-col">
      <h1 className="sr-only">Portfolio – Dominika Głuszkowska</h1>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="md:col-span-4 flex flex-col gap-6 md:pb-6"
          aria-hidden
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em]">{t.hero.welcome}</p>
          <span className="font-luxury uppercase leading-[0.8] text-[30vw] md:text-[11vw]">{t.hero.port}</span>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
          className="relative md:col-span-4 w-3/4 md:w-full mx-auto"
        >
          {photos.hero.ai && <AiBadge />}
          <img
            src={photos.hero.src}
            alt={t.alt.hero}
            className="w-full aspect-[3/4] object-cover md:max-h-[78svh]"
          />
        </motion.figure>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease }}
          className="md:col-span-4 flex flex-col items-end gap-6 md:self-start md:pt-6"
          aria-hidden
        >
          <span className="font-luxury uppercase leading-[0.8] text-[30vw] md:text-[11vw]">{t.hero.folio}</span>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em]">Dominika Głuszkowska</p>
        </motion.div>
      </div>

      <div className="mt-10 flex justify-between gap-6 text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-70">
        <span>{t.hero.tagline}</span>
        <a href="#chapters" className="shrink-0 hover:opacity-60 transition-opacity">{t.hero.scroll}</a>
      </div>
    </section>
  )
}
