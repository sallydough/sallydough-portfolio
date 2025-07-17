import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
      <div className="text-center">
        <Link to="/" className="block hover:opacity-80 transition-opacity">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black mb-2">sally do</h1>
          <p className="text-lg sm:text-xl text-gray-700">software developer</p>
        </Link>
        <Navigation />
      </div>
    </div>
  );
};

export default Home;