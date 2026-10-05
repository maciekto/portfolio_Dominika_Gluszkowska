'use client'

import { useState } from 'react'
// Plik w public/ – Next nie importuje wideo jak obrazów
const video = '/videos/ai-fashion-film-white-dress.mp4'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { AiBadge } from '../components/ui/AiBadge'
import { VIDEO_IS_AI } from '../data/photos'
import { useLang } from '../i18n/useLang'

const VideoSection = ({ className = '' }: { className?: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLang()

  return (
    <AnimatedSection className={`relative ${className}`}>
      {VIDEO_IS_AI && <AiBadge />}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}
      <video
        className={`h-[90vh] w-full object-cover md:object-contain md:h-auto transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        autoPlay
        loop
        muted
        playsInline
        aria-label={t.alt.film}
        title={t.alt.film}
        onLoadedData={() => setIsLoading(false)}
      >
        <source src={video} type="video/mp4" />
      </video>
    </AnimatedSection>
  )
}

export default VideoSection
