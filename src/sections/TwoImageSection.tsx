import { AnimatedSection } from '../components/ui/AnimatedSection';




interface Props {
  image1: string;
  image2: string;
  flexDirectionMobile?: string;
  flexDirectionPc?: string;
}

export const TwoImageSection = ({
  image1,
  image2,
  flexDirectionMobile,
  flexDirectionPc
}: Props) => {
  return (
    <div className={`
      flex 
      ${flexDirectionMobile ? flexDirectionMobile : 'flex-col'}  
      md:${flexDirectionPc ? flexDirectionPc : 'flex-row'} `}>
      <AnimatedSection className='md:w-1/2'>
        <img src={image1} alt="" />
      </AnimatedSection>
      <AnimatedSection  className='md:w-1/2'>
        <img src={image2} alt="" />
      </AnimatedSection>
      

    </div>
  );
};