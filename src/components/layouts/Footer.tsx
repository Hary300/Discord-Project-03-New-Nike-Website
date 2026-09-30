import { footerData } from '@/data/footerData';

const Footer = () => {
  const { copyright, featuredLinks, sections, socials } = footerData;
  return (
    <footer className='flex flex-col gap-6 py-6 sm:gap-12 sm:py-12 bg-dark-gray text-white'>
      <div className='px-4 sm:px-10 lg:px-15 xl:px-30 flex flex-col md:flex-row md:justify-between items-center gap-10'>
        <div className='flex flex-col sm:flex-row gap-8 items-start sm:justify-center md:justify-between w-full max-w-150'>
          <ul className='flex flex-col gap-2'>
            {featuredLinks.map((link) => (
              <li key={link.id} className='hover:underline cursor-pointer'>
                {link.label}
              </li>
            ))}
          </ul>
          {sections.map((section) => (
            <div key={section.title} className='flex flex-col gap-2'>
              <h3 className='font-bold'>{section.title}</h3>
              <ul className='flex flex-col gap-2'>
                {section.links.map((link) => (
                  <li key={link.id} className='hover:underline cursor-pointer'>
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex gap-4'>
          {socials.map((social) => {
            const Icon = social.iconName;
            return (
              <a href={social.url} target='_blank' rel='noopener noreferrer'>
                <Icon className='size-12' />
              </a>
            );
          })}
        </div>
      </div>

      <div className='h-px w-full bg-light-gray' />

      <p className='px-4 sm:px-10 lg:px-15 xl:px-30 '>{copyright}</p>
    </footer>
  );
};

export default Footer;
