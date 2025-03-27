
import { useEffect, useState } from 'react';
import { useInView } from '@/lib/animations';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { ref, isInView } = useInView();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate image preloading
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
    img.onload = () => setIsLoaded(true);
  }, []);
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Background Image with blur effect until loaded */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
          }}
        />
        {/* Blur placeholder */}
        <div 
          className={`absolute inset-0 w-full h-full bg-jewelry-cream transition-opacity duration-1000 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-jewelry-black/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="content-container relative z-10 px-4 flex flex-col items-center text-center text-white">
        <div className={`transition-all duration-1000 transform ${
          isInView && isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <span className="inline-block px-4 py-1 mb-6 text-xs tracking-wider uppercase bg-jewelry-gold/20 backdrop-blur-sm rounded-full">
            New Collection
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 max-w-4xl">
            Timeless Elegance, Modern Expression
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Discover our handcrafted jewelry pieces, designed to celebrate life's most precious moments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#collections" 
              className="btn-primary min-w-[180px] flex items-center justify-center gap-2 bg-jewelry-gold hover:bg-jewelry-gold/90"
            >
              Explore Collections
              <ChevronRight size={18} />
            </a>
            <a 
              href="#about" 
              className="btn-secondary min-w-[180px] border-white text-white hover:bg-white hover:text-jewelry-charcoal"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5 transition-opacity duration-1000 ${
          isInView && isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-1.5 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
