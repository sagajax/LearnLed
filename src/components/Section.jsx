import { useState, useEffect } from "react";
import ele from '/ele.svg';
import Circles from "./Circles";

export default function BenefitsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center mb-16">
          <h1 className="font-inter text-4xl md:text-5xl font-bold flex flex-wrap justify-center">
            <span className="text-purple-500">Benefits</span>
            <span className="text-black ml-2 font-thin">of Enrollment</span>
          </h1>
          <div className="ml-4 mt-4 sm:mt-0">
            <img src={ele} alt="Illustration" className="h-64" />
          </div>
        </div>
        
        <div className={`transition-all duration-300 ease-in-out max-w-4xl mx-auto ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative flex flex-col gap-4">
            
            {/* Center circles - positioned absolutely */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-purple-200 group">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center group-hover:scale-105 transition-transform duration-300">
                    Flexible payment<br />methods
                  </h3>
                </div>
                <Circles classN="-bottom-30 -right-25" />
              </div>
              
              <div className="w-1/2 relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-purple-200 group">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center group-hover:scale-105 transition-transform duration-300">
                    Reward based learning
                  </h3>
                </div>
              <Circles classN="-bottom-30 -left-25" />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-purple-200 group">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center group-hover:scale-105 transition-transform duration-300">
                    Immutable<br />certifications
                  </h3>
                </div>
                <Circles classN="-top-30 -right-25" />
              </div>
              
              <div className="w-1/2 relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-purple-200 group">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center group-hover:scale-105 transition-transform duration-300">
                    Anonymous login<br />through web3 wallet
                  </h3>
                </div>
                <Circles classN="-top-30 -left-25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}