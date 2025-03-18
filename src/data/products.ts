
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
    name: "Set Handuk Microfiber Premium",
    price: 24.99,
    oldPrice: 29.99,
    description: "Handuk microfiber ultra-lembut, bebas serat untuk membersihkan kendaraan Anda tanpa meninggalkan bekas.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b4c3159?q=80&w=2940&auto=format&fit=crop",
    category: "Pembersihan",
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Sarung Cuci Mobil Profesional",
    price: 19.99,
    description: "Sarung cuci dengan tumpukan dalam yang menampung banyak busa dan mengangkat kotoran dari cat.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2748&auto=format&fit=crop",
    category: "Pembersihan",
    featured: true,
    bestseller: false
  },
  {
    id: 3,
    name: "Sampo Mobil Canggih",
    price: 14.99,
    oldPrice: 17.99,
    description: "Formula pH-netral yang dengan lembut menghilangkan kotoran dan noda tanpa merusak lilin pelindung.",
    image: "https://images.unsplash.com/photo-1600861195091-690e4a1b46f3?q=80&w=2980&auto=format&fit=crop",
    category: "Solusi Pembersihan",
    featured: false,
    bestseller: true
  },
  {
    id: 4,
    name: "Kit Detailing Lengkap",
    price: 89.99,
    oldPrice: 109.99,
    description: "Semua yang Anda butuhkan untuk detailing mobil lengkap dalam satu paket yang praktis.",
    image: "https://images.unsplash.com/photo-1605618925053-f96160dd750c?q=80&w=2938&auto=format&fit=crop",
    category: "Kit",
    featured: true,
    bestseller: true
  },
  {
    id: 5,
    name: "Semir Ban Premium",
    price: 12.99,
    description: "Memberikan kilau tahan lama dan perlindungan UV untuk ban mobil Anda.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2764&auto=format&fit=crop",
    category: "Solusi Pembersihan",
    featured: false,
    bestseller: false
  },
  {
    id: 6,
    name: "Polish & Sealant 2-in-1",
    price: 34.99,
    oldPrice: 39.99,
    description: "Polish dan sealant dalam satu produk untuk hasil kilau dan perlindungan yang luar biasa.",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2787&auto=format&fit=crop",
    category: "Pemolesan",
    featured: true,
    bestseller: false
  },
  {
    id: 7,
    name: "Sikat Detail Interior",
    price: 9.99,
    description: "Sikat berkualitas tinggi untuk membersihkan area sulit dijangkau pada interior mobil.",
    image: "https://images.unsplash.com/photo-1621963563991-49132bc0e414?q=80&w=3087&auto=format&fit=crop",
    category: "Pembersihan",
    featured: false,
    bestseller: true
  },
  {
    id: 8,
    name: "Mesin Poles Profesional",
    price: 149.99,
    oldPrice: 179.99,
    description: "Mesin poles bertenaga dengan berbagai pengaturan kecepatan untuk hasil profesional di rumah.",
    image: "https://images.unsplash.com/photo-1566375638485-6f811b3f94fa?q=80&w=2940&auto=format&fit=crop",
    category: "Peralatan",
    featured: true,
    bestseller: true
  }
];
