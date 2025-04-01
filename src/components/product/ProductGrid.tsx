import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  discount?: string;
  sizes: string[];
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  viewAllLink?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, viewAllLink }) => {
  return (
    <div className="py-8">
      {/* Section Header */}
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {viewAllLink && (
            <a href={viewAllLink} className="text-amber-700 hover:text-amber-800 font-medium flex items-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      )}
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            slug={product.slug}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            image={product.image}
            discount={product.discount}
            sizes={product.sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
