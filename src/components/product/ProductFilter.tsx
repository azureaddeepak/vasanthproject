import React, { useState } from 'react';
import { Product, getProductsByCategory, getProductCategories } from '../../lib/productData';
import ProductGrid from '../../components/product/ProductGrid';

interface ProductFilterProps {
  initialProducts: Product[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({ initialProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');
  
  const categories = getProductCategories();
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
  const priceRanges = [
    { label: 'Under ₹1000', value: 'under-1000' },
    { label: '₹1000 - ₹1500', value: '1000-1500' },
    { label: '₹1500 - ₹2000', value: '1500-2000' },
    { label: 'Above ₹2000', value: 'above-2000' },
  ];
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    applyFilters(category, selectedSizes, priceRange, sortOption);
  };
  
  const handleSizeToggle = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter(s => s !== size)
      : [...selectedSizes, size];
    
    setSelectedSizes(updatedSizes);
    applyFilters(selectedCategory, updatedSizes, priceRange, sortOption);
  };
  
  const handlePriceRangeToggle = (range: string) => {
    const updatedPriceRange = priceRange.includes(range)
      ? priceRange.filter(r => r !== range)
      : [...priceRange, range];
    
    setPriceRange(updatedPriceRange);
    applyFilters(selectedCategory, selectedSizes, updatedPriceRange, sortOption);
  };
  
  const handleSortChange = (option: string) => {
    setSortOption(option);
    applyFilters(selectedCategory, selectedSizes, priceRange, option);
  };
  
  const applyFilters = (
    category: string,
    sizes: string[],
    priceRanges: string[],
    sortOption: string
  ) => {
    // Start with all products or category filtered products
    let filtered = category 
      ? getProductsByCategory(category)
      : initialProducts;
    
    // Filter by size if any selected
    if (sizes.length > 0) {
      filtered = filtered.filter(product => 
        sizes.some(size => product.sizes.includes(size))
      );
    }
    
    // Filter by price range if any selected
    if (priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        return priceRanges.some(range => {
          if (range === 'under-1000') return price < 1000;
          if (range === '1000-1500') return price >= 1000 && price <= 1500;
          if (range === '1500-2000') return price > 1500 && price <= 2000;
          if (range === 'above-2000') return price > 2000;
          return false;
        });
      });
    }
    
    // Apply sorting
    let sortedProducts = [...filtered];
    
    switch (sortOption) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        sortedProducts.sort((a, b) => {
          const discountA = a.originalPrice - a.price;
          const discountB = b.originalPrice - b.price;
          return discountB - discountA;
        });
        break;
      case 'newest':
        // Assuming newer products have higher IDs for this example
        sortedProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // 'featured' - no specific sorting
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };
  
  return (
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
                {categories.map((category) => (
                  <li key={category.slug}>
                    <button 
                      className={`text-left w-full ${selectedCategory === category.slug ? 'text-amber-700 font-medium' : 'text-gray-700 hover:text-amber-700'}`}
                      onClick={() => handleCategoryChange(category.slug)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-md font-semibold mb-3">Price Range</h3>
              <ul className="space-y-2">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="rounded text-amber-600 focus:ring-amber-500"
                        checked={priceRange.includes(range.value)}
                        onChange={() => handlePriceRangeToggle(range.value)}
                      />
                      <span className="ml-2 text-gray-700">{range.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Size */}
            <div>
              <h3 className="text-md font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button 
                    key={size}
                    className={`border rounded-md py-1 px-2 text-sm ${
                      selectedSizes.includes(size) 
                        ? 'border-amber-500 bg-amber-50 text-amber-700' 
                        : 'border-gray-300 hover:border-amber-500 hover:bg-amber-50'
                    }`}
                    onClick={() => handleSizeToggle(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing {filteredProducts.length} products</p>
            <select 
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="discount">Discount</option>
            </select>
          </div>
          
          {/* Products */}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
