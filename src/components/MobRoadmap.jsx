import React from 'react';
import e1 from '/e1.svg';
import block from '/block.svg';
import chain from '/chain.svg';
import hands from '/hands.svg';
import charity from '/charity.svg';
import stock from '/stock.svg';

const MobRoadmap = () => {
  return (
    <div className="w-full p-2 sm:p-4 relative" style={{ minWidth: "320px", minHeight: "221px" }}>
      {/* Mountain climber image positioned in background */}
      <div className="absolute right-0 top-32 w-48 sm:w-56 md:w-64 h-80 sm:h-96 z-0">
        <img 
          src={e1} 
          alt="Climbing man" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="mb-4 sm:mb-6 flex flex-col items-center text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-1">
        Road Map for <span className="text-purple-600">Token Exchange</span>
      </h2>
      <div className="w-32 sm:w-40 md:w-48 h-1 rounded-full bg-purple-600"></div>
    </div>

      <div className="relative z-10">
        {/* Item 1 */}
        <div className="flex mb-4 sm:mb-6">
          <div className="w-10 sm:w-12 md:w-16 mr-2 sm:mr-4 flex flex-col items-center">
            <img src={block} alt="Block" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
          </div>
          <div>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Testnet Launch</h3>
            <p className="text-green-400 text-xs sm:text-base md:text-lg">Mar 2025</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex mb-4 sm:mb-6">
          <div className="w-10 sm:w-12 md:w-16 mr-2 sm:mr-4 flex flex-col items-center">
            <img src={chain} alt="Chain" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
          </div>
          <div>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Mainnet Launch</h3>
            <p className="text-green-400 text-xs sm:text-base md:text-lg">Q2 2025</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex mb-4 sm:mb-6">
          <div className="w-10 sm:w-12 md:w-16 mr-2 sm:mr-4 flex flex-col items-center">
            <img src={hands} alt="Hands" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
          </div>
          <div>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Integration Pilot with Ecosystem</h3>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Partners</h3>
            <p className="text-green-400 text-xs sm:text-base md:text-lg">Q3 2025</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex mb-4 sm:mb-6">
          <div className="w-10 sm:w-12 md:w-16 mr-2 sm:mr-4 flex flex-col items-center">
            <img src={charity} alt="Charity" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
          </div>
          <div>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">ERC20 Token Generation</h3>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Event(TGE)</h3>
            <p className="text-green-400 text-xs sm:text-base md:text-lg">Q4 2025</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex">
          <div className="w-10 sm:w-12 md:w-16 mr-2 sm:mr-4 flex flex-col items-center">
            <img src={stock} alt="Stock" className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
          </div>
          <div>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Token Listing on Major</h3>
            <h3 className="text-sm sm:text-lg md:text-xl font-medium">Changes</h3>
            <p className="text-green-400 text-xs sm:text-base md:text-lg">Q1 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobRoadmap;