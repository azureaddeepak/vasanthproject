import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount?: string;
  sizes: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  slug,
  name,
  price,
  originalPrice,
  image,
  discount,
  sizes
}) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 right-2 bg-amber-700 text-white text-xs font-medium px-2 py-1 rounded">
            {discount}
          </div>
        )}
        
        {/* Product Image */}
        <div className="aspect-h-4 aspect-w-3 bg-gray-200">
          <Image
            src={image}
            alt={name}
            width={300}
            height={400}
            className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-90"
          />
        </div>
        
        {/* Wishlist Button */}
        <button
          type="button"
          className="absolute top-2 left-2 rounded-full bg-white p-2 text-gray-900 shadow-md hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        {/* Quick Shop Button */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            className="bg-teal-900 text-white text-sm font-medium py-2 px-4 w-full"
          >
            Choose options
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-4 flex flex-col">
        <Link href={`/products/${slug}`} className="text-gray-800 font-medium hover:text-amber-700">
          {name}
        </Link>
        
        {/* Size Options */}
        <div className="mt-1 flex flex-wrap gap-1">
          {sizes.map((size, index) => (
            <span key={index} className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-300">
              {size}
            </span>
          ))}
        </div>
        
        {/* Price */}
        <div className="mt-2 flex items-center">
          <p className="font-medium text-gray-900">₹ {price}</p>
          {originalPrice > price && (
            <p className="ml-2 text-sm text-gray-500 line-through">₹ {originalPrice}</p>
          )}
        </div>
        
        {/* Promotional Text */}
        <p className="mt-1 text-sm text-amber-700 font-medium">
          BEST BUY @{Math.round(price * 0.66)} With Buy 2 Get 1
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
