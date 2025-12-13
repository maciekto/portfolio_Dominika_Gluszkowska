import { AnimatedSection } from '../components/ui/AnimatedSection';
import modelWhite from '../assets/images/4.png'; // Pani w białym
import legsImg from '../assets/images/5.png';   // Nogi w butach

export const FashionGrid = () => {
  return (
    <div className="py-20 bg-white">
      {/* Full width Video/Image Hero */}
      <AnimatedSection>
        <div className="w-full h-[80vh] overflow-hidden relative group">
          <img 
            src={modelWhite} 
            alt="Fashion Editorial" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
             </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Split Shoes Section */}
      <section className="container mx-auto px-4 py-32">
        <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="font-luxury text-5xl md:text-7xl mb-6">Trends <br/> & Comfort</h2>
                    <p className="text-gray-600 max-w-md leading-relaxed">
                        Kampania reklamowa skupiająca się na połączeniu wygody z najnowszymi trendami mody ulicznej.
                    </p>
                </div>
                <div className="flex-1 order-1 md:order-2">
                    <img src={legsImg} alt="Shoes Campaign" className="w-full max-w-lg mx-auto md:ml-auto" />
                </div>
            </div>
        </AnimatedSection>
      </section>
    </div>
  );
};