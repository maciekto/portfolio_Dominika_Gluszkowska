import { Photo } from '../components/ui/Photo'
import { photos } from '../data/photos'

export const EcommerceGallery = () => (
  <section className="bg-mist text-espresso px-5 md:px-10 pb-24 md:pb-40 flex flex-col gap-12 md:gap-20">
    <Photo data={photos.laptop} aspect="aspect-[4/3] md:aspect-[16/9]" index="01" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <Photo data={photos.mockup1} index="02" />
      <Photo data={photos.mockup2} index="03" delay={0.15} />
    </div>
  </section>
)
