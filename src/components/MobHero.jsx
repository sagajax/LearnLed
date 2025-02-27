import React from "react";
import Navbar from "./Navbar";
import h1 from "/h1.svg";
import h2 from "/h2.svg";

const MobHero = () => {
  return (
    <div className="bg-white mt-20">
      <Navbar />

      <div className="p-4 flex flex-row items-center min-h-[225px] overflow-hidden">
        {/* Left Side - Text Content */}
        <div className="w-1/2 pr-2 z-10">
          {/* Purple Headline with specific line break */}
          <div className="text-2xl font-bold mb-3">
            <h1>
              <span className="text-[#7BD28E]">EARN </span>
              WHILE YOU <br></br> <span className="text-[#9747FF]">LEARN!</span>
            </h1>
          </div>

          {/* Gray Subtext - now with first line as nowrap */}
          <div className="text-gray-500 mb-4 text-sm">
            <div className="whitespace-nowrap">Get Up to 25% cashback in</div>
            <div>EDU tokens</div>
          </div>

          {/* Green Button */}
        </div>

        {/* Right Side - Hero Image */}
        <div className="w-1/2">
          <img
            src={h2}
            alt="Learning illustration"
            className="w-full object-contain max-w-full"
          />
        </div>
      </div>
      <div className="w-full">
        <img
          src={h1}
          alt="Learning illustration"
          className="w-full object-contain max-w-full"
        />
      </div>
      <div className="w-full flex justify-center p-4">
        <button className="bg-[#7BD28E] text-white px-6 py-2 rounded-md text-sm">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default MobHero;
