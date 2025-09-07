import React from 'react';
import { MapPin, Phone, Instagram, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Store Location',
      details: 'Mafia na Jangwani street',
      subtitle: 'Dar es Salaam, Tanzania'
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      details: '+255714232690',
      subtitle: 'Click to call or chat'
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      details: '@auracosmeticstz',
      subtitle: 'Latest products & updates'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Sat: 8AM - 8PM',
      subtitle: 'Sun: 10AM - 6PM'
    }
  ];

  const whatsappNumber = "+255714232690";
  const whatsappMessage = encodeURIComponent("Hi! I found you through your website. I'd like to know more about your products and services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our store in Dar es Salaam or contact us via WhatsApp for instant assistance. 
            We're here to help you find the perfect fragrance and cosmetic products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-800 font-medium">{item.details}</p>
                    <p className="text-gray-600 text-sm">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
              
              <a
                href="tel:+255714232690"
                className="flex items-center justify-center w-full border-2 border-yellow-400 text-yellow-600 font-bold py-4 px-6 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              
              <a
                href="https://instagram.com/auracosmeticstz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-black text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Map/Location Visual */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-black to-gray-900 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Our Store</h3>
              <p className="text-gray-300 mb-6">
                Experience our luxury perfumes and cosmetics in person at our Dar es Salaam location.
              </p>
              
              {/* Store Visual */}
              <div className="bg-gradient-to-br from-yellow-400/20 to-transparent rounded-lg p-6 border border-yellow-400/30 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg mr-4"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg mr-4"></div>
                  <div className="w-16 h-18 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-lg"></div>
                </div>
                <p className="text-center text-yellow-400 font-medium">AURA Cosmetics TZ Store</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                  <div>
                    <p className="font-medium">Mafia na Jangwani street</p>
                    <p className="text-sm text-gray-300">Dar es Salaam, Tanzania</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                  <div>
                    <p className="font-medium">Mon-Sat: 8AM - 8PM</p>
                    <p className="text-sm text-gray-300">Sunday: 10AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-8">
              <h4 className="text-xl font-bold text-black mb-4">Why Choose AURA?</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Authentic luxury perfumes and cosmetics</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Wholesale and retail options available</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Fast delivery across Dar es Salaam</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Expert advice and personalized service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Order?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Don't wait! Contact us now via WhatsApp to place your order or get personalized recommendations for your perfect fragrance.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Shopping Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;