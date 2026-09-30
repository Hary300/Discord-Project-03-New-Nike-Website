import { promotionalSectionData } from '@/data/02-promotionalData';

const PromoOne = () => {
  const promotions = promotionalSectionData.promotions;
  const promotionOne = promotions[0];
  const prefix = promotionOne.title.split('AJ9');

  return (
    <div className='px-4 sm:px-10 lg:px-15 xl:px-30 flex flex-col lg:flex-row lg:justify-start gap-10 lg:items-center w-full font-Oswald font-bold h-auto'>
      <div className='z-10 flex '>
        <h2 className='text-[clamp(2.8125rem,4.39vw,4.0625rem)] xl:text-[clamp(3.6875rem,4.61vw,5rem)] font-extrabold text-black max-w-120 uppercase tracking-wider '>
          {prefix}{' '}
          <div className='flex gap-2 items-center'>
            <span>AJ9</span>
            <a
              href='#'
              className='bg-[#0f5323] hover:bg-[#0b3e1a] text-white inline-flex leading-none p-1.5'
            >
              {promotionOne.cta.text}
            </a>
          </div>
        </h2>
      </div>

      <div className='flex items-center justify-end gap-10 lg:gap-0'>
        <div className='max-w-65 xl:max-w-70 lg:-ml-15'>
          <img
            src={promotionOne.modelImage?.src}
            alt={promotionOne.modelImage?.alt}
            className='object-contain'
          />
        </div>

        <div className='z-10 max-w-90 xl:max-w-100 lg:ml-10'>
          <img
            src={promotionOne.productImage.src}
            alt={promotionOne.productImage.alt}
            className='w-full object-contain drop-shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default PromoOne;
