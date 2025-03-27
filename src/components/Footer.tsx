
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-jewelry-charcoal text-white">
      <div className="content-container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif mb-6">LUXE</h2>
            <p className="text-white/70 mb-6 max-w-xs">
              Crafting timeless jewelry pieces that celebrate life's most precious moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-md font-medium mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-jewelry-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#collections" className="text-white/70 hover:text-jewelry-gold transition-colors">Collections</a>
              </li>
              <li>
                <a href="#jewelry" className="text-white/70 hover:text-jewelry-gold transition-colors">Jewelry</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-jewelry-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-jewelry-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-md font-medium mb-6 uppercase tracking-wider">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-jewelry-gold transition-colors">Necklaces</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-jewelry-gold transition-colors">Earrings</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-jewelry-gold transition-colors">Rings</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-jewelry-gold transition-colors">Bracelets</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-jewelry-gold transition-colors">Wedding Collection</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-md font-medium mb-6 uppercase tracking-wider">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-1 focus:ring-jewelry-gold text-white"
                />
                <button
                  type="submit"
                  className="bg-jewelry-gold hover:bg-jewelry-gold/90 px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-white/50 text-xs">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-6">
          <div className="text-white/50 text-sm">
            &copy; {currentYear} Luxe Jewelry. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
            <a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
