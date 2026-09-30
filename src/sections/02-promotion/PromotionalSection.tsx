import SectionWrapper from '@/components/layouts/SectionWrapper';
import PromoOne from './components/PromoOne';
import PromoTwo from './components/PromoTwo';
import PromoThree from './components/PromoThree';

const PromotionalSection = () => {
  return (
    <SectionWrapper
      sectionId='promotion'
      className='py-12.5  flex flex-col gap-19.25 px-0 sm:px-0 lg:px-0 xl:px-0'
    >
      <PromoOne />
      <PromoTwo />
      <PromoThree />
    </SectionWrapper>
  );
};

export default PromotionalSection;
