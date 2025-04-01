import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductDetail from '../../../components/product/ProductDetail';
import ProductGrid from '../../../components/product/ProductGrid';

// Sample product data for the current product
const product = {
  id: '1',
  name: 'French Cuff Giza Cotton Shirt in Dusty Rose',
  price: 1699,
  originalPrice: 4199,
  images: [
    '/images/products/shirt1.jpg',
    '/images/products/shirt1_2.jpg',
    '/images/products/shirt1_3.jpg',
    '/images/products/shirt1_4.jpg',
    '/images/products/shirt1_5.jpg',
    '/images/products/shirt1_6.jpg',
  ],
  sizes: [
    { name: 'S', value: '38' },
    { name: 'M', value: '40' },
    { name: 'L', value: '42' },
    { name: 'XL', value: '44' },
    { name: 'XXL', value: '46' },
    { name: '3XL', value: '48' },
    { name: '4XL', value: '50' },
  ],
  description: "Launching our All Season Formal Wear in Cambridge Long Sleeves with French Cuffs. Crafted in Premium Soft Cotton, its lustrous Satin Weave is intricately woven in solid Dusty Rose color to enhance the luxurious look. Impeccable finishing & finely hand crafted French Cuffs to be worn with a classy pair of Cuff Links, make it perfect for a special occasion.",
  fabricCare: [
    "Iron medium: The temperature should not be higher than 300°F (150°C), Use a moist cloth to iron without applying additional pressure. Steam or dry icon.",
    "Do not bleach: You cannot use chlorine bleach or peroxide.",
    "Do not tumble dry: Use machine drying Instead line drying or laying flat to dry.",
    "Wash lukewarm(40°C): 40° is better for you everyday clothing, and fabrics.",
    "Dry cleaning in tetrachloroethylene and hydrocarbons: Perchloroethylene and/or specific solvent-based solutions are used in this technique. Product can be cleaned with household solvent-based stain removers, but always test on a less noticeable part of garment."
  ],
  features: [
    "Material: 100% cotton",
    "Sleeves: full sleeves",
    "Cuffs: french cuff",
    "Collar: spread collar",
    "Pattern: solid",
    "Occasion: formal"
  ]
};

// Sample related products
const relatedProducts = [
  {
    id: '2',
    slug: 'keneth-black-signature-concealed-placket',
    name: 'Keneth Black with Signature Concealed Placket',
    price: 1499,
    originalPrice: 3499,
    image: '/images/products/shirt2.jpg',
    discount: '57% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: '3',
    slug: 'cambridge-giza-cotton-shirt-peach-fuzz',
    name: 'Cambridge Giza Cotton Shirt In Peach Fuzz',
    price: 1599,
    originalPrice: 3499,
    image: '/images/products/shirt3.jpg',
    discount: '54% OFF',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: '4',
    slug: 'cambridge-giza-cotton-shirt-fresh-aqua',
    name: 'Cambridge Giza Cotton Shirt In Fresh Aqua',
    price: 1499,
    originalPrice: 3499,
    image: '/images/products/shirt4.jpg',
    discount: '57% OFF',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: '5',
    slug: 'regal-oxford-stripe-shirt-carrot',
    name: 'Regal Oxford Stripe Shirt In Carrot',
    price: 1399,
    originalPrice: 3499,
    image: '/images/products/shirt5.jpg',
    discount: '60% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
];

export default function ProductDetailPage() {
  return (
    <main>
      <Header />
      
      {/* Product Detail */}
      <ProductDetail product={product} />
      
      {/* Related Products */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <ProductGrid products={relatedProducts} />
      </div>
      
      <Footer />
    </main>
  );
}
