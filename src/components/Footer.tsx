import React from 'react';
import { Instagram, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = `https://wa.me/+255714232690?text=${encodeURIComponent("Hi! I'd like to know more about your products.")}`;

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Aura Cosmetics TZ" 
                className="h-10 w-auto mr-3"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGRkQ3MDAiLz4KPHR0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE2Ij5BPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
              <div>
                <h3 className="text-2xl font-bold text-white">AURA</h3>
                <p className="text-xs text-yellow-400">Perfume & Cosmetics</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Aura Cosmetics TZ brings you luxurious perfumes and elegant accessories to elevate your style. 
              Stay classy, stay unforgettable with our authentic luxury products in Dar es Salaam, Tanzania.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/auracosmeticstz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mafia na Jangwani street</p>
                  <p className="text-gray-400 text-sm">Dar es Salaam, Tanzania</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+255714232690</p>
                  <p className="text-gray-400 text-sm">WhatsApp & Call</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">@auracosmeticstz</p>
                  <p className="text-gray-400 text-sm">Follow for updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 Aura Cosmetics TZ. All rights reserved.
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400 text-sm mr-2">Made with</p>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <p className="text-gray-400 text-sm ml-2">in Tanzania</p>
            </div>
          </div>
        </div>

        {/* SEO Keywords - Hidden */}
        <div className="hidden">
          Perfumes Tanzania, Aura Cosmetics, Dar es Salaam perfumes, luxury perfumes, cosmetics Tanzania, 
          wholesale perfumes, retail cosmetics, Tanzanian perfume store, luxury fragrances Tanzania
        </div>
      </div>
    </footer>
  );
};

export default Footer;