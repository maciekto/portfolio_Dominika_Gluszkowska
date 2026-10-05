import { motion } from 'framer-motion'

interface Props {
  src: string
  alt: string
  /** Klasa proporcji, np. aspect-[3/4] */
  aspect?: string
  className?: string
  caption?: string
  index?: string
  delay?: number
}

export const Photo = ({ src, alt, aspect = '', className = '', caption, index, delay = 0 }: Props) => (
  <motion.figure
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    <div className={`overflow-hidden ${aspect}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full object-cover"
      />
    </div>
    {(caption || index) && (
      <figcaption className="mt-3 flex justify-between gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.25em] opacity-70">
        <span>{caption}</span>
        <span>{index}</span>
      </figcaption>
    )}
  </motion.figure>
)
