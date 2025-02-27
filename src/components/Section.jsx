import { useState, useEffect } from "react";
import ele from "/ele.svg";
import Circles from "./Circles";

export default function BenefitsSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className=" bg-white p-2 mb-8 sm:mb-15 sm:p-4 md:p-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex  sm:flex-row justify-center items-center mb-4 sm:mb-6 md:mb-12">
      <div className="flex flex-col items-center">
        <h1 className="font-inter text-2xl sm:text-3xl md:text-5xl font-bold flex flex-wrap justify-center text-center">
          <span className="text-purple-500">Benefits</span>
          <span className="text-black ml-2 font-thin">of Enrollment</span>
        </h1>
        <div className="w-32 sm:w-40 md:w-48 h-1 bg-purple-500 mt-2 rounded-full"></div>
      </div>
      <div className=" sm:ml-4 sm:mt-0">
        <img
          src={ele}
          alt="Illustration"
          className="h-16 sm:h-32 md:h-64"
        />
      </div>
    </div>

        <div
          className={`transition-all duration-300 ease-in-out max-w-4xl mx-auto ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            {/* 2x2 Grid layout that maintains the same layout on mobile */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {/* Box 1: Flexible payment methods - Circles in bottom-right */}
              <div className="relative overflow-hidden rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-purple-200 group">
                <div className="absolute inset-0  rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#fefeff] to-[#e6dcfa] opacity-70 rounded-full group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center h-24 sm:h-32 md:h-48 lg:h-64 rounded-full z-20">
                  <h3 className=" text-xs sm:text-lg md:text-3xl lg:text-4xl  text-center group-hover:scale-105 transition-transform duration-300">
                    Flexible payment
                    <br className="hidden sm:block" />
                    methods
                  </h3>
                </div>
                <div className="absolute z-10 right-0 bottom-0 transform scale-100 sm:scale-125 md:scale-150 lg:scale-175">
                  <Circles classN="-bottom-30 -right-25" />
                </div>
              </div>

              {/* Box 2: Anonymous login - Circles in bottom-left */}
              <div className="relative overflow-hidden rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-purple-200 group">
                <div className="absolute inset-0  rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#fefeff] to-[#e6dcfa] opacity-70 rounded-full group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center h-24 sm:h-32 md:h-48 lg:h-64 rounded-full z-20">
                  <h3 className=" text-xs sm:text-lg md:text-3xl lg:text-4xl  text-center group-hover:scale-105 transition-transform duration-300">
                    Anonymous login{" "}
                    <br className="hidden sm:block" />
                    through web3 wallet
                  </h3>
                </div>
                <div className="absolute z-10 left-0 bottom-0 transform scale-100 sm:scale-125 md:scale-150 lg:scale-175">
                  <Circles classN="-bottom-30 -left-25" />
                </div>
              </div>

              {/* Box 3: Immutable certifications - Circles in top-right */}
              <div className="relative overflow-hidden rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-purple-200 group">
                <div className="absolute inset-0  rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#fefeff] to-[#e6dcfa] opacity-70 rounded-full group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center h-24 sm:h-32 md:h-48 lg:h-64 rounded-full z-20">
                  <h3 className=" text-xs sm:text-lg md:text-3xl lg:text-4xl  text-center group-hover:scale-105 transition-transform duration-300">
                    Immutable
                    <br className="hidden sm:block" />
                    certifications
                  </h3>
                </div>
                <div className="absolute z-10 right-0 top-0 transform scale-100 sm:scale-125 md:scale-150 lg:scale-175">
                  <Circles classN="-top-30 -right-25" />
                </div>
              </div>

              {/* Box 4: Reward based learning - Circles in top-left */}
              <div className="relative overflow-hidden rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-purple-200 group">
                <div className="absolute inset-0  rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#fefeff] to-[#e6dcfa] opacity-70 rounded-full group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="relative p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center h-24 sm:h-32 md:h-48 lg:h-64 rounded-full z-20">
                  <h3 className=" text-xs sm:text-lg md:text-3xl lg:text-4xl  text-center group-hover:scale-105 transition-transform duration-300">
                    Reward based
                    <br className="hidden sm:block" />
                    learning
                  </h3>
                </div>
                <div className="absolute z-10 left-0 top-0 transform scale-100 sm:scale-125 md:scale-150 lg:scale-175">
                  <Circles classN="-top-30 -left-25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
