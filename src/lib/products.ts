
export interface Product {
  id: string;
  name: string;
  category: 'necklaces' | 'earrings' | 'rings' | 'bracelets';
  price: number;
  image: string;
  featured?: boolean;
  new?: boolean;
  description: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[]; // IDs of products in this collection
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Eternal Diamond Necklace',
    category: 'necklaces',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: true,
    description: 'A timeless piece featuring a brilliant-cut diamond pendant on an 18k gold chain.'
  },
  {
    id: 'p2',
    name: 'Infinity Pearl Earrings',
    category: 'earrings',
    price: 890,
    image: 'https://images.unsplash.com/photo-1610694955371-d4a34a34e6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: true,
    description: 'Elegant pearl earrings with a modern twist, perfect for any occasion.'
  },
  {
    id: 'p3',
    name: 'Celestial Sapphire Ring',
    category: 'rings',
    price: 1590,
    image: 'https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: true,
    new: true,
    description: 'A stunning sapphire surrounded by a halo of diamonds, set in white gold.'
  },
  {
    id: 'p4',
    name: 'Golden Cascade Bracelet',
    category: 'bracelets',
    price: 950,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A delicate gold bracelet featuring cascading charms that catch the light.'
  },
  {
    id: 'p5',
    name: 'Emerald Whisper Necklace',
    category: 'necklaces',
    price: 1450,
    image: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    new: true,
    description: 'A delicate emerald pendant suspended on an almost invisible platinum chain.'
  },
  {
    id: 'p6',
    name: 'Vintage Ruby Earrings',
    category: 'earrings',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Vintage-inspired drop earrings featuring vibrant rubies and diamond accents.'
  },
  {
    id: 'p7',
    name: 'Platinum Eternity Ring',
    category: 'rings',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    featured: true,
    description: 'A timeless eternity ring with diamonds set all around in platinum.'
  },
  {
    id: 'p8',
    name: 'Amber Twist Bracelet',
    category: 'bracelets',
    price: 780,
    image: 'https://images.unsplash.com/photo-1611591437268-befb4b89c8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A modern bracelet featuring twisted gold and amber elements.'
  }
];

export const collections: Collection[] = [
  {
    id: 'c1',
    name: 'Celestial',
    description: 'Inspired by the stars and cosmos, featuring celestial motifs in precious metals.',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: ['p1', 'p3', 'p5']
  },
  {
    id: 'c2',
    name: 'Timeless',
    description: 'Classic designs reimagined for the modern era, with enduring style and elegance.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: ['p2', 'p4', 'p7']
  },
  {
    id: 'c3',
    name: 'Naturale',
    description: 'Jewelry inspired by natural forms and organic shapes, bringing the beauty of nature to life.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    products: ['p6', 'p8']
  }
];

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = () => {
  return products.filter(product => product.new);
};

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getCollectionById = (id: string) => {
  return collections.find(collection => collection.id === id);
};
