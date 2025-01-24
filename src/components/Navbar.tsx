import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Resume', path: '/resume' },
              { name: 'Projects', path: '/projects' },
              { name: 'Video', path: '/video' },
              { name: 'Contact', path: '/contact' },
            ].map(({ name, path }) => (
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
          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}