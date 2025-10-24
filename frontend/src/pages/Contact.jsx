import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { schoolInfo } from '../mock';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - no backend yet
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">تماس با ما</h1>
          <p className="text-xl text-sky-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ما آماده دریافت پیشنهادات و سوالات شما هستیم
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">اطلاعات تماس</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">شماره تماس</h3>
                      <p className="text-gray-600">{schoolInfo.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">ایمیل</h3>
                      <p className="text-gray-600">{schoolInfo.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">آدرس</h3>
                      <p className="text-gray-600">{schoolInfo.contact.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211654.78596693785!2d69.02863855!3d34.5553494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16eb6c5b8d6b5%3A0x1e3f2d8e9c8b1c5a!2sKabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="School Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">پیام خود را بنویسید</h2>
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">پیام شما ارسال شد!</h3>
                      <p className="text-gray-600">به زودی با شما تماس خواهیم گرفت.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                          نام و نام خانوادگی
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors"
                          placeholder="نام خود را وارد کنید"
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                          ایمیل
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors"
                          placeholder="ایمیل خود را وارد کنید"
                        />
                      </div>

                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                          پیام
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sky-500 focus:outline-none transition-colors resize-none"
                          placeholder="پیام خود را بنویسید"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-l from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold py-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        ارسال پیام
                      </button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
