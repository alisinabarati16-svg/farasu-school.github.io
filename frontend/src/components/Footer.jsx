import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { schoolInfo } from '../mock';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={schoolInfo.logo} 
                alt={schoolInfo.name}
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">{schoolInfo.name}</h3>
                <p className="text-sm text-amber-400">{schoolInfo.motto}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {schoolInfo.principal.message}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-amber-400 transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm hover:text-amber-400 transition-colors">
                  اخبار و رویدادها
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-sm hover:text-amber-400 transition-colors">
                  استادان
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-sm hover:text-amber-400 transition-colors">
                  نخبگان مدرسه
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-amber-400 transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">اطلاعات تماس</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-sm">{schoolInfo.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-sm">{schoolInfo.contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-sm">{schoolInfo.contact.address}</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {schoolInfo.name} - تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
};
