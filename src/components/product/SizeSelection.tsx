import React, { useState } from 'react';
import { useCartStore } from '../../lib/cartStore';
import { Product } from '../../lib/productData';

interface SizeSelectionProps {
  product: Product;
  onAddToCart: () => void;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const addItem = useCartStore((state) => state.addItem);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setError('');
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }

    addItem(product, selectedSize, quantity);
    onAddToCart();
    // Reset selection after adding to cart
    setSelectedSize('');
    setQuantity(1);
  };

  return (
    <div>
      {/* Size Selection */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-900">Size:</h3>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div className="mt-2">
          <div className="grid grid-cols-7 gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeSelect(size)}
                className={`flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium ${
                  selectedSize === size
                    ? 'border-amber-500 bg-amber-50 text-amber-700'
                    : 'border-gray-300 text-gray-900 hover:bg-amber-50 hover:border-amber-500'
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
              >
                {size}
              </button>
            ))}
          </div>
          <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800">
            <span>Size Chart</span>
            <svg className="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Quantity and Add to Cart */}
      <div className="mt-8 flex">
        <div className="mr-4 flex items-center border border-gray-300 rounded-md">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <span className="sr-only">Decrease quantity</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <input
            type="text"
            className="w-12 border-0 text-center focus:ring-0"
            value={quantity}
            readOnly
          />
          <button
            type="button"
            onClick={increaseQuantity}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <span className="sr-only">Increase quantity</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex-1 bg-teal-900 py-3 px-6 text-base font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default SizeSelection;
