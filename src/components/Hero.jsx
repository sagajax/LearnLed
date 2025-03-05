import { useState } from "react";
import h1 from "/h1.svg";
import h2 from "/h2.svg";
import Navbar from "./Navbar";
import MobHero from "./MobHero";

export default function Hero() {
  return (
    <>
      <div className="h-auto flex-col bg-white w-full hidden md:block mt-20  ">
        <Navbar />
        <div className="container mx-auto px-12 py-8 md:py-6 mt-10">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex justify-between items-center mb-12">
              {/* Left Side: Text and Button */}
              <div className="flex-1">
                <div className="text-6xl font-bold text-black mb-4">
                  <div className="whitespace-nowrap">
                    <span className="text-[#7BD28E]">EARN </span>
                    WHILE YOU
                  </div>
                  <div>
                    <span className="text-[#9747FF]">LEARN!</span>
                  </div>
                </div>
                <p className="text-xl text-gray-600">
                  Get Up to 25% cashback in EDU tokens
                </p>
                <button className="bg-[#7BD28E] text-white px-6 py-3 rounded-2xl text-lg font-semibold mt-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  Start Learning
                </button>
                {/* h2 Image Below the Button */}
                <div className="mt-8">
                  <img
                    src={h2}
                    alt="Balance scale with Bitcoin and Dollar symbols"
                    className="w-[404px] h-[368px] object-contain"
                  />
                </div>
              </div>
              {/* Right Side: h1 Image */}
              <div className="flex-1 flex justify-end">
                <img
                  src={h1}
                  alt="Person using mobile phone for learning"
                  className="w-[844px] h-[668px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <MobHero />
      </div>
    </>
  );
}