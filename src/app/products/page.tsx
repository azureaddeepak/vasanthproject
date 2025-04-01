import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductGrid from '../../components/product/ProductGrid';
import Link from 'next/link';

// Sample product data
const products = [
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

export default function Products() {
  return (
    <main>
      <Header />
      
      {/* Products Hero */}
      <div className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of premium formal shirts made from 100% natural fabrics
          </p>
        </div>
      </div>
      
      {/* Filters and Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products/half-sleeve" className="text-gray-700 hover:text-amber-700">
                      Half Sleeve Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/full-sleeve" className="text-gray-700 hover:text-amber-700">
                      Full Sleeve Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/giza-shirts" className="text-gray-700 hover:text-amber-700">
                      Giza Cotton Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/bamboo-shirts" className="text-gray-700 hover:text-amber-700">
                      Bamboo Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/check-shirts" className="text-gray-700 hover:text-amber-700">
                      Check Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/stripe-shirts" className="text-gray-700 hover:text-amber-700">
                      Stripe Shirts
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-md font-semibold mb-3">Price Range</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                      <span className="ml-2 text-gray-700">Under ₹1000</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                      <span className="ml-2 text-gray-700">₹1000 - ₹1500</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                      <span className="ml-2 text-gray-700">₹1500 - ₹2000</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                      <span className="ml-2 text-gray-700">Above ₹2000</span>
                    </label>
                  </li>
                </ul>
              </div>
              
              {/* Size */}
              <div>
                <h3 className="text-md font-semibold mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    XS
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    S
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    M
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    L
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    XL
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    XXL
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    3XL
                  </button>
                  <button className="border border-gray-300 rounded-md py-1 px-2 text-sm hover:border-amber-500 hover:bg-amber-50">
                    4XL
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {products.length} products</p>
              <select className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Discount</option>
              </select>
            </div>
            
            {/* Products */}
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
