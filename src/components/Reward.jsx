import React from 'react';
export default function Reward() {
  // Add Orbitron font import
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  let value = 0;

  return (
    <div className="bg-white mt-10  mb-20">
      <div className="flex items-center  relative justify-center space-x-2 text-3xl font-bold">
        <h1 className="text-[#9747FF] ">Reward</h1>
        <h1>System Mechanism</h1>
      </div>
      
      <div className="py-20">
        <div className="relative w-full max-w-3xl mx-auto pt-8">
          <div className="absolute -top-1 left-0 w-full flex justify-between text-black text-bold font-inter">
            <span>+5%</span>
            <span>+5%</span>
            <span>+11%</span>
            <span>+16%</span>
            <span>+20%</span>
          </div>
          
          <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
            <div
              className="h-full bg-[#9747FF] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${100 - value}%`, marginLeft: "auto" }}
            ></div>
          </div>
          
          <div className="absolute top-4 w-full flex justify-between">
            <div className="relative left-[25%] -translate-x-1/2">
              <div className="bg-green-600 text-white rounded-xl w-10 h-10 flex items-center justify-center font-inter">
                30%
              </div>
            </div>
            
            <div className="relative left-[26%] -translate-x-1/2">
              <div className="bg-green-600 text-white rounded-xl w-10 h-10 flex items-center justify-center font-inter">
                50%
              </div>
            </div>
            
            <div className="relative left-[3%] -translate-x-1/2">
              <div className="bg-green-600 text-white rounded-xl w-10 h-10 flex items-center justify-center font-inter">
                70%
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 space-x-2 text-center">
        <span style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-6xl text-[#9747FF] font-bold ">
          +5% 
        </span>
        <span style={{ fontFamily: 'Orbitron, sans-serif' }} className="text-4xl text-black font-bold font-thin">
          When paid in EDU
        </span>
      </div>
      
    </div>
  );
}