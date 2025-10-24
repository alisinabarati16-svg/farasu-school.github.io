import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, GraduationCap, Award, BookOpen } from 'lucide-react';
import { heroSlides, schoolInfo, news, achievements } from '../mock';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const stats = [
    { icon: Users, label: 'شاگردان', value: schoolInfo.stats.students },
    { icon: GraduationCap, label: 'استادان', value: schoolInfo.stats.teachers },
    { icon: BookOpen, label: 'کلاس‌ها', value: schoolInfo.stats.classes },
    { icon: Award, label: 'دستاوردها', value: schoolInfo.stats.achievements }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-4xl px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link
                  to="/about"
                  className="inline-block mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg"
                >
                  بیشتر بدانید
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'w-8 bg-amber-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-sky-600 to-sky-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-amber-400" />
                <div className="text-4xl font-bold mb-1">{stat.value.toLocaleString()}</div>
                <div className="text-lg text-sky-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">آخرین اخبار</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-amber-600 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/news"
              className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full transition-all hover:scale-105"
            >
              همه اخبار
            </Link>
          </div>
        </div>
      </div>

      {/* Achievements Preview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">دستاوردهای ما</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-6 bg-gradient-to-br from-amber-50 to-sky-50 rounded-2xl border-2 border-amber-200 hover:border-sky-400 transition-all hover:scale-105"
              >
                <div className="text-5xl font-bold text-amber-600 mb-3">{achievement.year}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
