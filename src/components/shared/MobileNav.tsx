import { FiMenu } from 'react-icons/fi';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { headerData } from '@/data/headerData';
import MobileMegaMenu from './MobileMegaMenu';

const MobileNav = () => {
  const userNav = headerData.userNavigation;
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='px-0 h-auto rounded-0 flex'>
            <FiMenu className='size-5' />
          </Button>
        </SheetTrigger>
        <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
          <div className='flex flex-col gap-4 p-8'>
            {userNav.map((item) => (
              <SheetClose key={item.id} asChild>
                <p className='cursor-pointer hover:underline'>{item.label}</p>
              </SheetClose>
            ))}
            <MobileMegaMenu />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
