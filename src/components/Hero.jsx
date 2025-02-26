import { useState } from "react";
import h1 from '/h1.svg';
import h2 from '/h2.svg';
import Navbar from "./Navbar";
import MobHero from "./MobHero";

export default function Hero() {
  return (
    <>
    <div className="flex h-auto flex-col bg-white w-full hidden md:block">
      <Navbar />
      <div className="container mx-auto px-12 py-8 md:py-6 mt-10">
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex justify-between items-center mb-12">
            {/* Left Side: Text and Button */}
            <div className="flex-1">
              <h1 className="text-6xl font-bold text-black mb-4">
                Earn While You <br></br>Learn!
              </h1>
              <p className="text-xl text-gray-600">
                Get Up to 25% cashback in EDU tokens
              </p>
              <button className="bg-[#9747FF] text-white px-6 py-3 rounded-2xl text-lg font-semibold mt-6 hover:shadow-lg transition-all duration-300 cursor-pointer">
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

        {/* Mobile View */}
        <div className="md:hidden">
          <div className="text-center mb-8 px-4">
            <h1 className="text-4xl font-bold text-[#9747FF] leading-tight">
              Earn
              <br />
              While You
              <br />
              Learn!
            </h1>
            <p className="text-gray-600 mt-3">
              Get Up to 25%
              <br />
              cashback in EDU tokens
            </p>
          </div>

          <div className="flex flex-col items-center">
            {/* h1 Image */}
            <div className="mb-8">
              <div className="relative">
                <img
                  src={h1}
                  alt="Person using mobile phone for learning"
                  className="w-[288px] h-[192px] object-contain"
                />
              </div>
            </div>

            {/* Start Learning Button */}
            <button className="bg-[#9747FF] text-white px-6 py-3 rounded-2xl text-lg font-semibold mb-8 hover:shadow-lg transition-all duration-300 cursor-pointer">
              Start Learning
            </button>

            {/* h2 Image Below the Button */}
            <div className="flex justify-center">
              <img
                src={h2}
                alt="Balance scale with Bitcoin and Dollar symbols"
                className="w-[233px] h-[233px] object-contain"
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