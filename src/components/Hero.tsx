import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const whatsappNumber = "+255714232690";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in your luxury perfumes and cosmetics. Can you help me?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-yellow-400"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full border border-yellow-400"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border border-yellow-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="flex justify-center lg:justify-start mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  AURA
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
                Perfume & Cosmetics
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-yellow-400 font-medium mb-8 leading-relaxed">
              Stay classy, stay unforgettable
            </p>

            <p className="text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0">
              Discover our collection of luxurious perfumes and elegant cosmetics that elevate your style and leave a lasting impression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="mr-2" size={20} />
                Shop Now on WhatsApp
              </a>
              <button
                onClick={onShopClick}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                View Products
              </button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent p-6 rounded-2xl backdrop-blur-sm border border-yellow-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg mb-4 mx-auto"></div>
                  <h3 className="text-white text-sm font-medium text-center">Luxury Perfumes</h3>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent p-6 rounded-2xl backdrop-blur-sm border border-yellow-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg mb-4 mx-auto"></div>
                  <h3 className="text-white text-sm font-medium text-center">Premium Cosmetics</h3>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent p-6 rounded-2xl backdrop-blur-sm border border-yellow-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 mx-auto"></div>
                  <h3 className="text-white text-sm font-medium text-center">Elegant Accessories</h3>
                </div>
                <div className="bg-gradient-to-br from-yellow-400/20 to-transparent p-6 rounded-2xl backdrop-blur-sm border border-yellow-400/30 transform hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-14 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-lg mb-4 mx-auto"></div>
                  <h3 className="text-white text-sm font-medium text-center">Gift Sets</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;