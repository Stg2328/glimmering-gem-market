
import { useInView } from '@/lib/animations';

const AboutSection = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section 
      id="about"
      className="py-20 md:py-28 bg-jewelry-offwhite"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="content-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-soft-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Jewelry craftsman at work"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-soft z-10 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1611591437268-befb4b89c8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Jewelry detail"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gold decoration */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/3 -translate-y-1/2 w-28 h-28 rounded-full border border-jewelry-gold/30 hidden lg:block" />
              <div className="absolute top-1/3 right-0 transform translate-x-1/3 w-16 h-16 rounded-full border border-jewelry-gold/30 hidden lg:block" />
            </div>
          </div>
          
          {/* Content column */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <span className="inline-block px-3 py-1 text-xs text-jewelry-gold bg-jewelry-gold/10 rounded-full tracking-wider mb-4">
              OUR STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Crafting Moments That Last Forever
            </h2>
            <div className="space-y-4 text-jewelry-charcoal/80">
              <p>
                Founded in 2008, Luxe Jewelry began with a simple vision: to create pieces that capture beauty in its purest form. Our founder, Elizabeth Chen, combined her background in fine arts with a passion for gemology to establish a brand that stands for quality, craftsmanship, and timeless design.
              </p>
              <p>
                Each piece in our collection is meticulously handcrafted by master artisans who have dedicated their lives to the art of jewelry making. We source only the finest ethically-obtained materials from around the world, including conflict-free diamonds, responsibly mined precious metals, and rare gemstones.
              </p>
              <p>
                Our commitment to excellence extends beyond our products to the experience we provide. We believe that purchasing jewelry should be as memorable as the moments it commemorates.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <div className="text-3xl font-serif text-jewelry-gold font-medium">15+</div>
                <div className="text-sm mt-1">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-jewelry-gold font-medium">5k+</div>
                <div className="text-sm mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-jewelry-gold font-medium">200+</div>
                <div className="text-sm mt-1">Unique Designs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
