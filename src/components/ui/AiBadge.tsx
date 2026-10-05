import { useLang } from '../../i18n/useLang'

/** Mała etykieta „AI” w rogu zdjęcia lub filmu. */
export const AiBadge = ({ className = '' }: { className?: string }) => {
  const { t } = useLang()
  return (
    <span
      title={t.common.aiLegend}
      className={`absolute top-3 left-3 md:top-4 md:left-4 z-10 rounded-full bg-ivory/85 backdrop-blur-sm text-espresso px-2.5 py-1 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.25em] ${className}`}
    >
      {t.common.aiBadge}
      <span className="sr-only"> – {t.common.aiLegend}</span>
    </span>
  )
}
