export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  category: string;
  image: string;
  rating: number;
  featured: boolean;
  bestseller: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Stronger With You - Armani",
    description: "A captivating masculine fragrance with notes of vanilla, chestnut, and aromatic herbs. Perfect for the modern gentleman.",
    price: "TSH 180,000",
    originalPrice: "TSH 220,000",
    category: "Men's Perfume",
    image: "https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    featured: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Liquid Brun Luxury",
    description: "An exclusive liquid perfume with rich, deep notes that last all day. A signature scent for sophisticated individuals.",
    price: "TSH 150,000",
    category: "Unisex Perfume",
    image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    featured: true,
    bestseller: false
  },
  {
    id: 3,
    name: "Blue Snake Bottle Perfume",
    description: "Exotic and mysterious fragrance in a stunning blue bottle. Notes of ocean breeze, bergamot, and white musk.",
    price: "TSH 160,000",
    category: "Unisex Perfume",
    image: "https://images.pexels.com/photos/1797388/pexels-photo-1797388.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    featured: false,
    bestseller: true
  },
  {
    id: 4,
    name: "Golden Elegance Women",
    description: "A feminine fragrance with floral notes of rose, jasmine, and a hint of vanilla. Perfect for special occasions.",
    price: "TSH 170,000",
    originalPrice: "TSH 200,000",
    category: "Women's Perfume",
    image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    featured: true,
    bestseller: true
  },
  {
    id: 5,
    name: "Royal Oud Collection",
    description: "Premium oud fragrance with traditional Arabian notes. A luxurious scent that commands attention and respect.",
    price: "TSH 250,000",
    category: "Premium Oud",
    image: "https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5.0,
    featured: true,
    bestseller: false
  },
  {
    id: 6,
    name: "Crystal Clear Fresh",
    description: "Light and refreshing fragrance perfect for daily wear. Notes of citrus, green tea, and fresh morning dew.",
    price: "TSH 120,000",
    category: "Daily Wear",
    image: "https://images.pexels.com/photos/1797388/pexels-photo-1797388.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    featured: false,
    bestseller: true
  },
  {
    id: 7,
    name: "Midnight Romance",
    description: "Sensual evening fragrance with notes of dark chocolate, red wine, and exotic spices. Perfect for romantic nights.",
    price: "TSH 190,000",
    category: "Evening Wear",
    image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    featured: false,
    bestseller: false
  },
  {
    id: 8,
    name: "Urban Legend Sport",
    description: "Fresh sporty fragrance for active individuals. With notes of mint, eucalyptus, and energizing citrus.",
    price: "TSH 140,000",
    originalPrice: "TSH 160,000",
    category: "Sport Fragrance",
    image: "https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    featured: false,
    bestseller: true
  },
  {
    id: 9,
    name: "Premium Cosmetic Set",
    description: "Complete makeup set with foundation, lipstick, eyeshadow palette, and mascara. Everything you need for a perfect look.",
    price: "TSH 200,000",
    originalPrice: "TSH 250,000",
    category: "Cosmetics Set",
    image: "https://images.pexels.com/photos/1797388/pexels-photo-1797388.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    featured: true,
    bestseller: false
  }
];