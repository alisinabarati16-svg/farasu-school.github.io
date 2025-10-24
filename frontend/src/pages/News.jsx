import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { news } from '../mock';

export const News = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">اخبار و رویدادها</h1>
          <p className="text-xl text-sky-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            آخرین اخبار و فعالیت‌های لیسه عالی فراسو
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    جدید
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};