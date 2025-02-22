import { useState, useEffect } from "react"; 
import ele from '/ele.svg';  

export default function BenefitsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className="min-h-screen mb-10 bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="relative w-full flex justify-center mb-16">
            <div className="flex items-center font-inter text-4xl md:text-5xl font-bold">
              <h1 className="text-[#9747FF]">Benefits</h1>
              <h1 className="text-black ml-2">of Enrollment</h1>
            </div>
            <div className="">
              <img src={ele} alt="Illustration" className="h-64 " />
            </div>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-4 md:mb-0 relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[#9747FF]/20 rounded-[32px] blur-xl"></div>
            <div className="rounded-[32px] border border-[#9747FF] p-[1px] h-40 relative">
              <div className="h-full w-full rounded-[30px] bg-[#F5F0FF]/80 flex items-center justify-center px-4">
                <h2 className="text-[#9747FF] text-xl md:text-2xl font-inter font-bold text-center">
                  Anonymous login<br />through web3 wallet
                </h2>
              </div>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0 relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[#9747FF]/20 rounded-[32px] blur-xl"></div>
            <div className="rounded-[32px] border border-[#9747FF] p-[1px] h-40 relative">
              <div className="h-full w-full rounded-[30px] bg-[#F5F0FF]/80 flex items-center justify-center px-4">
                <h3 className="text-[#9747FF] text-xl md:text-2xl font-inter font-bold text-center">
                  Reward based learning
                </h3>
              </div>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0 relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[#9747FF]/20 rounded-[32px] blur-xl"></div>
            <div className="rounded-[32px] border border-[#9747FF] p-[1px] h-40 relative">
              <div className="h-full w-full rounded-[30px] bg-[#F5F0FF]/80 flex items-center justify-center px-4">
                <h3 className="text-[#9747FF] text-xl md:text-2xl font-inter font-bold text-center">
                  Immutable<br />certifications
                </h3>
              </div>
            </div>
          </div>
          
          <div className="mb-4 md:mb-0 relative cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[#9747FF]/20 rounded-[32px] blur-xl"></div>
            <div className="rounded-[32px] border border-[#9747FF] p-[1px] h-40 relative">
              <div className="h-full w-full rounded-[30px] bg-[#F5F0FF]/80 flex items-center justify-center px-4">
                <h3 className="text-[#9747FF] text-xl md:text-2xl font-inter font-bold text-center">
                  Flexible payment<br />methods
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}