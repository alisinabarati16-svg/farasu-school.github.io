import React from 'react';
import { Star, Trophy, Award } from 'lucide-react';
import { topStudents } from '../mock';

export const Students = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Star className="w-16 h-16 mx-auto mb-4 animate-scale-up" />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">نخبگان مدرسه</h1>
          <p className="text-xl text-amber-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            شاگردان ممتاز و برتر
          </p>
        </div>
      </div>

      {/* Students Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topStudents.map((student, index) => (
              <div
                key={student.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{student.name}</h3>
                    <p className="text-amber-400 font-semibold">{student.grade}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-semibold">{student.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Motivation Section */}
      <div className="py-16 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">شما هم می‌توانید!</h2>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
            با تلاش، پشتکار و انگیزه، شما هم می‌توانید یکی از نخبگان لیسه فراسو باشید
            و نام خود را در تاریخ این مدرسه جاودانه کنید.
          </p>
        </div>
      </div>
    </div>
  );
};