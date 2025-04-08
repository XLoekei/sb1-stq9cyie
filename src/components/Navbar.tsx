import React from 'react';
import { Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">WholeFit</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#pillars" className="text-gray-300 hover:text-white transition-colors">Pillars</a>
            <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <button className="redpill-button">
              Join WholeFit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;