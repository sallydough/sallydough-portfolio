import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { path: '/about', label: 'about' },
    { path: '/portfolio', label: 'portfolio' },
    { path: '/contact', label: 'contact' }
  ];

  return (
    <nav className={`flex mt-8 ${
      isHomePage 
        ? 'flex-col space-y-4 justify-center sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-8' 
        : 'flex-row justify-start space-x-4 sm:space-x-8 xl-custom:justify-center'
    }`}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`py-3 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 hover:bg-[#d4c4b0] hover:shadow-md text-center ${
            isHomePage ? 'px-6 sm:px-8' : 'px-6 sm:px-10'
          } ${
            location.pathname === item.path
              ? 'bg-[#d4c4b0] shadow-md'
              : 'bg-white/80 hover:bg-white/90'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;