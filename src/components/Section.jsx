import { useState, useEffect } from "react"; 
import ele from '/ele.svg';  

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
           
            <div className="flex gap-4">
             
              <div className="w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center">
                    Flexible payment<br />methods
                  </h3>
                </div>
              </div>
             
              <div className="w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center">
                    Reward based learning
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center">
                    Immutable<br />certifications
                  </h3>
                </div>
              </div>
              
              <div className="w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-100 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-purple-200 opacity-70 rounded-3xl"></div>
                <div className="relative p-6 flex items-center justify-center min-h-48 rounded-3xl">
                  <h3 className="text-purple-600 text-3xl md:text-4xl font-bold text-center">
                    Anonymous login<br />through web3 wallet
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}