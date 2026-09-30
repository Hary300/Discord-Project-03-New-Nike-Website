import {
  megaMenuData,
  type Category,
  type Section,
} from '@/data/01-megaMenuData';
import { useState } from 'react';
import { Button } from '../ui/button';
import { MdArrowBack } from 'react-icons/md';
import { cn } from 'cn';

const MobileMegaMenu = () => {
  const { categories } = megaMenuData;
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  return (
    <div className='w-full overflow-hidden border-t'>
      <div
        className={cn(
          'pt-4 flex w-[300%] transition-transform duration-300',
          selectedSection
            ? '-translate-x-2/3'
            : selectedCategory
              ? '-translate-x-1/3'
              : 'translate-x-0'
        )}
      >
        {/* PANEL 1 */}
        <div className='w-1/3 flex flex-col gap-4'>
          {categories.map((category) => (
            <Button
              variant='ghost'
              className='px-0 h-auto w-fit'
              onClick={() => {
                if (category.id === 'sportswear') return;
                setSelectedCategory(category);
              }}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* PANEL 2 */}
        <div className='w-1/3 flex flex-col gap-4'>
          {selectedCategory && (
            <div className='flex flex-col gap-4'>
              <Button
                variant='ghost'
                className='px-0 h-auto w-fit'
                onClick={() => setSelectedCategory(null)}
              >
                <MdArrowBack />
                <span>Back</span>
              </Button>
              {selectedCategory.sections?.map((section) => (
                <Button
                  key={section.title}
                  variant='ghost'
                  className='px-0 h-auto w-fit'
                  onClick={() => setSelectedSection(section)}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* PANEL 3 */}
        <div className='w-1/3 flex flex-col gap-4'>
          {selectedSection && (
            <div className='flex flex-col gap-4'>
              <Button
                variant='ghost'
                className='px-0 h-auto w-fit'
                onClick={() => setSelectedSection(null)}
              >
                <MdArrowBack />
                <span>Back</span>
              </Button>
              {selectedSection.items.map((item) => (
                <Button
                  key={item.id}
                  variant='ghost'
                  className='px-0 h-auto w-fit'
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMegaMenu;
