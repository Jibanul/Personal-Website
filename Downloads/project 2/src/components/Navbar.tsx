import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Video', path: '/video' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <nav className={`transition-all duration-300 px-8 py-3 rounded-full ${
        isScrolled 
          ? 'bg-blue-50/80 backdrop-blur-md shadow-lg border border-white/20' 
          : 'bg-blue-50/60 backdrop-blur-sm border border-white/10'
      }`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/my_logo.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-100/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="mx-2 bg-blue-50/95 backdrop-blur-lg rounded-xl shadow-lg border border-blue-100/50 overflow-hidden">
              <div className="p-2">
                {navItems.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className={`block w-full text-sm font-medium transition-all px-4 py-3 rounded-lg ${
                      location.pathname === path
                        ? 'text-blue-600 bg-blue-100/50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100/50'
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}