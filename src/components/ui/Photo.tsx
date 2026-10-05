import { motion } from 'framer-motion'
import type { PhotoData } from '../../data/photos'
import { useLang } from '../../i18n/useLang'
import { AiBadge } from './AiBadge'

interface Props {
  data: PhotoData
  /** Nadpisanie proporcji/wysokości ramki, np. "h-[60svh] md:h-auto md:aspect-[16/9]" */
  aspect?: string
  className?: string
  index?: string
  delay?: number
}

export const Photo = ({ data, aspect, className = '', index, delay = 0 }: Props) => {
  const { t } = useLang()
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <div className={`relative overflow-hidden ${aspect ?? data.aspect}`}>
        {data.ai && <AiBadge />}
        <motion.img
          src={data.src}
          alt={t.alt[data.alt]}
          loading="lazy"
          decoding="async"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
          style={data.focus ? { objectPosition: data.focus } : undefined}
        />
      </div>
      {index && (
        <figcaption className="mt-3 text-right text-[10px] md:text-[11px] uppercase tracking-[0.25em] opacity-60">
          {index}
        </figcaption>
      )}
    </motion.figure>
  )
}
