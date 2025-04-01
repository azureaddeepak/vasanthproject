import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductGrid from '../components/product/ProductGrid';
import Image from 'next/image';
import Link from 'next/link';

// Sample product data
const bestSellers = [
  {
    id: '1',
    slug: 'cambridge-giza-cotton-shirt-dusty-rose',
    name: 'Cambridge Giza Cotton Shirt In Dusty Rose',
    price: 1599,
    originalPrice: 3499,
    image: '/images/products/shirt1.jpg',
    discount: '54% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
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
];

const newArrivals = [
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
  {
    id: '6',
    slug: 'cambridge-giza-cotton-shirt-moss-green',
    name: 'Cambridge Giza Cotton Shirt In Moss Green',
    price: 1499,
    originalPrice: 3499,
    image: '/images/products/shirt6.jpg',
    discount: '57% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: '7',
    slug: 'lumber-flannel-check-shirt-mocha',
    name: 'Lumber Flannel Check Shirt In Mocha',
    price: 999,
    originalPrice: 3499,
    image: '/images/products/shirt7.jpg',
    discount: '71% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
  {
    id: '8',
    slug: 'marco-checks-shirt-navy-red',
    name: 'Marco Checks Shirt In Navy & Red',
    price: 999,
    originalPrice: 3499,
    image: '/images/products/shirt8.jpg',
    discount: '71% OFF',
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Banner */}
      <div className="relative">
        <div className="w-full h-[500px] relative">
          <Image 
            src="/images/hero-banner.jpg" 
            alt="The Formal Club - Premium Shirts for Men" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">DRESS UP OR DRESS DOWN</h1>
              <p className="text-xl md:text-2xl mb-8">OUR SHIRTS HAVE YOU COVERED</p>
              <Link 
                href="/products" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Category Circles */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/products/bamboo-shirts" className="group">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-amber-500 transition-colors">
                  <Image 
                    src="/images/categories/bamboo.jpg" 
                    alt="Bamboo Shirts" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center font-medium">Bamboo Shirts</p>
              </div>
            </Link>
            <Link href="/products/giza-shirts" className="group">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-amber-500 transition-colors">
                  <Image 
                    src="/images/categories/giza.jpg" 
                    alt="Giza Cotton Shirt" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center font-medium">Giza Cotton Shirt</p>
              </div>
            </Link>
            <Link href="/products/french-cuff" className="group">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-amber-500 transition-colors">
                  <Image 
                    src="/images/categories/french-cuff.jpg" 
                    alt="French Cuff" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center font-medium">French Cuff</p>
              </div>
            </Link>
            <Link href="/products/winter-essential" className="group">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-amber-500 transition-colors">
                  <Image 
                    src="/images/categories/winter.jpg" 
                    alt="Winter Essential" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center font-medium">Winter Essential</p>
              </div>
            </Link>
            <Link href="/products/check-shirts" className="group">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-amber-500 transition-colors">
                  <Image 
                    src="/images/categories/check.jpg" 
                    alt="Check Shirts" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center font-medium">Check Shirts</p>
              </div>
            </Link>
            <Link href="/products/half-sleeve" className="group">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-amber-500 transition-colors">
                  <Image 
                    src="/images/categories/half-sleeve.jpg" 
                    alt="Half Sleeve Shirts" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-3 text-center font-medium">Half Sleeve Shirts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Best Sellers Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-amber-100 p-6 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">BEST SELLERS</h2>
            <p className="text-gray-600">WINNER OF SEASON 25</p>
            <Link href="/products" className="text-amber-700 hover:text-amber-800 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <ProductGrid products={bestSellers} />
        </div>
        
        {/* New Arrivals Section */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">NEW ARRIVALS</h2>
            <p className="text-gray-600">ALL NEW COLLECTIONS</p>
            <Link href="/products/new-arrivals" className="text-amber-700 hover:text-amber-800 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <ProductGrid products={newArrivals} />
        </div>
      </div>
      
      {/* About Section */}
      <div className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About The Formal Club</h2>
            <p className="text-lg mb-8">
              At The Formal Club, we understand the timeless importance of a great formal shirt in every man's wardrobe. 
              It's not just about dressing up; it's about making a statement with style. We stand out by crafting stylish 
              yet sustainable formal shirts for men using 100% natural fabrics—cotton, linen, bamboo, and premium Giza cotton.
            </p>
            <Link 
              href="/about-us" 
              className="inline-block border-2 border-white hover:bg-white hover:text-teal-900 font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
