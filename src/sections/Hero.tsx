import { AnimatedSection } from '../components/ui/AnimatedSection';
import heroImagePc from '../assets/images/hero-bg-gradient.png'
import heroImageMobile from '../assets/images/hero-bg-mo-gradient.png'

export const Hero = () => {

  return (
    <section className="w-full bg-cover bg-center bg-no-repeat h-screen grid place-content-center text-center bg-(image:--bg-mobile) md:bg-(image:--bg-desktop)" 
    style={{
        '--bg-mobile': `url(${heroImageMobile})`,
        '--bg-desktop': `url(${heroImagePc})`,
      } as React.CSSProperties}
    >
      <AnimatedSection className='flex items-center flex-col gap-0 w-2xs md:w-xl xl:w-6xl'>

        <p className='text-xs uppercase md:text-base'>
          WELCOME TO MY
        </p>
        <h1 className="font-luxury text-9xl leading-[0.8] tracking-normal uppercase mt-10  md:hidden">
          Port<br />folio
        </h1>
        <h1 className="hidden font-luxury text-9xl leading-[0.8] tracking-normal uppercase mt-10 xl:mt-20 md:block md:text-[140px] xl:text-[280px]">
          Portfolio
        </h1>
        <p className="text-xs uppercase mt-2 xl:mt-8 text-themeBlack self-end md:text-base">
          Dominika Głuszkowska
        </p>
      </AnimatedSection>
    </section>
  );
};