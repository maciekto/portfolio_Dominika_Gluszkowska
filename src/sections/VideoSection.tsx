import { useState } from 'react';
import video from '../assets/videos/video1.mp4';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const VideoSection = () => {
  // 1. Create state to track loading
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  return (
    <AnimatedSection className="relative">
      
      {/* 2. LOADER OVERLAY */}
      {/* conditionally render this div only if isLoading is true */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm">
          {/* Simple CSS Spinner */}
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

      {/* 3. VIDEO ELEMENT */}
      <video 
        className={`h-[90vh] w-full object-cover md:object-contain md:h-auto transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        autoPlay 
        loop 
        muted 
        playsInline
        // 4. This event fires when the first frame is ready
        onLoadedData={handleVideoLoaded}
      >
        <source src={video} type="video/mp4" />
      </video>
      
    </AnimatedSection>
  );
};

export default VideoSection;