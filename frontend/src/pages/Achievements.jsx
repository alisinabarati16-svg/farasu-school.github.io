import React from 'react';
import { Trophy, Medal, Star, Award } from 'lucide-react';
import { achievements } from '../mock';

export const Achievements = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 animate-scale-up" />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">دستاوردها و افتخارات</h1>
          <p className="text-xl text-amber-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            نتیجه تلاش و کوشش شاگردان و استادان ما
          </p>
        </div>
      </div>

      {/* Achievements List */}
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-r-4 border-amber-500 hover:border-sky-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">{achievement.title}</h3>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-br from-sky-600 to-sky-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <Trophy className="w-12 h-12 mx-auto mb-3 text-amber-400" />
                <div className="text-5xl font-bold mb-2">120+</div>
                <div className="text-lg text-sky-100">افتخارات</div>
              </div>
              <div>
                <Medal className="w-12 h-12 mx-auto mb-3 text-amber-400" />
                <div className="text-5xl font-bold mb-2">45+</div>
                <div className="text-lg text-sky-100">مدال‌ها</div>
              </div>
              <div>
                <Star className="w-12 h-12 mx-auto mb-3 text-amber-400" />
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-lg text-sky-100">رتبه‌های برتر</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};