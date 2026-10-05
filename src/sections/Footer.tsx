import { AnimatedSection } from '../components/ui/AnimatedSection'

export const Footer = () => (
  <footer className="bg-espresso text-ivory px-5 md:px-10 pt-24 md:pt-40 pb-8 overflow-hidden">
    <AnimatedSection>
      <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">Thank you for watching</p>
      <p className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[11vw] mt-6">Dominika</p>
      <p className="font-luxury uppercase leading-[0.85] text-[13vw] md:text-[11vw] text-right">Głuszkowska</p>
    </AnimatedSection>
    <div className="mt-16 md:mt-24 flex justify-between text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-60">
      <span>Made by Dominika Głuszkowska</span>
      <a href="#top" className="hover:opacity-60 transition-opacity">Back to top ↑</a>
    </div>
  </footer>
)
