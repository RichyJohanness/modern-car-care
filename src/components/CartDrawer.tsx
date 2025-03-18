
import React from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div 
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto z-50 animate-fade-in-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Keranjang Belanja</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <ShoppingCart className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500">Keranjang belanja Anda kosong</p>
            <Button 
              onClick={onClose} 
              className="mt-4 bg-primary hover:bg-primary/90"
            >
              Lanjutkan Belanja
            </Button>
          </div>
        ) : (
          <>
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="p-4 flex">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3 className="line-clamp-1">{item.name}</h3>
                      <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 py-6">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-dark font-bold"
              >
                Checkout
              </Button>
              <div className="mt-2">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="w-full"
                >
                  Lanjutkan Belanja
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
