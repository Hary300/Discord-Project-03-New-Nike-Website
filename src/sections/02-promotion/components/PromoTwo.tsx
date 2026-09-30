import { promotionalSectionData } from '@/data/02-promotionalData';

const PromoTwo = () => {
  const promotions = promotionalSectionData.promotions;
  const promotionTwo = promotions[1];
  const prefix = promotionTwo.title.split('FLIP-FLOPS');

  return (
    <div className='relative flex flex-col lg:flex-row lg:justify-between gap-10 lg:items-end w-full font-Oswald font-bold h-auto'>
      <div className='w-[clamp(12.5rem,62.5vw,22.5rem)] sm:w-auto sm:max-w-115'>
        <img
          src={promotionTwo.modelImage?.src}
          alt={promotionTwo.modelImage?.alt}
          className='object-contain'
        />
      </div>

      <div className='z-10 flex px-4 sm:pl-0 sm:pr-10 lg:pr-15 xl:pr-30 ml-auto lg:ml-0'>
        <h2 className='text-[clamp(3.25rem,5.08vw,4.1875rem)] xl:text-[clamp(3.6875rem,4.61vw,5rem)] font-extrabold text-black  uppercase tracking-widest flex flex-col sm:items-start md:items-center items-end'>
          <a
            href='#'
            className='bg-[#0f5323] hover:bg-[#0b3e1a] text-white inline-flex leading-none p-1.5 w-fit'
          >
            {promotionTwo.cta.text}
          </a>
          <div className='flex flex-col sm:flex-row items-end sm:gap-2'>
            <span>{prefix}</span>
            <span>FLIP-FLOPS</span>
          </div>
        </h2>
      </div>

      <div className='absolute z-10 max-w-35 sm:max-w-60 lg:max-w-70 top-[clamp(15%,calc(15%+5vw),20%)] sm:top-1/3 right-[5%] lg:right-[34%] xl:right-[45%] lg:top-[20%]'>
        <img
          src={promotionTwo.productImage.src}
          alt={promotionTwo.productImage.alt}
          className='w-full object-contain drop-shadow-lg'
        />
      </div>
    </div>
  );
};

export default PromoTwo;
