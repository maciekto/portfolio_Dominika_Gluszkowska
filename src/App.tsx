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

import snow from './assets/images/campaign/snow.jpg';
import woodTote from './assets/images/campaign/wood-tote.jpg';
import woodLeather from './assets/images/campaign/wood-leather.jpg';
import greenBoots from './assets/images/campaign/green-boots.jpg';
import greenDuo from './assets/images/campaign/green-duo.jpg';
import checkerMan from './assets/images/campaign/checker-man.jpg';
import gardenMan from './assets/images/campaign/garden-man.jpg';
import gardenDuo from './assets/images/campaign/garden-duo.jpg';
import bag from './assets/images/campaign/bag.jpg';
import sandals from './assets/images/campaign/sandals.jpg';
import portrait from './assets/images/campaign/portrait.jpg';
import skater from './assets/images/campaign/skater.jpg';
import gardenDress from './assets/images/campaign/garden-dress.jpg';

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
        <img src={mockup9} alt="" className='object-cover md:object-contain h-full w-full'/>
      </div>
      <TwoImageSection 
        image1={mockup7}
        image2={mockup8}
        flexDirectionMobile='flex-col-reverse'
      />

      {/* Kampania modowa */}
      <div className='h-[35vh] w-full md:h-auto'>
        <img src={snow} alt="" className='object-cover md:object-contain h-full w-full'/>
      </div>
      <TwoImageSection 
        image1={woodTote}
        image2={woodLeather}
        flexDirectionMobile='flex-col-reverse'
      />
      <TwoImageSection 
        image1={greenBoots}
        image2={greenDuo}
        flexDirectionMobile='flex-col-reverse'
      />
      <TwoImageSection 
        image1={checkerMan}
        image2={gardenMan}
        flexDirectionMobile='flex-col-reverse'
      />
      <div className='h-[35vh] w-full md:h-auto'>
        <img src={gardenDuo} alt="" className='object-cover md:object-contain h-full w-full'/>
      </div>
      <TwoImageSection 
        image1={bag}
        image2={sandals}
        flexDirectionMobile='flex-col-reverse'
      />
      <TwoImageSection 
        image1={portrait}
        image2={skater}
        flexDirectionMobile='flex-col-reverse'
      />
      <div className='h-[35vh] w-full md:h-auto'>
        <img src={gardenDress} alt="" className='object-cover md:object-contain h-full w-full'/>
      </div>

      {/* Prosty Footer */}
      <footer 
        className="bg-cover bg-center text-black text-xs md:text-base text-center py-4 uppercase"
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