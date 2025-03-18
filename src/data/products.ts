
export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  bestseller: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Microfiber Towel Set",
    price: 24.99,
    oldPrice: 29.99,
    description: "Ultra-soft, lint-free microfiber towels for streak-free cleaning of your vehicle.",
    image: "/products/microfiber-towel.jpg",
    category: "Cleaning",
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Professional Car Wash Mitt",
    price: 19.99,
    description: "Deep pile wash mitt that holds lots of suds and lifts dirt away from paintwork.",
    image: "/products/wash-mitt.jpg",
    category: "Cleaning",
    featured: true,
    bestseller: false
  },
  {
    id: 3,
    name: "Advanced Car Shampoo",
    price: 14.99,
    oldPrice: 17.99,
    description: "pH-neutral formula that gently removes dirt and grime without stripping wax.",
    image: "/products/car-shampoo.jpg",
    category: "Cleaning Solutions",
    featured: false,
    bestseller: true
  },
  {
    id: 4,
    name: "Complete Detailing Kit",
    price: 89.99,
    oldPrice: 109.99,
    description: "Everything you need for a complete car detail in one convenient package.",
    image: "/products/detailing-kit.jpg",
    category: "Kits",
    featured: true,
    bestseller: true
  }
];
