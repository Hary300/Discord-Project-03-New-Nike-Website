import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { megaMenuData } from '@/data/01-megaMenuData';
import ListItem from './ListItem';
import { cn } from 'cn';

const NavMenu = () => {
  const categories = megaMenuData.categories;
  return (
    <div className='hidden md:block'>
      <NavigationMenu className='border-y'>
        <NavigationMenuList>
          {categories.map((category) => (
            <NavigationMenuItem key={category.id}>
              <NavigationMenuTrigger className='cursor-pointer '>
                {category.label}
              </NavigationMenuTrigger>
              {category.sections && (
                <NavigationMenuContent className='flex justify-center'>
                  <ul
                    className={cn(
                      'w-fit',
                      category.sections.length === 4
                        ? 'sm:columns-4'
                        : 'sm:columns-5'
                    )}
                  >
                    {category.sections.map((section) => (
                      <ListItem
                        key={section.title}
                        title={section.title}
                        Items={section.items}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;

{
  /* 
          <NavigationMenuContent>
            <ul className='w-96'>
              <ListItem href='/docs' title='Introduction'>
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href='/docs/installation' title='Installation'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className='hidden md:flex'>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href='/docs'>Docs</Link>
          </NavigationMenuLink> */
}
