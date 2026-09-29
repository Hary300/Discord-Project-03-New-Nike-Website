import redRunningShoesImg from '@/assets/images/poducts/nikeRedShoe.png';
import basketballPlayerImg from '@/assets/images/model/basketballPlayer.png';
import hurleyFlipFlopsImg from '@/assets/images/poducts/filpFlop.png';
import surferActionImg from '@/assets/images/model/surfer.png';
import converseHighTopImg from '@/assets/images/poducts/converseShoe.png';
import skateboarderActionImg from '@/assets/images/model/skater.png';

interface ImageAsset {
  src: string;
  alt: string;
}

interface CTAButton {
  text: string;
  url: string;
}

interface PromotionCard {
  id: string;
  title: string;
  subtitle?: string;
  cta: CTAButton;
  productImage: ImageAsset;
  actionImage?: ImageAsset;
}

interface PromotionalSectionData {
  promotions: PromotionCard[];
}

export const promotionalSectionData: PromotionalSectionData = {
  promotions: [
    {
      id: 'promo-aj9',
      title: 'THE NEW AJ9',
      cta: {
        text: 'BUY NOW',
        url: '/promo/aj9',
      },
      productImage: {
        src: redRunningShoesImg,
        alt: 'Red Nike Running Shoes',
      },
      actionImage: {
        src: basketballPlayerImg,
        alt: 'Basketball Player Jumping for a Dunk',
      },
    },
    {
      id: 'promo-hurley',
      title: 'HURLEY FLIP-FLOPS',
      cta: {
        text: 'BUY NOW',
        url: '/promo/hurley-flip-flops',
      },
      productImage: {
        src: hurleyFlipFlopsImg,
        alt: 'Black Hurley Flip-Flops',
      },
      actionImage: {
        src: surferActionImg,
        alt: 'Surfer Riding a Wave',
      },
    },
    {
      id: 'promo-converse',
      title: 'CONVERSE SHOES',
      cta: {
        text: 'BUY NOW',
        url: '/promo/converse-shoes',
      },
      productImage: {
        src: converseHighTopImg,
        alt: 'Black and White High-Top Converse Shoes',
      },
      actionImage: {
        src: skateboarderActionImg,
        alt: 'Skateboarder Performing a Mid-Air Trick',
      },
    },
  ],
};
