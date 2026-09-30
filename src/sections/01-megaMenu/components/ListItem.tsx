import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import type { Item } from '@/data/01-megaMenuData';
import type { ComponentPropsWithoutRef } from 'react';

const ListItem = ({
  title,
  Items,
  ...props
}: ComponentPropsWithoutRef<'li'> & {
  Items: Item[];
}) => {
  return (
    <li {...props} className='mb-4 break-inside-avoid'>
      <NavigationMenuLink asChild>
        <div className='flex flex-col gap-4 text-sm'>
          <div className='leading-none font-bold'>{title}</div>
          <ul className='flex flex-col gap-3 text-muted-foreground'>
            {Items.map((item) => (
              <li
                key={item.id}
                className='hover:underline cursor-pointer click-animation '
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuLink>
    </li>
  );
};

export default ListItem;
