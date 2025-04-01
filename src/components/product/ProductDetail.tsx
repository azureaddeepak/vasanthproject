import React from 'react';
import Image from 'next/image';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    images: string[];
    sizes: { name: string; value: string }[];
    description: string;
    fabricCare: string[];
    features: string[];
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {/* Product Images */}
          <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={600}
                height={800}
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="mt-4 grid grid-cols-6 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md">
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover object-center cursor-pointer border hover:border-amber-500"
                  />
                </div>
              ))}
            </div>
            
            {/* Social Sharing */}
            <div className="mt-6 flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-500">SHARE:</span>
              <div className="flex space-x-2">
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:col-span-1">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            
            {/* Pricing */}
            <div className="mt-4 flex items-center">
              <p className="text-2xl font-medium text-gray-900">₹ {product.price}</p>
              {product.originalPrice > product.price && (
                <p className="ml-4 text-lg text-gray-500 line-through">₹ {product.originalPrice}</p>
              )}
              {product.originalPrice > product.price && (
                <p className="ml-4 text-lg font-medium text-green-600">
                  Save: ₹ {product.originalPrice - product.price}
                </p>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-500">(incl. of all taxes)</p>
            
            {/* Size Selection */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Size:</h3>
              <div className="mt-2">
                <div className="grid grid-cols-7 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      type="button"
                      className="flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 text-sm font-medium hover:bg-amber-50 hover:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {size.name}
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
            
            {/* Add to Cart */}
            <div className="mt-8 flex">
              <div className="mr-4 flex items-center border border-gray-300 rounded-md">
                <button
                  type="button"
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
                  value="1"
                  readOnly
                />
                <button
                  type="button"
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
                className="flex-1 bg-teal-900 py-3 px-6 text-base font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                ADD TO CART
              </button>
            </div>
            
            {/* Promotions */}
            <div className="mt-6 border border-amber-200 bg-amber-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-amber-800">Buy More, Save More on prepaid orders!</h3>
              <div className="mt-2 space-y-2">
                <p className="text-sm text-amber-700">
                  Get this for <span className="font-bold">Rs 1499</span>, Use code <span className="font-bold">TFC300</span>
                  <br />When you buy any <span className="font-bold">2 shirts</span>. Coupon applied automatically at checkout.
                </p>
                <p className="text-sm text-amber-700">
                  Get this for <span className="font-bold">Rs. 1099</span>, Use code <span className="font-bold">TFCB2G1</span>
                  <br />When you buy any <span className="font-bold">3 shirts</span>. Coupon applied automatically at checkout.
                </p>
              </div>
            </div>
            
            {/* Product Description */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Product Description</h3>
              <div className="mt-2 prose prose-sm text-gray-500">
                <p>{product.description}</p>
              </div>
            </div>
            
            {/* Fabric & Care */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Fabric & Care Instructions</h3>
              <div className="mt-2">
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
                  {product.fabricCare.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
