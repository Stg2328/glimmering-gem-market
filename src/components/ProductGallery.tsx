
import { useState } from 'react';
import { useInView, staggeredAnimationClass } from '@/lib/animations';
import { products, getProductsByCategory, Product } from '@/lib/products';
import { ShoppingBag, Heart } from 'lucide-react';

type Category = Product['category'] | 'all';

const ProductGallery = () => {
  const { ref, isInView } = useInView();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const displayedProducts = activeCategory === 'all' 
    ? products 
    : getProductsByCategory(activeCategory);
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'rings', label: 'Rings' },
    { value: 'bracelets', label: 'Bracelets' },
  ];
  
  return (
    <section 
      id="jewelry"
      className="py-20 md:py-28"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="content-container">
        {/* Section heading */}
        <div className={`text-center mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="inline-block px-3 py-1 text-xs text-jewelry-gold bg-jewelry-gold/10 rounded-full tracking-wider mb-4">
            HANDCRAFTED PIECES
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Explore Our Jewelry
          </h2>
          <p className="text-jewelry-charcoal/80 max-w-2xl mx-auto">
            Each piece is meticulously crafted using the finest materials and techniques to ensure exceptional quality and beauty.
          </p>
        </div>
        
        {/* Category filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-jewelry-gold text-white'
                  : 'bg-jewelry-cream hover:bg-jewelry-gold/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group ${staggeredAnimationClass(index, 'animate-fade-up')} ${
                isInView ? 'animate-once' : 'opacity-0'
              }`}
            >
              {/* Product image */}
              <div className="relative rounded-lg overflow-hidden mb-4 aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* New label */}
                {product.new && (
                  <div className="absolute top-3 left-3 px-2 py-1 bg-jewelry-gold text-white text-xs font-medium rounded">
                    New
                  </div>
                )}
                
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-jewelry-black/20 backdrop-blur-sm">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-jewelry-gold hover:text-white transition-colors">
                    <ShoppingBag size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-jewelry-gold hover:text-white transition-colors">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              
              {/* Product details */}
              <div>
                <h3 className="font-serif text-lg mb-1 transition-colors group-hover:text-jewelry-gold">
                  {product.name}
                </h3>
                <p className="text-sm text-jewelry-charcoal/60 mb-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
                <div className="font-medium text-jewelry-gold">
                  ${product.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
