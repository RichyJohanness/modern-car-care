
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Search, ChevronRight, SlidersHorizontal, Filter, Eye } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categories = ['All', 'Pembersihan', 'Solusi Pembersihan', 'Kit', 'Pemolesan', 'Peralatan'];

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<number>(150);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by price
    result = result.filter(product => product.price <= priceRange);
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery, priceRange]);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setPriceRange(150);
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Shop Our Products</h1>
          <div className="flex items-center justify-center text-sm" data-aos="fade-up" data-aos-delay="100">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
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
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </form>

              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <ul className="space-y-2 mb-6">
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
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">$0</span>
                    <span className="text-sm text-gray-600">${priceRange}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    step="10"
                    value={priceRange}
                    onChange={handlePriceChange}
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
                <Filter className="h-4 w-4 mr-2 text-gray-500" />
                <span className="hidden sm:inline text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="text-sm border border-gray-300 rounded-md p-1">
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <Button 
                  onClick={clearFilters}
                  className="mt-4 bg-primary hover:bg-primary/90"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative">
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 sm:h-64 object-cover"
                        />
                        {product.oldPrice && (
                          <div className="absolute top-2 right-2 bg-accent text-dark text-xs sm:text-sm font-bold px-2 py-1 rounded">
                            SALE
                          </div>
                        )}
                      </Link>
                      <div className="absolute bottom-2 right-2 flex space-x-1">
                        <Button 
                          size="icon"
                          className="bg-white/80 backdrop-blur-sm hover:bg-white text-navy rounded-full h-8 w-8" 
                          onClick={() => addToCart(product)}
                          title="Add to Cart"
                        >
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon"
                          className="bg-white/80 backdrop-blur-sm hover:bg-white text-navy rounded-full h-8 w-8" 
                          asChild
                          title="View Details"
                        >
                          <Link to={`/product/${product.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-1">{product.name}</h3>
                      </Link>
                      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          {product.oldPrice ? (
                            <div className="flex items-center">
                              <span className="text-sm sm:text-xl font-bold text-primary">
                                ${product.price}
                              </span>
                              <span className="text-gray-500 line-through ml-1 sm:ml-2 text-xs sm:text-sm">
                                ${product.oldPrice}
                              </span>
                            </div>
                          ) : (
                            <span className="text-sm sm:text-xl font-bold text-primary">
                              ${product.price}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-4">
                        <Button 
                          className="w-full bg-navy hover:bg-navy/90 text-white flex items-center justify-center text-xs sm:text-sm py-1 sm:py-2"
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingCart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
