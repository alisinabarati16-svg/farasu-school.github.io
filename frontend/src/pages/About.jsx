import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';
import { schoolInfo } from '../mock';

export const About = () => {
  const values = [
    {
      icon: Target,
      title: 'هدف ما',
      description: 'ارائه آموزش با کیفیت و پرورش نسل آینده‌ساز افغانستان'
    },
    {
      icon: Heart,
      title: 'ارزش‌های ما',
      description: 'صداقت، تعهد، احترام و تلاش برای برتری'
    },
    {
      icon: Award,
      title: 'چشم‌انداز',
      description: 'تبدیل شدن به مدرسه پیشرو در افغانستان'
    },
    {
      icon: Users,
      title: 'جامعه ما',
      description: 'محیطی دوستانه، حمایت‌گر و الهام‌بخش'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">درباره {schoolInfo.name}</h1>
          <p className="text-xl text-sky-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {schoolInfo.motto}
          </p>
        </div>
      </div>

      {/* Principal Message */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">پیام مدیر</h2>
                <h3 className="text-xl font-semibold text-sky-700 mb-4">{schoolInfo.principal.name}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {schoolInfo.principal.message}
                </p>
              </div>
              <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img
                  src={schoolInfo.principal.image}
                  alt={schoolInfo.principal.name}
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">ارزش‌ها و اهداف ما</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-amber-400 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">تاریخچه لیسه عالی فراسو</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              لیسه عالی فراسو در سال {schoolInfo.established} با هدف ارائه آموزش با کیفیت و پرورش نسل آینده‌ساز افغانستان تأسیس شد.
              این مدرسه با تکیه بر اصول تعلیم و تربیت اسلامی و مدرن، همواره در تلاش بوده است تا محیطی امن، سالم و الهام‌بخش
              برای فراگیری دانش و مهارت‌های زندگی فراهم آورد.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              امروزه لیسه فراسو با بیش از {schoolInfo.stats.students.toLocaleString()} شاگرد و {schoolInfo.stats.teachers} استاد
              متعهد و با تجربه، یکی از مراکز برتر آموزشی کابل محسوب می‌شود و افتخارات متعددی در عرصه‌های علمی و ورزشی
              کسب نموده است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};