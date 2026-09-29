import nikeLogo from '@/assets/images/logo/nikeLogo.png';
import converseLogo from '@/assets/images/logo/converseLogo.png';
import airjordanLogo from '@/assets/images/logo/airjordanLogo.png';
import hurleyLogo from '@/assets/images/logo/hurleyLogo.png';
import cartIcon from '@/assets/images/cart.png';

interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
  url: string;
}

interface UserNavItem {
  id: string;
  label: string;
  url: string;
}

interface Cart {
  cartIcon: string;
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
      logoUrl: nikeLogo,
      url: 'https://www.nike.com',
    },
    {
      id: 'converse',
      name: 'Converse',
      logoUrl: converseLogo,
      url: 'https://www.converse.com',
    },
    {
      id: 'jordan',
      name: 'Jordan',
      logoUrl: airjordanLogo,
      url: 'https://www.nike.com/jordan',
    },
    {
      id: 'hurley',
      name: 'Hurley',
      logoUrl: hurleyLogo,
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
    cartIcon: cartIcon,
    url: '/cart',
  },
};
