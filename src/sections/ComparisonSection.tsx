import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// Import your two images
import image1 from '../assets/images/comparision-image1.png'; // The "Before" or Left image
import image2 from '../assets/images/comparision-image2.png'; // The "After" or Right image
import { AnimatedSection } from '../components/ui/AnimatedSection';

export const ComparisonSection = () => {
  return (
    <AnimatedSection className="w-full flex items-center justify-center bg-[#F8F8F8]">
      
      {/* Container for the slider */}
      <div className="w-full">
        
        <ReactCompareSlider
          // 1. The main interaction wrapper
          className="w-full h-[70vh] md:h-full overflow-hidden"
          
          // 2. The First Image (Left Side)
          itemOne={
            <ReactCompareSliderImage 
              src={image1} 
              srcSet={image1} 
              alt="Image one" 
              style={{ objectFit: 'cover', height: '100%' }} // Ensures image fills height
            />
          }
          
          // 3. The Second Image (Right Side)
          itemTwo={
            <ReactCompareSliderImage 
              src={image2} 
              srcSet={image2} 
              alt="Image two" 
              style={{ objectFit: 'cover', height: '100%' }} // Ensures image fills height
            />
          }

          // 4. Customizing the "Round Slider" Handle
          handle={
            <div className="h-full w-0.5 md:w-1 bg-white absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              {/* The Round Button in the center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-12 h-12 md:w-20 md:h-20 
                  rounded-full flex items-center justify-center 
                  shadow-lg text-white cursor-ew-resize pointer-events-auto
                  
                  /* GLASS EFFECT CLASSES */
                  bg-white/20 
                  backdrop-blur-md 
                  border border-white/40">
                {/* Simple Arrows Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" transform="rotate(-90 12 12)" />
                </svg>
              </div>
            </div>
          }
        />
        
      </div>
    </AnimatedSection>
  );
};