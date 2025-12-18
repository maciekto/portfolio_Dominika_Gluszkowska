import { AnimatedSection } from '../components/ui/AnimatedSection';

interface Props {
  image1: string;
  image2: string;
  flexDirectionMobile?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';
  flexDirectionPc?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';
}

// Define a map to include md:[option]
const pcDirectionMap: Record<string, string> = {
  'flex-row': 'md:flex-row',
  'flex-row-reverse': 'md:flex-row-reverse',
  'flex-col': 'md:flex-col',
  'flex-col-reverse': 'md:flex-col-reverse',
};

export const TwoImageSection = ({
  image1,
  image2,
  flexDirectionMobile = 'flex-col', // Default mobile
  flexDirectionPc = 'flex-row'        // Default PC
}: Props) => {
  
  // Get the PC class with md:[option]
  const pcClass = pcDirectionMap[flexDirectionPc];

  return (
    <div className={`
      flex 
      ${flexDirectionMobile} 
      ${pcClass} 
    `}>
      <AnimatedSection className='md:w-1/2'>
        <img src={image1} className="w-full" alt="" />
      </AnimatedSection>
      <AnimatedSection className='md:w-1/2'>
        <img src={image2} className="w-full" alt="" />
      </AnimatedSection>
    </div>
  );
};