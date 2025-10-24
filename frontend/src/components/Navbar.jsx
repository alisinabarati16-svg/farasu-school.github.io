import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { schoolInfo } from '../mock';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'صفحه اصلی' },
    { to: '/about', label: 'درباره ما' },
    { to: '/news', label: 'اخبار' },
    { to: '/achievements', label: 'دستاوردها' },
    { to: '/teachers', label: 'استادان' },
    { to: '/students', label: 'نخبگان' },
    { to: '/futsal', label: 'تیم فوتسال' },
    { to: '/gallery', label: 'گالری' },
    { to: '/contact', label: 'تماس با ما' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={schoolInfo.logo} 
              alt={schoolInfo.name}
              className="h-14 w-14 object-contain"
            />
            <div className="text-right">
              <h1 className="text-xl font-bold text-sky-700">{schoolInfo.name}</h1>
              <p className="text-xs text-amber-600">{schoolInfo.motto}</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'bg-sky-600 text-white'
                    : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-sky-700" />
            ) : (
              <Menu className="w-6 h-6 text-sky-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-sky-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? 'bg-sky-600 text-white'
                      : 'text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
