
import { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-soft py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <h1 className="text-2xl font-semibold font-serif text-jewelry-charcoal">LUXE</h1>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="text-sm tracking-wide hover:text-jewelry-gold transition-colors">Collections</a>
            <a href="#jewelry" className="text-sm tracking-wide hover:text-jewelry-gold transition-colors">Jewelry</a>
            <a href="#about" className="text-sm tracking-wide hover:text-jewelry-gold transition-colors">About</a>
            <a href="#contact" className="text-sm tracking-wide hover:text-jewelry-gold transition-colors">Contact</a>
          </nav>
          
          {/* Desktop Action Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-jewelry-gold transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-jewelry-gold transition-colors">
              <User size={20} />
            </button>
            <button className="relative hover:text-jewelry-gold transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-jewelry-gold text-white rounded-full text-xs flex items-center justify-center">0</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 p-1 text-jewelry-charcoal" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-jewelry-white z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full px-6 pt-24 pb-6">
          <nav className="flex flex-col space-y-6 mb-8">
            <a 
              href="#collections" 
              className="text-lg font-serif text-jewelry-charcoal hover:text-jewelry-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </a>
            <a 
              href="#jewelry" 
              className="text-lg font-serif text-jewelry-charcoal hover:text-jewelry-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Jewelry
            </a>
            <a 
              href="#about" 
              className="text-lg font-serif text-jewelry-charcoal hover:text-jewelry-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-lg font-serif text-jewelry-charcoal hover:text-jewelry-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
          
          <div className="mt-auto flex space-x-8 justify-center">
            <button className="p-2 hover:text-jewelry-gold transition-colors">
              <Search size={24} />
            </button>
            <button className="p-2 hover:text-jewelry-gold transition-colors">
              <User size={24} />
            </button>
            <button className="p-2 relative hover:text-jewelry-gold transition-colors">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-jewelry-gold text-white rounded-full text-xs flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
