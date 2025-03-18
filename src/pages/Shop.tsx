
import React, { useEffect, useState } from 'react';
import { products, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Search, ChevronRight, SlidersHorizontal } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = ['All', 'Cleaning', 'Cleaning Solutions', 'Kits'];

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Shop Our Products</h1>
          <div className="flex items-center justify-center text-sm" data-aos="fade-up" data-aos-delay="100">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>Shop</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar / Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Button 
              onClick={() => setFilterOpen(!filterOpen)} 
              variant="outline" 
              className="w-full flex items-center justify-between"
            >
              <span>Filters</span>
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Sidebar / Filters */}
          <div className={`md:w-1/4 ${filterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white rounded-lg shadow-md p-6" data-aos="fade-right">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryFilter(category)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        activeCategory === category
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Price Range</h2>
                <div className="bg-gray-100 rounded-md p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">$0</span>
                    <span className="text-sm text-gray-600">$100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="100"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />
                      {product.oldPrice && (
                        <div className="absolute top-2 right-2 bg-accent text-dark text-sm font-bold px-2 py-1 rounded">
                          SALE
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          {product.oldPrice ? (
                            <div className="flex items-center">
                              <span className="text-xl font-bold text-primary">
                                ${product.price}
                              </span>
                              <span className="text-gray-500 line-through ml-2">
                                ${product.oldPrice}
                              </span>
                            </div>
                          ) : (
                            <span className="text-xl font-bold text-primary">
                              ${product.price}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button className="w-full bg-navy hover:bg-navy/90 text-white flex items-center justify-center">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
