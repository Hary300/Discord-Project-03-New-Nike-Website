import nikeLogo from '@/assets/images/logo/nikeLogo.png';
import converseLogo from '@/assets/images/logo/converseLogo.png';
import airjordanLogo from '@/assets/images/logo/airjordanLogo.png';
import hurleyLogo from '@/assets/images/logo/hurleyLogo.png';
import cartIcon from '@/assets/images/cart.png';

interface BrandItem {
  id: string;
  name: string;
  logoSrc: string;
  altText: string;
  url: string;
}

interface UserNavItem {
  id: string;
  label: string;
  url: string;
}

interface Cart {
  cartIconSrc: string;
  altText: string;
  url: string;
}

interface HeaderData {
  brands: BrandItem[];
  userNavigation: UserNavItem[];
  cart: Cart;
}

export const headerData: HeaderData = {
  brands: [
    {
      id: 'nike',
      name: 'Nike',
      logoSrc: nikeLogo,
      altText: 'Nike Swoosh Logo',
      url: 'https://www.nike.com',
    },
    {
      id: 'converse',
      name: 'Converse',
      logoSrc: converseLogo,
      altText: 'Converse Star Logo',
      url: 'https://www.converse.com',
    },
    {
      id: 'jordan',
      name: 'Jordan',
      logoSrc: airjordanLogo,
      altText: 'Air Jordan Jumpman Logo',
      url: 'https://www.nike.com/jordan',
    },
    {
      id: 'hurley',
      name: 'Hurley',
      logoSrc: hurleyLogo,
      altText: 'Hurley Logo',
      url: 'https://www.hurley.com',
    },
  ],
  userNavigation: [
    {
      id: 'login',
      label: 'Log In',
      url: '/login',
    },
    {
      id: 'help',
      label: 'Help',
      url: '/help',
    },
  ],
  cart: {
    cartIconSrc: cartIcon,
    altText: 'cart icon',
    url: '/cart',
  },
};
