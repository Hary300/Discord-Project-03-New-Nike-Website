import SectionWrapper from '@/components/layouts/SectionWrapper';
import NavMenu from './components/NavMenu';

const MegaMenuSection = () => {
  return (
    <SectionWrapper
      sectionId='mega-menu'
      className=' px-0 sm:px-0 lg:px-0 xl:px-0 '
    >
      <NavMenu />
    </SectionWrapper>
  );
};

export default MegaMenuSection;
