import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'HALF SLEEVE', href: '/products/half-sleeve' },
  { name: 'FULL SLEEVE', href: '/products/full-sleeve' },
  { name: 'NEW ARRIVALS', href: '/products/new-arrivals' },
  { name: 'GIZA SHIRTS', href: '/products/giza-shirts' },
  { name: 'STRIPE SHIRTS', href: '/products/stripe-shirts' },
  { name: 'CHECK SHIRTS', href: '/products/check-shirts' },
  { name: 'BAMBOO SHIRTS', href: '/products/bamboo-shirts' },
  { name: 'WINTER ESSENTIALS', href: '/products/winter-essentials' },
];

const Navbar = () => {
  return (
    <nav className="bg-teal-900 text-white py-2 px-6 border-t border-teal-800">
      <div className="container mx-auto">
        <ul className="flex flex-wrap justify-center space-x-1 md:space-x-4">
          {categories.map((category, index) => (
            <li key={index}>
              <Link 
                href={category.href}
                className="block px-3 py-2 text-sm font-medium hover:text-amber-500 transition-colors"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
