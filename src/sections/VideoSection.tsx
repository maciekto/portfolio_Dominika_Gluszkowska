import video from '../assets/videos/video1.mp4'
import { AnimatedSection } from '../components/ui/AnimatedSection'

const VideoSection = () => {
  return (
    <AnimatedSection>
      <video className='h-[90vh] w-full object-cover md:object-contain md:h-auto' autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </AnimatedSection>
  )
}

export default VideoSection