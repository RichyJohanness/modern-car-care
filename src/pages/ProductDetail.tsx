
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ChevronRight, Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-20 container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Produk tidak ditemukan</h1>
        <p className="mb-8">Maaf, produk yang Anda cari tidak tersedia.</p>
        <Button asChild>
          <Link to="/shop">Kembali ke Toko</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{product.name}</h1>
            <div className="flex items-center justify-center text-sm">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link to="/shop" className="hover:text-accent transition-colors">
                Shop
              </Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span>{product.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-12">
        <Button
          asChild
          variant="outline"
          className="mb-8"
          data-aos="fade-right"
        >
          <Link to="/shop" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Toko
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={18} 
                    className="fill-accent text-accent mr-1"
                  />
                ))}
              </div>
              <span className="text-gray-500">(12 ulasan)</span>
            </div>

            <div className="mb-4">
              {product.oldPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary mr-3">
                    ${product.price}
                  </span>
                  <span className="text-gray-500 line-through text-lg">
                    ${product.oldPrice}
                  </span>
                  <span className="ml-3 bg-accent text-dark text-sm font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-primary">
                  ${product.price}
                </span>
              )}
            </div>

            <div className="border-t border-b py-4 my-4">
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="mb-2">
                <span className="font-semibold">Kategori:</span> {product.category}
              </p>
              <p>
                <span className="font-semibold">Ketersediaan:</span>{" "}
                <span className="text-green-600">Tersedia</span>
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Jumlah
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-y border-gray-300 py-2 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <Button
              className="w-full bg-navy hover:bg-navy/90 text-white mb-4 py-6"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Tambahkan ke Keranjang
            </Button>

            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10 py-6"
            >
              Beli Sekarang
            </Button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">Produk Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover"
                      />
                      {relatedProduct.oldPrice && (
                        <div className="absolute top-2 right-2 bg-accent text-dark text-sm font-bold px-2 py-1 rounded">
                          SALE
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          {relatedProduct.oldPrice ? (
                            <div className="flex items-center">
                              <span className="text-lg font-bold text-primary">
                                ${relatedProduct.price}
                              </span>
                              <span className="text-gray-500 line-through ml-2 text-sm">
                                ${relatedProduct.oldPrice}
                              </span>
                            </div>
                          ) : (
                            <span className="text-lg font-bold text-primary">
                              ${relatedProduct.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
