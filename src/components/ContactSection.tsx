
import { useInView } from '@/lib/animations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section 
      id="contact"
      className="py-20 md:py-28"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="content-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content column */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <span className="inline-block px-3 py-1 text-xs text-jewelry-gold bg-jewelry-gold/10 rounded-full tracking-wider mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Visit Our Boutique
            </h2>
            <p className="text-jewelry-charcoal/80 mb-10 max-w-lg">
              Experience our collection in person and receive personalized consultation from our experienced team. We're here to help you find the perfect piece for any occasion.
            </p>
            
            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jewelry-gold/10 flex items-center justify-center flex-shrink-0 text-jewelry-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-jewelry-charcoal mb-1">Location</h3>
                  <p className="text-jewelry-charcoal/70">
                    123 Luxury Lane, Prestige Plaza<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jewelry-gold/10 flex items-center justify-center flex-shrink-0 text-jewelry-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-jewelry-charcoal mb-1">Phone</h3>
                  <p className="text-jewelry-charcoal/70">
                    +1 (212) 555-7890
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jewelry-gold/10 flex items-center justify-center flex-shrink-0 text-jewelry-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-jewelry-charcoal mb-1">Email</h3>
                  <p className="text-jewelry-charcoal/70">
                    contact@luxejewelry.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-jewelry-gold/10 flex items-center justify-center flex-shrink-0 text-jewelry-gold">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-jewelry-charcoal mb-1">Hours</h3>
                  <p className="text-jewelry-charcoal/70">
                    Monday – Saturday: 10am – 7pm<br />
                    Sunday: 12pm – 5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form column */}
          <div className={`transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <form className="bg-white p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-serif mb-6">Send us a message</h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-jewelry-gold/50 focus:border-jewelry-gold/50"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-jewelry-gold/50 focus:border-jewelry-gold/50"
                    placeholder="jane@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-jewelry-gold/50 focus:border-jewelry-gold/50"
                    placeholder="Appointment Request"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-jewelry-gold/50 focus:border-jewelry-gold/50"
                    placeholder="I'd like to schedule a consultation..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-jewelry-gold hover:bg-jewelry-charcoal text-white py-3 rounded-md transition-colors duration-300 font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
