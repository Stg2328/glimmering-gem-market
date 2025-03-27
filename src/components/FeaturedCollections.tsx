
import { useInView, staggeredAnimationClass } from '@/lib/animations';
import { collections } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

const FeaturedCollections = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section 
      id="collections"
      className="py-20 md:py-28 bg-jewelry-offwhite"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="content-container">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="inline-block px-3 py-1 text-xs text-jewelry-gold bg-jewelry-gold/10 rounded-full tracking-wider mb-4">
            CURATED DESIGNS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Our Signature Collections
          </h2>
          <p className="text-jewelry-charcoal/80 max-w-2xl mx-auto">
            Each collection tells a story through carefully curated pieces, designed to complement your unique style.
          </p>
        </div>
        
        {/* Collections grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className={`group ${staggeredAnimationClass(index, 'animate-fade-up')} ${
                isInView ? 'animate-once' : 'opacity-0'
              }`}
            >
              <div className="overflow-hidden rounded-xl mb-5 aspect-[4/5] relative">
                {/* Collection image */}
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-jewelry-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View button */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-jewelry-charcoal rounded-md font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors">
                    View Collection
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              
              {/* Collection info */}
              <h3 className="text-xl font-serif font-medium mb-2">
                {collection.name}
              </h3>
              <p className="text-sm text-jewelry-charcoal/70 line-clamp-2">
                {collection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
