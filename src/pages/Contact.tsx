
import React, { useEffect } from 'react';
import { ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! In a real application, this would send your message.');
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Contact Us</h1>
          <div className="flex items-center justify-center text-sm" data-aos="fade-up" data-aos-delay="100">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6 text-navy">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our products or need advice on the best tools for your car? 
                We're here to help! Fill out the form, and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Car Wash Street, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-gray-600">info@carwashtools.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-navy">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      required
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-navy">Find Us On The Map</h2>
          </div>
          <div 
            className="h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden" 
            data-aos="zoom-in"
          >
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-lg text-gray-600">Map would be displayed here in a real application</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm" 
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <h3 className="text-lg font-semibold mb-2">How long does shipping take?</h3>
                <p className="text-gray-600">
                  Standard shipping typically takes 3-5 business days within the continental US. 
                  Express shipping options are available at checkout.
                </p>
              </div>

              <div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm" 
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-lg font-semibold mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy on most items. Products must be unused and in original packaging.
                  Please contact us before returning any items.
                </p>
              </div>

              <div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm" 
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-lg font-semibold mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600">
                  Yes, we ship to many countries worldwide. International shipping rates and delivery times 
                  vary by location. These options will be displayed at checkout.
                </p>
              </div>

              <div 
                className="bg-gray-50 rounded-lg p-6 shadow-sm" 
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-lg font-semibold mb-2">Are your products safe for all car finishes?</h3>
                <p className="text-gray-600">
                  Yes, our products are designed to be safe for all automotive finishes when used as directed.
                  Always read product instructions before use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
