import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-amber-700 text-white text-center py-3 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
          <p className="text-sm font-medium">Buy 2 Get 1 Free: Add 3 items to your cart, and one will be free!</p>
          <p className="text-sm font-medium">Buy 2 Shirts @ ₹1699, Use code TFCYES</p>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="bg-teal-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-500">THE FORMAL CLUB</span>
          </Link>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/wishlist" className="text-white hover:text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/account" className="text-white hover:text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/search" className="text-white hover:text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/cart" className="text-white hover:text-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <Navbar />
    </header>
  );
};

export default Header;
