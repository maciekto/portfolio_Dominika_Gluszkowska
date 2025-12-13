import { AnimatedSection } from '../components/ui/AnimatedSection';
import auraProduct from '../assets/images/6.png'; 
import auraBottle from '../assets/images/7.png';
import vbrntModel from '../assets/images/8.png'; // Pani na siłowni

export const Branding = () => {
  return (
    <div className="bg-[#111] text-white py-20">
      
      {/* AURA Section - Jasne tło wewnątrz ciemnej sekcji lub po prostu grid */}
      <div className="container mx-auto px-4 mb-32">
        <div className="flex flex-col items-center mb-16">
            <h2 className="font-luxury text-6xl text-white">aura</h2>
            <p className="text-gray-400 tracking-[0.3em] text-xs mt-2 uppercase">Natural Cosmetics</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
             <AnimatedSection className="bg-[#f3f0eb] p-10 flex items-center justify-center min-h-[500px]">
                <img src={auraProduct} alt="Cream Jar" className="max-w-[60%] object-contain drop-shadow-xl" />
             </AnimatedSection>
             <AnimatedSection delay={0.2} className="bg-[#f3f0eb] p-10 flex items-center justify-center min-h-[500px]">
                <img src={auraBottle} alt="Bottle" className="max-w-[40%] object-contain drop-shadow-xl" />
             </AnimatedSection>
        </div>
      </div>

      {/* VBRNT Section */}
      <div className="relative w-full">
         <div className="container mx-auto px-4 py-10 text-center">
             <h2 className="font-bold text-5xl italic uppercase tracking-tighter mb-10">VBRNT Sport</h2>
         </div>
         <AnimatedSection>
             <div className="w-full h-[80vh] relative">
                 <img src={vbrntModel} alt="Sportswear Model" className="w-full h-full object-cover object-top" />
                 <div className="absolute bottom-10 left-10">
                    <h3 className="text-white text-8xl font-black italic opacity-20">ACTIVE</h3>
                 </div>
             </div>
         </AnimatedSection>
      </div>

    </div>
  );
};