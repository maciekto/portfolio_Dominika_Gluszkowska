import aiBadge from '../../assets/icons/ai-badge.svg'
import { useLang } from '../../i18n/useLang'

/** Znaczek „AI” w rogu zdjęcia lub filmu (grafika: src/assets/icons/ai-badge.svg). */
export const AiBadge = ({ className = '' }: { className?: string }) => {
  const { t } = useLang()
  return (
    <span
      title={t.common.aiLegend}
      className={`absolute top-2 left-2 md:top-3 md:left-3 z-10 inline-flex rounded-full backdrop-blur-sm ${className}`}
    >
      <img src={aiBadge} alt="" aria-hidden className="h-3 md:h-4 w-auto select-none" draggable={false} />
      <span className="sr-only">{t.common.aiLegend}</span>
    </span>
  )
}
