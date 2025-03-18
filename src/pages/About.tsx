
import React, { useEffect } from 'react';
import { ChevronRight, CheckCircle, Truck, Star, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">About Us</h1>
          <div className="flex items-center justify-center text-sm" data-aos="fade-up" data-aos-delay="100">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <img 
                src="/about-car-wash.jpg" 
                alt="Our Story" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4 text-navy">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Car Wash Tools started with a simple mission: to provide professional-grade car washing and detailing tools to everyone. Our founder, John Smith, was frustrated with the low-quality car cleaning products available to consumers and decided to change that.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small online store has grown into a trusted brand that serves thousands of car enthusiasts and professional detailers across the country. We pride ourselves on our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we continue to expand our product range while maintaining our core values. We believe that everyone deserves access to high-quality car care tools that deliver professional results.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div>
                  <div className="font-semibold">Years of Experience</div>
                  <div className="text-gray-600">In the car care industry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-navy">Our Mission</h2>
            <p className="text-gray-700">
              We're on a mission to transform the way people clean and maintain their vehicles by providing premium quality tools and products that make car care easier, more effective, and more enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-white p-6 rounded-lg shadow-md" 
              data-aos="fade-up" 
              data-aos-delay="0"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Star className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                We source only the highest quality materials and thoroughly test each product before adding it to our lineup.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-lg shadow-md" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Accessibility</h3>
              <p className="text-gray-600 text-center">
                We make professional-grade car care products accessible to everyone, not just detailing professionals.
              </p>
            </div>

            <div 
              className="bg-white p-6 rounded-lg shadow-md" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Education</h3>
              <p className="text-gray-600 text-center">
                We're committed to educating our customers about proper car care techniques and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-navy">Why Choose Us</h2>
              <p className="text-gray-700 mb-6">
                When you choose Car Wash Tools, you're not just buying products – you're investing in quality, expertise, and exceptional customer service.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Premium Quality Products</h3>
                    <p className="text-gray-600">Our tools and products are designed to deliver professional results every time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p className="text-gray-600">Our team of car care experts is always ready to provide guidance and advice.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Satisfaction Guarantee</h3>
                    <p className="text-gray-600">If you're not completely satisfied with your purchase, we'll make it right.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Fast Shipping</h3>
                    <p className="text-gray-600">We process orders quickly to get your products to you as soon as possible.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <img 
                src="/why-choose-us.jpg" 
                alt="Why Choose Us" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Browse our collection of premium car care products and take your car cleaning to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-dark font-bold">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
