import { Hero } from './sections/Hero';
import mockup1 from './assets/images/mockup-1.png';
import mockup2 from './assets/images/mockup-2.png';
import mockup3 from './assets/images/mockup-3.png';
import mockup4 from './assets/images/mockup-4.png';
import mockup5 from './assets/images/mockup-5.png';
import mockup6 from './assets/images/mockup-6.png';
import mockup7 from './assets/images/mockup-7.png';
import mockup8 from './assets/images/mockup-8.png';
import mockup9 from './assets/images/mockup-9.png';

import footerBg from './assets/images/footer-bg.png';

import { HeroBottom } from './sections/HeroBottom';
import { TwoImageSection } from './sections/TwoImageSection';
import VideoSection from './sections/VideoSection';
import { ComparisonSection } from './sections/ComparisonSection';

function App() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] overflow-hidden selection:bg-black selection:text-white">
      
      <Hero />
      <HeroBottom />

      <TwoImageSection 
        image1={mockup1}
        image2={mockup2}
        flexDirectionMobile='flex-col-reverse'
      />

      <VideoSection />

      <ComparisonSection />
      
      <TwoImageSection 
        image1={mockup3}
        image2={mockup4}
        flexDirectionMobile='flex-col-reverse'
      />
      <TwoImageSection 
        image1={mockup5}
        image2={mockup6}
        flexDirectionMobile='flex-col-reverse'
      />
      <div className='h-[35vh] w-full md:h-auto'>
        <img src={mockup9} alt="" className='object-cover md:object-contain h-full'/>
      </div>
      <TwoImageSection 
        image1={mockup7}
        image2={mockup8}
        flexDirectionMobile='flex-col-reverse'
      />

      {/* Prosty Footer */}
      <footer 
        className="bg-cover bg-center text-black text-xs md:text-base text-center py-4"
        style={{
          backgroundImage: `url(${footerBg})`
        }}
      >
        Made by Dominika Głuszkowska
      </footer>
      
    </main>
  );
}

export default App;