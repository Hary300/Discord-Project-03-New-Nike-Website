import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import type { NavLink } from '@/data/01-megaMenuData';
import type { ComponentPropsWithoutRef } from 'react';

const ListItem = ({
  title,
  navLinks,
  ...props
}: ComponentPropsWithoutRef<'li'> & {
  navLinks: NavLink[];
}) => {
  return (
    <li {...props} className='mb-4 break-inside-avoid'>
      <NavigationMenuLink asChild>
        <div className='flex flex-col gap-4 text-sm'>
          <div className='leading-none font-bold'>{title}</div>
          <ul className='flex flex-col gap-3 text-muted-foreground'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className='hover:underline cursor-pointer click-animation '
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
