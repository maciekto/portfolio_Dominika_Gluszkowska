import { AnimatedSection } from './ui/AnimatedSection'
import { CONTACT_HREF } from '../data/contact'
import { useLang } from '../i18n/useLang'

/** Sekcja kontaktu – ostatnia na stronie głównej, prowadzi do niej zakładka „Kontakt”. */
export const ContactCta = () => {
  const { t } = useLang()
  return (
    <section id="contact" className="scroll-mt-0 bg-cognac text-ivory px-5 md:px-10 py-20 md:py-32">
      <AnimatedSection className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-[0.3em]">
            <span>{t.contact.label}</span>
            <span className="h-px w-10 bg-current opacity-50" />
          </div>
          <h2 className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[7vw]">{t.contact.title}</h2>
          <p className="text-sm md:text-base opacity-80">{t.contact.text}</p>
        </div>
        <div className="md:col-span-4 flex md:justify-end">
          <a
            href={CONTACT_HREF}
            className="group inline-flex items-center gap-4 rounded-full bg-ivory text-espresso px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm uppercase tracking-[0.3em] hover:bg-espresso hover:text-ivory transition-colors"
          >
            {t.contact.button}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
