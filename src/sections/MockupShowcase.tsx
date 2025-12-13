import { AnimatedSection } from '../components/ui/AnimatedSection';

// Import zdjęć (dopasuj numery do plików w folderze)
import laptopImg from '../assets/images/1.png'; // Zakładam że to laptop
import phonesImg from '../assets/images/2.png'; // Zakładam że to telefony
import detailImg from '../assets/images/3.png'; // Detal appki

export const MockupShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-20 space-y-32">
      
      {/* Sekcja Laptopa - MUKLUKI */}
      <AnimatedSection>
        <div className="relative flex justify-center items-center">
          {/* Opcjonalne koło w tle jak w designie */}
          <div className="absolute w-[80vw] h-[80vw] bg-white rounded-full blur-3xl opacity-50 -z-10" />
          <img 
            src={laptopImg} 
            alt="Web Design Mockup" 
            className="w-full max-w-4xl object-contain drop-shadow-2xl"
          />
        </div>
        <div className="text-center mt-8">
          <h2 className="font-luxury text-4xl">Mukluki Store</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase mt-2">Web Design / E-commerce</p>
        </div>
      </AnimatedSection>

      {/* Sekcja Mobile - CCC */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <AnimatedSection delay={0.1}>
          <img src={phonesImg} alt="Mobile App Views" className="w-full rounded-xl shadow-lg" />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <img src={detailImg} alt="App Detail" className="w-full rounded-xl shadow-lg" />
          <div className="mt-6 md:text-left text-center">
             <h2 className="font-luxury text-4xl">CCC Mobile App</h2>
             <p className="text-gray-500 text-sm tracking-widest uppercase mt-2">UI/UX Design</p>
          </div>
        </AnimatedSection>
      </div>

    </div>
  );
};