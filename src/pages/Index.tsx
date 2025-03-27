
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import ProductGallery from '@/components/ProductGallery';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.includes('#')) {
        const id = target.getAttribute('href')?.split('#')[1];
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="w-full bg-jewelry-cream">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <ProductGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
