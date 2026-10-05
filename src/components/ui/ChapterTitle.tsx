import { AnimatedSection } from './AnimatedSection'

interface Props {
  number: string
  label: string
  title: string
  className?: string
}

export const ChapterTitle = ({ number, label, title, className = '' }: Props) => (
  <AnimatedSection className={`flex flex-col gap-4 ${className}`}>
    <div className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.3em]">
      <span>{number}</span>
      <span className="h-px w-10 bg-current opacity-50" />
      <span>{label}</span>
    </div>
    <h2 className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[9vw]">{title}</h2>
  </AnimatedSection>
)
