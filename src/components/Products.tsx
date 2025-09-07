import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';

const Products: React.FC = () => {
  const handleWhatsAppOrder = (productName: string, price: string) => {
    const whatsappNumber = "+255714232690";
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering: ${productName} - Price: ${price}. Can you please provide more details?`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Collection</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of luxury perfumes and premium cosmetics. 
            Each product is chosen for its exceptional quality and ability to make you feel unforgettable.
          </p>
        </div>

        {/* Featured Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Featured Products from Our Instagram
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-yellow-400/30"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDIwMCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjU2IiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMjgiIHJ4PSI4IiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3NDhGIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiI+UGVyZnVtZTwvdGV4dD4KPC9zdmc+';
                  }}
                />
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-black text-yellow-400 px-3 py-1 rounded-full text-xs font-bold">
                    Bestseller
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-black">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2 text-sm">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {product.category}
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(product.name, product.price)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Looking for Something Specific?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us directly on WhatsApp and we'll help you find the perfect fragrance or cosmetic product.
            </p>
            <a
              href={`https://wa.me/+255714232690?text=${encodeURIComponent("Hi! I'm looking for a specific perfume or cosmetic product. Can you help me?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;