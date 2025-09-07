import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Carefully curated luxury perfumes and cosmetics from renowned brands.'
    },
    {
      icon: Users,
      title: 'Wholesale & Retail',
      description: 'Flexible options for both individual customers and business partners.'
    },
    {
      icon: MapPin,
      title: 'Local Presence',
      description: 'Proudly serving Dar es Salaam with authentic luxury products.'
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast delivery and responsive customer service via WhatsApp.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">AURA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Our Story</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Aura Cosmetics TZ brings you luxurious perfumes and elegant accessories to elevate your style. 
              We specialize in authentic, high-quality fragrances and cosmetics that help you make a statement 
              wherever you go.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Located in the heart of Dar es Salaam, Tanzania, we offer both wholesale and retail options 
              to meet the diverse needs of our customers. From individual fragrance enthusiasts to business 
              partners, we provide exceptional service and authentic products.
            </p>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black p-6 rounded-lg">
              <p className="font-semibold text-lg italic">
                "Stay classy, stay unforgettable - that's not just our tagline, it's our promise to you."
              </p>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-20 h-24 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg mx-auto mb-4"></div>
                  <p className="text-white font-medium">Luxury Fragrances</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg mx-auto mb-4"></div>
                  <p className="text-white font-medium">Premium Cosmetics</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4"></div>
                  <p className="text-white font-medium">Elegant Sets</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-12 bg-gradient-to-t from-yellow-400 to-yellow-600 rounded-lg mx-auto mb-4"></div>
                  <p className="text-white font-medium">Accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400/30 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h4 className="text-xl font-bold text-black mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Discover Your Signature Scent?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust AURA for their luxury fragrance and cosmetic needs.
            </p>
            <a
              href={`https://wa.me/+255714232690?text=${encodeURIComponent("Hi! I'd like to learn more about your luxury perfumes and cosmetics.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;