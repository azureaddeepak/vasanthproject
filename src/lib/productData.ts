// src/lib/productData.ts
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  images?: string[];
  discount?: string;
  sizes: string[];
  description?: string;
  fabricCare?: string[];
  features?: string[];
  category: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'cambridge-giza-cotton-shirt-dusty-rose',
    name: 'Cambridge Giza Cotton Shirt In Dusty Rose',
    price: 1599,
    originalPrice: 3499,
    image: '/images/products/shirt1.jpg',
    images: [
      '/images/products/shirt1.jpg',
      '/images/products/shirt1_2.jpg',
      '/images/products/shirt1_3.jpg',
      '/images/products/shirt1_4.jpg',
    ],
    discount: '54% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Crafted in Premium Soft Cotton, its lustrous Satin Weave is intricately woven in solid Dusty Rose color to enhance the luxurious look. Impeccable finishing & finely hand crafted details make it perfect for any occasion.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% cotton",
      "Sleeves: full sleeves",
      "Collar: spread collar",
      "Pattern: solid",
      "Occasion: formal"
    ],
    category: ['giza-shirts', 'full-sleeve']
  },
  {
    id: '2',
    slug: 'keneth-black-signature-concealed-placket',
    name: 'Keneth Black with Signature Concealed Placket',
    price: 1499,
    originalPrice: 3499,
    image: '/images/products/shirt2.jpg',
    images: [
      '/images/products/shirt2.jpg',
      '/images/products/shirt2_2.jpg',
      '/images/products/shirt2_3.jpg',
      '/images/products/shirt2_4.jpg',
    ],
    discount: '57% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our signature black shirt with concealed placket design offers a sleek, modern look. Made from premium cotton for all-day comfort and breathability, perfect for formal occasions or business meetings.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% cotton",
      "Sleeves: full sleeves",
      "Collar: spread collar",
      "Pattern: solid",
      "Occasion: formal"
    ],
    category: ['full-sleeve']
  },
  {
    id: '3',
    slug: 'cambridge-giza-cotton-shirt-peach-fuzz',
    name: 'Cambridge Giza Cotton Shirt In Peach Fuzz',
    price: 1599,
    originalPrice: 3499,
    image: '/images/products/shirt3.jpg',
    images: [
      '/images/products/shirt3.jpg',
      '/images/products/shirt3_2.jpg',
      '/images/products/shirt3_3.jpg',
      '/images/products/shirt3_4.jpg',
    ],
    discount: '54% OFF',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our Cambridge Giza Cotton Shirt in Peach Fuzz offers unparalleled comfort and style. Made from premium Giza cotton known for its exceptional softness and durability, this shirt features a trendy peach fuzz color that's perfect for both casual and semi-formal occasions.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% Giza cotton",
      "Sleeves: full sleeves",
      "Collar: spread collar",
      "Pattern: solid",
      "Occasion: formal, semi-formal"
    ],
    category: ['giza-shirts', 'full-sleeve', 'new-arrivals']
  },
  {
    id: '4',
    slug: 'cambridge-giza-cotton-shirt-fresh-aqua',
    name: 'Cambridge Giza Cotton Shirt In Fresh Aqua',
    price: 1499,
    originalPrice: 3499,
    image: '/images/products/shirt4.jpg',
    images: [
      '/images/products/shirt4.jpg',
      '/images/products/shirt4_2.jpg',
      '/images/products/shirt4_3.jpg',
      '/images/products/shirt4_4.jpg',
    ],
    discount: '57% OFF',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our Cambridge Giza Cotton Shirt in Fresh Aqua brings a refreshing pop of color to your wardrobe. Made from premium Giza cotton known for its exceptional softness and durability, this shirt features a vibrant aqua color that's perfect for making a statement.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% Giza cotton",
      "Sleeves: full sleeves",
      "Collar: spread collar",
      "Pattern: solid",
      "Occasion: formal, semi-formal"
    ],
    category: ['giza-shirts', 'full-sleeve', 'new-arrivals']
  },
  {
    id: '5',
    slug: 'regal-oxford-stripe-shirt-carrot',
    name: 'Regal Oxford Stripe Shirt In Carrot',
    price: 1399,
    originalPrice: 3499,
    image: '/images/products/shirt5.jpg',
    images: [
      '/images/products/shirt5.jpg',
      '/images/products/shirt5_2.jpg',
      '/images/products/shirt5_3.jpg',
      '/images/products/shirt5_4.jpg',
    ],
    discount: '60% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our Regal Oxford Stripe Shirt in Carrot combines classic Oxford weave with a modern carrot stripe pattern. The premium cotton fabric ensures breathability and comfort throughout the day, while the distinctive stripe pattern adds a touch of sophistication.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% cotton",
      "Sleeves: full sleeves",
      "Collar: button-down collar",
      "Pattern: stripe",
      "Occasion: formal, casual"
    ],
    category: ['stripe-shirts', 'full-sleeve']
  },
  {
    id: '6',
    slug: 'cambridge-giza-cotton-shirt-moss-green',
    name: 'Cambridge Giza Cotton Shirt In Moss Green',
    price: 1499,
    originalPrice: 3499,
    image: '/images/products/shirt6.jpg',
    images: [
      '/images/products/shirt6.jpg',
      '/images/products/shirt6_2.jpg',
      '/images/products/shirt6_3.jpg',
      '/images/products/shirt6_4.jpg',
    ],
    discount: '57% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our Cambridge Giza Cotton Shirt in Moss Green offers a sophisticated earthy tone that pairs well with various outfits. Made from premium Giza cotton known for its exceptional softness and durability, this shirt provides unmatched comfort and a refined look.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% Giza cotton",
      "Sleeves: full sleeves",
      "Collar: spread collar",
      "Pattern: solid",
      "Occasion: formal, semi-formal"
    ],
    category: ['giza-shirts', 'full-sleeve']
  },
  {
    id: '7',
    slug: 'lumber-flannel-check-shirt-mocha',
    name: 'Lumber Flannel Check Shirt In Mocha',
    price: 999,
    originalPrice: 3499,
    image: '/images/products/shirt7.jpg',
    images: [
      '/images/products/shirt7.jpg',
      '/images/products/shirt7_2.jpg',
      '/images/products/shirt7_3.jpg',
      '/images/products/shirt7_4.jpg',
    ],
    discount: '71% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our Lumber Flannel Check Shirt in Mocha brings warmth and style to your winter wardrobe. The premium flannel fabric provides exceptional warmth and comfort, while the classic check pattern in mocha tones offers a versatile look that pairs well with jeans or chinos.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: Premium flannel",
      "Sleeves: full sleeves",
      "Collar: button-down collar",
      "Pattern: check",
      "Occasion: casual, winter wear"
    ],
    category: ['check-shirts', 'full-sleeve', 'winter-essentials']
  },
  {
    id: '8',
    slug: 'marco-checks-shirt-navy-red',
    name: 'Marco Checks Shirt In Navy & Red',
    price: 999,
    originalPrice: 3499,
    image: '/images/products/shirt8.jpg',
    images: [
      '/images/products/shirt8.jpg',
      '/images/products/shirt8_2.jpg',
      '/images/products/shirt8_3.jpg',
      '/images/products/shirt8_4.jpg',
    ],
    discount: '71% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    description: "Our Marco Checks Shirt in Navy & Red offers a classic pattern with a modern twist. The premium cotton fabric ensures breathability and comfort, while the navy and red check pattern provides a versatile look that can be dressed up or down for various occasions.",
    fabricCare: [
      "Iron medium: The temperature should not be higher than 300°F (150°C)",
      "Do not bleach: You cannot use chlorine bleach or peroxide.",
      "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
      "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics."
    ],
    features: [
      "Material: 100% cotton",
      "Sleeves: full sleeves",
      "Collar: button-down collar",
      "Pattern: check",
      "Occasion: casual, semi-formal"
    ],
    category: ['check-shirts', 'full-sleeve']
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.includes(category));
};

export const getRelatedProducts = (currentProductId: string, limit: number = 4): Product[] => {
  const shuffled = products.filter(product => product.id !== currentProductId).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};

export const getProductCategories = () => {
  return [
    { name: 'HALF SLEEVE', slug: 'half-sleeve' },
    { name: 'FULL SLEEVE', slug: 'full-sleeve' },
    { name: 'NEW ARRIVALS', slug: 'new-arrivals' },
    { name: 'GIZA SHIRTS', slug: 'giza-shirts' },
    { name: 'STRIPE SHIRTS', slug: 'stripe-shirts' },
    { name: 'CHECK SHIRTS', slug: 'check-shirts' },
    { name: 'BAMBOO SHIRTS', slug: 'bamboo-shirts' },
    { name: 'WINTER ESSENTIALS', slug: 'winter-essentials' },
  ];
};
