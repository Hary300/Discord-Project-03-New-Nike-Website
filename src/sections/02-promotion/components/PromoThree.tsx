import { promotionalSectionData } from '@/data/02-promotionalData';

const PromoThree = () => {
  const promotions = promotionalSectionData.promotions;
  const promotionThree = promotions[2];
  const prefix = promotionThree.title.split('SHOES');
  console.log(prefix);

  return (
    <div className='relative flex flex-col lg:flex-row lg:justify-between gap-10 lg:items-start font-Oswald font-bold h-auto max-w-310 pl-4 pr-4 sm:pl-10 sm:pr-10 lg:pl-15 lg:pr-15 xl:pl-30 xl:pr-0'>
      <div className='w-[clamp(12.5rem,62.5vw,22.5rem)] sm:w-auto sm:max-w-115'>
        <img
          src={promotionThree.modelImage?.src}
          alt={promotionThree.modelImage?.alt}
          className='object-contain'
        />
      </div>

      <div className='z-10 flex sm:min-w-100 '>
        <h2 className='text-[clamp(3.25rem,5.08vw,4.1875rem)] xl:text-[clamp(3.6875rem,4.61vw,5rem)] font-extrabold text-black  uppercase tracking-widest flex flex-col items-end ml-auto'>
          {prefix}
          <div className='flex gap-2 items-end flex-col-reverse sm:flex-row sm:items-center'>
            <a
              href='#'
              className='items-center bg-[#0f5323] hover:bg-[#0b3e1a] text-white leading-none p-1.5 w-fit'
            >
              {promotionThree.cta.text}
            </a>
            <span>SHOES</span>
          </div>
        </h2>
      </div>

      <div className='absolute z-10 max-w-35 sm:max-w-50 md:max-w-70 xl:max-w-100 bottom-[70%] md:bottom-[50%] lg:bottom-[20%] xl:bottom-[-5%] right-[5%] xl:right-[clamp(-5%,calc(12.02px-4vw),5%)]'>
        <img
          src={promotionThree.productImage.src}
          alt={promotionThree.productImage.alt}
        />
      </div>
    </div>
  );
};

export default PromoThree;
