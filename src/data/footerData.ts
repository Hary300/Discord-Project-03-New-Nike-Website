import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterestSquare,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import type { IconType } from 'react-icons/lib';

interface FooterLink {
  id: string;
  label: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: string;
  platform: string;
  iconName: IconType;
  url: string;
}

interface FooterData {
  featuredLinks: FooterLink[];
  sections: FooterSection[];
  socials: SocialLink[];
  copyright: string;
}

export const footerData: FooterData = {
  featuredLinks: [
    { id: 'find-store', label: 'FIND A STORE', url: '/find-a-store' },
    { id: 'signup-email', label: 'SIGN UP FOR AN EMAIL', url: '/email-signup' },
    { id: 'join-nike', label: 'JOIN NIKE+', url: '/nike-plus' },
    { id: 'site-feedback', label: 'SITE FEEDBACK', url: '/feedback' },
  ],
  sections: [
    {
      title: 'GET HELP',
      links: [
        {
          id: 'order-status',
          label: 'Order Status',
          url: '/help/order-status',
        },
        { id: 'delivery', label: 'Delivery', url: '/help/delivery' },
        { id: 'returns', label: 'Returns', url: '/help/returns' },
        {
          id: 'payment-options',
          label: 'Payment Options',
          url: '/help/payment-options',
        },
        { id: 'contact-us', label: 'Contact Us', url: '/help/contact-us' },
      ],
    },
    {
      title: 'ABOUT NIKE',
      links: [
        { id: 'news', label: 'News', url: '/about/news' },
        { id: 'careers', label: 'Careers', url: '/about/careers' },
        { id: 'investors', label: 'Investors', url: '/about/investors' },
      ],
    },
  ],
  socials: [
    {
      id: 'facebook',
      platform: 'Facebook',
      iconName: FaFacebook,
      url: 'https://facebook.com/nike',
    },
    {
      id: 'instagram',
      platform: 'Instagram',
      iconName: FaInstagramSquare,
      url: 'https://instagram.com/nike',
    },
    {
      id: 'x',
      platform: 'X (Twitter)',
      iconName: FaSquareXTwitter,
      url: 'https://x.com/nike',
    },
    {
      id: 'pinterest',
      platform: 'Pinterest',
      iconName: FaPinterestSquare,
      url: 'https://pinterest.com/nike',
    },
  ],
  copyright: '© 2026 Nike, Inc. All Rights Reserved',
};
