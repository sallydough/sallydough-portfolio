import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="px-4 sm:px-8 py-8 sm:py-12 lg:pl-16 lg:pr-8 xl-custom:px-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="block hover:opacity-80 transition-opacity text-left xl-custom:text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-2">sally do</h1>
          <p className="text-lg sm:text-xl text-gray-700">software developer</p>
        </Link>
        <div className="xl-custom:flex xl-custom:justify-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;