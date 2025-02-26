import React from 'react';
import Navbar from './Navbar';
import h1 from '/h1.svg';

const MobHero = () => {
  return (
    <div className="bg-white">
      <Navbar />
      
      <div className="p-4 flex flex-row items-center min-h-[225px] overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="w-1/2 pr-2 z-10">
          {/* Purple Headline with specific line break */}
          <div className="text-purple-600 font-bold mb-3">
            <div className="text-4xl whitespace-nowrap">Earn While You</div>
            <div className="text-4xl">Learn!</div>
          </div>
          
          {/* Gray Subtext - now with first line as nowrap */}
          <div className="text-gray-500 mb-4 text-sm">
            <div className="whitespace-nowrap">Get Up to 25% cashback in</div>
            <div>EDU tokens</div>
          </div>
          
          {/* Green Button */}
          <button className="bg-green-500 text-white px-6 py-2 rounded-md text-sm">
            Start Learning
          </button>
        </div>
        
        {/* Right Side - Hero Image */}
        <div className="w-1/2">
          <img 
            src={h1} 
            alt="Learning illustration" 
            className="w-full object-contain max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MobHero;