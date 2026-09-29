import { headerData } from '@/data/headerData';
import { cn } from 'cn';
import MobileNav from '../shared/MobileNav';

const Header = () => {
  const brands = headerData.brands;
  const userNav = headerData.userNavigation;
  const cart = headerData.cart;
  return (
    <header className='flex justify-between items-center px-4 sm:px-10 lg:px-15 xl:px-30 py-2.5'>
      <div className='flex gap-2 md:gap-4 items-center'>
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className={cn(
              'rounded-full shrink-0 size-10 flex justify-center items-center border-2 click-animation',
              index === 0 && 'border-0'
            )}
          >
            <img
              src={brand.logoSrc}
              alt={brand.altText}
              className={index !== 0 ? 'size-6' : ''}
            />
          </div>
        ))}
      </div>
      <div className='flex gap-4 md:gap-8 items-center'>
        <div className='hidden md:flex gap-4 items-center '>
          {userNav.map((item) => (
            <p
              key={item.id}
              className='hover:underline font-bold text-sm click-animation'
            >
              {item.label}
            </p>
          ))}
        </div>
        <div className='cursor-pointer'>
          <img src={cart.cartIconSrc} alt={cart.altText} className='w-7' />
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
