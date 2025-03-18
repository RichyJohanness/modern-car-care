
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const featuredProducts = products.filter(product => product.featured).slice(0, 2);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Car Wash Tools For Everyone
              </h1>
              <p className="text-lg mb-8 text-gray-100">
                Take your car cleaning to the next level with our premium quality tools and products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-dark font-bold">
                  <Link to="/shop">Shop Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <img 
                src="/hero-car-wash.jpg" 
                alt="Car Washing" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular car cleaning tools and products that deliver professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={(product.id - 1) * 100}
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
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      {product.oldPrice ? (
                        <div className="flex items-center">
                          <span className="text-xl font-bold text-primary">${product.price}</span>
                          <span className="text-gray-500 line-through ml-2">${product.oldPrice}</span>
                        </div>
                      ) : (
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                      )}
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={16} 
                          className="fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-navy hover:bg-navy/90">
                    <Link to={`/shop`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/shop" className="flex items-center">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer This Week!</h2>
              <p className="text-xl mb-6">
                Get 20% off on all detailing kits. Use code: <span className="font-bold">CLEAN20</span>
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-dark font-bold">
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
            <div className="md:w-1/3" data-aos="fade-left">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-accent font-bold text-5xl mb-2">20%</div>
                <div className="text-2xl font-semibold mb-2">DISCOUNT</div>
                <div className="text-sm">Limited time offer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best car cleaning products and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm" 
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All our products are made with high-quality materials for exceptional performance and durability.
              </p>
            </div>

            <div 
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm" 
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our products with a satisfaction guarantee on every purchase.
              </p>
            </div>

            <div 
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm" 
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery on all orders with free shipping available on purchases over $50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Car Cleaning Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust our premium car wash tools.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-dark font-bold">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
