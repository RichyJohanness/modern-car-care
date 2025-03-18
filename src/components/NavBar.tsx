
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/context/CartContext';
import { useSearch } from '@/context/SearchContext';
import CartDrawer from './CartDrawer';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useCart();
  const { searchQuery, setSearchQuery, performSearch } = useSearch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
    setSearchOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-car-wash.png" 
              alt="Car Wash Tools" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-navy hover:text-primary font-medium transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-navy hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-navy hover:text-primary font-medium transition-colors">
              Contact
            </Link>
            <button 
              onClick={toggleSearch}
              className="text-navy hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button 
              onClick={toggleCart}
              className="bg-primary hover:bg-primary/80 text-white relative" 
              size="sm"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Keranjang ({cartCount})
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSearch}
              className="text-navy mr-2"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={toggleCart}
              className="text-navy mr-3 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-navy focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-navy hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-navy hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-navy hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-navy hover:text-primary font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                onClick={() => {
                  setIsMenuOpen(false);
                  toggleCart();
                }} 
                className="bg-primary hover:bg-primary/80 text-white w-full"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Keranjang ({cartCount})
              </Button>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-0 left-0 w-full bg-white shadow-md p-4 animate-fade-in z-50">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Cari produk..."
                className="flex-1 border-2 border-r-0 border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-r-md hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={toggleSearch}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default NavBar;
