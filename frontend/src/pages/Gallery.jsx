import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { gallery } from '../mock';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">گالری تصاویر</h1>
          <p className="text-xl text-purple-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            لحظات زیبا و خاطره‌انگیز ما
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-6xl max-h-[90vh] overflow-hidden rounded-lg">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};