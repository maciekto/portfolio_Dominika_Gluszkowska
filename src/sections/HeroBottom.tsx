
import heroBottom from '../assets/images/hero-bottom-bg.png'
import heroBottomMobile from '../assets/images/hero-bottom-mo-bg.png'

export const HeroBottom = () => {
  return (
    <>
      <section className="block md:hidden w-full bg-cover bg-top h-[125vw] lg:h-screen bg-no-repeat" style={{backgroundImage: `url(${heroBottomMobile})`}}>

      </section>
      <section className="hidden w-full bg-cover bg-top h-screen bg-no-repeat md:block" style={{backgroundImage: `url(${heroBottom})`}}>

      </section>
    </>
  );
};