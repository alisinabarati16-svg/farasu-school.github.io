import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { teachers } from '../mock';

export const Teachers = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-4 animate-scale-up" />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">استادان ما</h1>
          <p className="text-xl text-sky-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            معلمان متعهد و با تجربه
          </p>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                    <div className="flex items-center gap-2 text-amber-400">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-lg">{teacher.subject}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-5 h-5 text-sky-600" />
                    <span className="font-semibold">سابقه: {teacher.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            آیا می‌خواهید بخشی از تیم ما باشید؟
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            ما همیشه در جستجوی استادان با استعداد و متعهد هستیم
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full transition-all hover:scale-105"
          >
            با ما تماس بگیرید
          </a>
        </div>
      </div>
    </div>
  );
};