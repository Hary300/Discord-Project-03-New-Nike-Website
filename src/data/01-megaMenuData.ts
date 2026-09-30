export interface Item {
  id: string;
  label: string;
  url: string;
}

export interface Section {
  title: string;
  items: Item[];
}

export interface Category {
  id: string;
  label: string;
  url: string;
  sections?: Section[];
}

interface MegaMenuData {
  categories: Category[];
}

export const megaMenuData: MegaMenuData = {
  categories: [
    {
      id: 'men',
      label: 'MEN',
      url: '/men',
      sections: [
        {
          title: 'New & Featured',
          items: [
            {
              id: 'new-arrivals',
              label: 'New Arrivals',
              url: '/men/new-arrivals',
            },
            {
              id: 'best-sellers',
              label: 'Best Sellers',
              url: '/men/best-sellers',
            },
            {
              id: 'latest-drops',
              label: 'Latest Drops',
              url: '/men/latest-drops',
            },
            {
              id: 'nike-sportswear',
              label: 'Nike Sportswear',
              url: '/men/nike-sportswear',
            },
            {
              id: 'snkrs-calendar',
              label: 'SNKRS Launch Calendar',
              url: '/men/snkrs-launch-calendar',
            },
            {
              id: 'shop-all-sale',
              label: 'Shop All Sale',
              url: '/men/shop-all-sale',
            },
          ],
        },
        {
          title: 'Shoes',
          items: [
            { id: 'all-shoes', label: 'All Shoes', url: '/men/shoes' },
            {
              id: 'basketball',
              label: 'Basketball',
              url: '/men/shoes/basketball',
            },
            { id: 'jordan', label: 'Jordan', url: '/men/shoes/jordan' },
            { id: 'running', label: 'Running', url: '/men/shoes/running' },
            {
              id: 'sandals-slides',
              label: 'Sandals & Slides',
              url: '/men/shoes/sandals-slides',
            },
            {
              id: 'sportswear',
              label: 'Sportswear',
              url: '/men/shoes/sportswear',
            },
            {
              id: 'training-gym',
              label: 'Training & Gym',
              url: '/men/shoes/training-gym',
            },
            {
              id: 'custom-shoes',
              label: 'Custom Shoes',
              url: '/men/shoes/custom',
            },
          ],
        },
        {
          title: 'Clothing',
          items: [
            { id: 'all-clothing', label: 'All Clothing', url: '/men/clothing' },
            { id: 'fleece', label: 'Fleece', url: '/men/clothing/fleece' },
            {
              id: 'hoodies-sweatshirts',
              label: 'Hoodies & Sweatshirts',
              url: '/men/clothing/hoodies-sweatshirts',
            },
            {
              id: 'jackets-vests',
              label: 'Jackets & Vests',
              url: '/men/clothing/jackets-vests',
            },
            { id: 'pants', label: 'Pants', url: '/men/clothing/pants' },
            { id: 'shorts', label: 'Shorts', url: '/men/clothing/shorts' },
          ],
        },
        {
          title: 'Accessories',
          items: [
            {
              id: 'all-accessories',
              label: 'All Accessories',
              url: '/men/accessories',
            },
            {
              id: 'bags-backpacks',
              label: 'Bags & Backpacks',
              url: '/men/accessories/bags-backpacks',
            },
            {
              id: 'hats-headwear',
              label: 'Hats & Headwear',
              url: '/men/accessories/hats-headwear',
            },
            { id: 'socks', label: 'Socks', url: '/men/accessories/socks' },
            {
              id: 'sunglasses',
              label: 'Sunglasses',
              url: '/men/accessories/sunglasses',
            },
          ],
        },
      ],
    },
    {
      id: 'women',
      label: 'WOMEN',
      url: '/women',
      sections: [
        {
          title: 'New & Featured',
          items: [
            {
              id: 'new-arrivals',
              label: 'New Arrivals',
              url: '/women/new-arrivals',
            },
            {
              id: 'best-sellers',
              label: 'Best Sellers',
              url: '/women/best-sellers',
            },
            {
              id: 'nike-sportswear',
              label: 'Nike Sportswear',
              url: '/women/nike-sportswear',
            },
            { id: 'nike-skims', label: 'NikeSKIMS', url: '/women/nike-skims' },
            {
              id: 'snkrs-launch-calendar',
              label: 'SNKRS Launch Calendar',
              url: '/women/snkrs-launch-calendar',
            },
            {
              id: 'shop-all-sale',
              label: 'Shop All Sale',
              url: '/women/shop-all-sale',
            },
          ],
        },
        {
          title: 'Clothing',
          items: [
            {
              id: 'all-clothing',
              label: 'All Clothing',
              url: '/women/clothing',
            },
            { id: 'bras', label: 'Bras', url: '/women/clothing/bras' },
            { id: 'fleece', label: 'Fleece', url: '/women/clothing/fleece' },
            {
              id: 'hoodies-sweatshirts',
              label: 'Hoodies & Sweatshirts',
              url: '/women/clothing/hoodies-sweatshirts',
            },
            {
              id: 'jackets-vests',
              label: 'Jackets & Vests',
              url: '/women/clothing/jackets-vests',
            },
            {
              id: 'leggings',
              label: 'Leggings',
              url: '/women/clothing/leggings',
            },
          ],
        },
        {
          title: 'Accessories',
          items: [
            {
              id: 'all-accessories',
              label: 'All Accessories',
              url: '/women/accessories',
            },
            {
              id: 'bags-backpacks',
              label: 'Bags & Backpacks',
              url: '/women/accessories/bags-backpacks',
            },
            {
              id: 'hats-headwear',
              label: 'Hats & Headwear',
              url: '/women/accessories/hats-headwear',
            },
            { id: 'socks', label: 'Socks', url: '/women/accessories/socks' },
            {
              id: 'sunglasses',
              label: 'Sunglasses',
              url: '/women/accessories/sunglasses',
            },
          ],
        },
        {
          title: 'Shop by Color',
          items: [
            {
              id: 'dark-neutrals',
              label: 'Dark Neutrals',
              url: '/women/color/dark-neutrals',
            },
            {
              id: 'illusion-green',
              label: 'Illusion Green',
              url: '/women/color/illusion-green',
            },
            {
              id: 'midnight-blue',
              label: 'Midnight Blue',
              url: '/women/color/midnight-blue',
            },
            {
              id: 'pink-rise',
              label: 'Pink Rise',
              url: '/women/color/pink-rise',
            },
            {
              id: 'warm-neutrals',
              label: 'Warm Neutrals',
              url: '/women/color/warm-neutrals',
            },
          ],
        },
        {
          title: 'Shoes',
          items: [
            { id: 'all-shoes', label: 'All Shoes', url: '/women/shoes' },
            {
              id: 'basketball',
              label: 'Basketball',
              url: '/women/shoes/basketball',
            },
            { id: 'jordan', label: 'Jordan', url: '/women/shoes/jordan' },
            { id: 'running', label: 'Running', url: '/women/shoes/running' },
            {
              id: 'sandals-slides',
              label: 'Sandals & Slides',
              url: '/women/shoes/sandals-slides',
            },
            {
              id: 'sportswear',
              label: 'Sportswear',
              url: '/women/shoes/sportswear',
            },
            {
              id: 'training-gym',
              label: 'Training & Gym',
              url: '/women/shoes/training-gym',
            },
            {
              id: 'custom-shoes',
              label: 'Custom Shoes',
              url: '/women/shoes/custom',
            },
          ],
        },
      ],
    },
    {
      id: 'kids',
      label: 'KIDS',
      url: '/kids',
      sections: [
        {
          title: 'New & Featured',
          items: [
            {
              id: 'new-arrivals',
              label: 'New Arrivals',
              url: '/kids/new-arrivals',
            },
            {
              id: 'best-sellers',
              label: 'Best Sellers',
              url: '/kids/best-sellers',
            },
            {
              id: 'nike-sportswear',
              label: 'Nike Sportswear',
              url: '/kids/nike-sportswear',
            },
            { id: 'nike-lego', label: 'Nike x LEGO®', url: '/kids/nike-lego' },
            {
              id: 'teens-collection',
              label: 'Teens Collection',
              url: '/kids/teens-collection',
            },
            {
              id: 'shop-all-sale',
              label: 'Shop All Sale',
              url: '/kids/shop-all-sale',
            },
          ],
        },
        {
          title: 'Shoes',
          items: [
            { id: 'all-shoes', label: 'All Shoes', url: '/kids/shoes' },
            {
              id: 'teens-shoes',
              label: 'Teens (13-15 yrs)',
              url: '/kids/shoes/teens',
            },
            {
              id: 'big-kids-shoes',
              label: 'Big Kids (7-12 yrs)',
              url: '/kids/shoes/big-kids',
            },
            {
              id: 'little-kids-shoes',
              label: 'Little Kids (3-7 yrs)',
              url: '/kids/shoes/little-kids',
            },
            {
              id: 'baby-toddler-shoes',
              label: 'Baby & Toddler (0-3 yrs)',
              url: '/kids/shoes/baby-toddler',
            },
          ],
        },
        {
          title: 'Accessories',
          items: [
            {
              id: 'all-accessories',
              label: 'All Accessories',
              url: '/kids/accessories',
            },
            {
              id: 'bags-backpacks',
              label: 'Bags & Backpacks',
              url: '/kids/accessories/bags-backpacks',
            },
            {
              id: 'hats-headwear',
              label: 'Hats & Headwear',
              url: '/kids/accessories/hats-headwear',
            },
            { id: 'socks', label: 'Socks', url: '/kids/accessories/socks' },
          ],
        },
        {
          title: 'Clothing',
          items: [
            {
              id: 'all-clothing',
              label: 'All Clothing',
              url: '/kids/clothing',
            },
            {
              id: 'teens-clothing',
              label: 'Teens (13-15 yrs)',
              url: '/kids/clothing/teens',
            },
            {
              id: 'big-kids-clothing',
              label: 'Big Kids (7-12 yrs)',
              url: '/kids/clothing/big-kids',
            },
            {
              id: 'little-kids-clothing',
              label: 'Little Kids (3-7 yrs)',
              url: '/kids/clothing/little-kids',
            },
            {
              id: 'baby-toddler-clothing',
              label: 'Baby & Toddler (0-3 yrs)',
              url: '/kids/clothing/baby-toddler',
            },
          ],
        },
        {
          title: 'Shop By Sport',
          items: [
            {
              id: 'basketball',
              label: 'Basketball',
              url: '/kids/sport/basketball',
            },
            {
              id: 'gymnastics',
              label: 'Gymnastics',
              url: '/kids/sport/gymnastics',
            },
            { id: 'fan-gear', label: 'Fan Gear', url: '/kids/sport/fan-gear' },
            { id: 'football', label: 'Football', url: '/kids/sport/football' },
            { id: 'running', label: 'Running', url: '/kids/sport/running' },
            { id: 'soccer', label: 'Soccer', url: '/kids/sport/soccer' },
          ],
        },
      ],
    },
    {
      id: 'jordan',
      label: 'JORDAN',
      url: '/jordan',
      sections: [
        {
          title: 'New & Featured',
          items: [
            {
              id: 'new-arrivals',
              label: 'New Arrivals',
              url: '/jordan/new-arrivals',
            },
            {
              id: 'best-sellers',
              label: 'Best Sellers',
              url: '/jordan/best-sellers',
            },
            {
              id: 'heat-check',
              label: 'Heat Check',
              url: '/jordan/heat-check',
            },
            {
              id: 'shop-all-sale',
              label: 'Shop All Sale',
              url: '/jordan/shop-all-sale',
            },
          ],
        },
        {
          title: 'Men',
          items: [
            { id: 'men-shop-all', label: 'Shop All', url: '/jordan/men' },
            { id: 'men-shoes', label: 'Shoes', url: '/jordan/men/shoes' },
            { id: 'men-aj1', label: 'AJ1', url: '/jordan/men/aj1' },
            {
              id: 'men-clothing',
              label: 'Clothing',
              url: '/jordan/men/clothing',
            },
            {
              id: 'men-accessories',
              label: 'Accessories',
              url: '/jordan/men/accessories',
            },
          ],
        },
        {
          title: 'Women',
          items: [
            { id: 'women-shop-all', label: 'Shop All', url: '/jordan/women' },
            { id: 'women-shoes', label: 'Shoes', url: '/jordan/women/shoes' },
            { id: 'women-aj1', label: 'AJ1', url: '/jordan/women/aj1' },
            {
              id: 'women-clothing',
              label: 'Clothing',
              url: '/jordan/women/clothing',
            },
            {
              id: 'women-accessories',
              label: 'Accessories',
              url: '/jordan/women/accessories',
            },
          ],
        },
        {
          title: 'Kids',
          items: [
            { id: 'kids-shop-all', label: 'Shop All', url: '/jordan/kids' },
            { id: 'kids-shoes', label: 'Shoes', url: '/jordan/kids/shoes' },
            { id: 'kids-aj1', label: 'AJ1', url: '/jordan/kids/aj1' },
            {
              id: 'kids-clothing',
              label: 'Clothing',
              url: '/jordan/kids/clothing',
            },
            {
              id: 'kids-accessories',
              label: 'Accessories',
              url: '/jordan/kids/accessories',
            },
          ],
        },
        {
          title: 'Sport',
          items: [
            {
              id: 'basketball',
              label: 'Basketball',
              url: '/jordan/sport/basketball',
            },
            { id: 'golf', label: 'Golf', url: '/jordan/sport/golf' },
            { id: 'cleats', label: 'Cleats', url: '/jordan/sport/cleats' },
          ],
        },
      ],
    },
    {
      id: 'sport',
      label: 'SPORT',
      url: '/sport',
      sections: [
        {
          title: 'Basketball',
          items: [
            {
              id: 'basketball-shoes',
              label: 'Shoes',
              url: '/sport/basketball/shoes',
            },
            {
              id: 'basketball-apparel',
              label: 'Apparel',
              url: '/sport/basketball/apparel',
            },
            {
              id: 'basketball-equipment',
              label: 'Equipment',
              url: '/sport/basketball/equipment',
            },
            {
              id: 'basketball-kobe',
              label: 'Kobe',
              url: '/sport/basketball/kobe',
            },
            {
              id: 'basketball-jordan',
              label: 'Jordan',
              url: '/sport/basketball/jordan',
            },
          ],
        },
        {
          title: 'Court',
          items: [
            { id: 'court-tennis', label: 'Tennis', url: '/sport/court/tennis' },
            {
              id: 'court-pickleball',
              label: 'Pickleball',
              url: '/sport/court/pickleball',
            },
            { id: 'court-shoes', label: 'Shoes', url: '/sport/court/shoes' },
            {
              id: 'court-apparel',
              label: 'Apparel',
              url: '/sport/court/apparel',
            },
            {
              id: 'court-equipment',
              label: 'Equipment',
              url: '/sport/court/equipment',
            },
          ],
        },
        {
          title: 'Soccer',
          items: [
            {
              id: 'soccer-cleats',
              label: 'Cleats',
              url: '/sport/soccer/cleats',
            },
            {
              id: 'soccer-indoor-footwear',
              label: 'Indoor Footwear',
              url: '/sport/soccer/indoor-footwear',
            },
            {
              id: 'soccer-apparel',
              label: 'Apparel',
              url: '/sport/soccer/apparel',
            },
            {
              id: 'soccer-equipment',
              label: 'Equipment',
              url: '/sport/soccer/equipment',
            },
          ],
        },
        {
          title: 'Training',
          items: [
            {
              id: 'training-prime',
              label: 'Prime',
              url: '/sport/training/prime',
            },
            {
              id: 'training-train',
              label: 'Train',
              url: '/sport/training/train',
            },
            {
              id: 'training-hybrid',
              label: 'Hybrid',
              url: '/sport/training/hybrid',
            },
            {
              id: 'training-strength',
              label: 'Strength',
              url: '/sport/training/strength',
            },
            {
              id: 'training-studio',
              label: 'Studio',
              url: '/sport/training/studio',
            },
            {
              id: 'training-recover',
              label: 'Recover',
              url: '/sport/training/recover',
            },
          ],
        },
        {
          title: 'Running',
          items: [
            { id: 'running-road', label: 'Road', url: '/sport/running/road' },
            { id: 'running-race', label: 'Race', url: '/sport/running/race' },
            {
              id: 'running-trail',
              label: 'Trail',
              url: '/sport/running/trail',
            },
            {
              id: 'running-track-field',
              label: 'Track & Field',
              url: '/sport/running/track-field',
            },
            {
              id: 'running-apparel',
              label: 'Apparel',
              url: '/sport/running/apparel',
            },
            {
              id: 'running-equipment',
              label: 'Equipment',
              url: '/sport/running/equipment',
            },
            {
              id: 'running-shoe-finder',
              label: 'Running Shoe Finder',
              url: '/sport/running/shoe-finder',
            },
          ],
        },
        {
          title: 'Golf',
          items: [
            { id: 'golf-shoes', label: 'Shoes', url: '/sport/golf/shoes' },
            {
              id: 'golf-apparel',
              label: 'Apparel',
              url: '/sport/golf/apparel',
            },
            {
              id: 'golf-equipment',
              label: 'Equipment',
              url: '/sport/golf/equipment',
            },
          ],
        },
        {
          title: 'More Sports',
          items: [
            { id: 'baseball', label: 'Baseball', url: '/sport/baseball' },
            { id: 'cheer', label: 'Cheer', url: '/sport/cheer' },
            { id: 'football', label: 'Football', url: '/sport/football' },
            { id: 'gymnastics', label: 'Gymnastics', url: '/sport/gymnastics' },
            { id: 'lacrosse', label: 'Lacrosse', url: '/sport/lacrosse' },
            {
              id: 'skateboarding',
              label: 'Skateboarding',
              url: '/sport/skateboarding',
            },
            { id: 'softball', label: 'Softball', url: '/sport/softball' },
            { id: 'sportswear', label: 'Sportswear', url: '/sport/sportswear' },
            { id: 'swimming', label: 'Swimming', url: '/sport/swimming' },
            { id: 'volleyball', label: 'Volleyball', url: '/sport/volleyball' },
            { id: 'wrestling', label: 'Wrestling', url: '/sport/wrestling' },
          ],
        },
        {
          title: 'Locker Room',
          items: [
            {
              id: 'nba-gear',
              label: 'NBA Gear',
              url: '/sport/locker-room/nba',
            },
            {
              id: 'nfl-gear',
              label: 'NFL Gear',
              url: '/sport/locker-room/nfl',
            },
            {
              id: 'mlb-gear',
              label: 'MLB Gear',
              url: '/sport/locker-room/mlb',
            },
            {
              id: 'wnba-gear',
              label: 'WNBA Gear',
              url: '/sport/locker-room/wnba',
            },
            {
              id: 'ncaa-gear',
              label: 'NCAA Gear',
              url: '/sport/locker-room/ncaa',
            },
            {
              id: 'nwsl-gear',
              label: 'NWSL Gear',
              url: '/sport/locker-room/nwsl',
            },
            {
              id: 'soccer-club-gear',
              label: 'Soccer Club Gear',
              url: '/sport/locker-room/soccer-club',
            },
            {
              id: 'federations-gear',
              label: 'Federations Gear',
              url: '/sport/locker-room/federations',
            },
          ],
        },
        {
          title: 'All Conditions Gear',
          items: [
            {
              id: 'trail-run',
              label: 'Trail Run',
              url: '/sport/acg/trail-run',
            },
            { id: 'hike', label: 'Hike', url: '/sport/acg/hike' },
            { id: 'explore', label: 'Explore', url: '/sport/acg/explore' },
          ],
        },
      ],
    },
    {
      id: 'sportswear',
      label: 'SPORTSWEAR',
      url: '/sportswear',
    },
  ],
};
