import React from "react";
import e1 from "/e1.svg";
import block from "/block.svg";
import chain from "/chain.svg";
import hands from "/hands.svg";
import charity from "/charity.svg";
import stock from "/stock.svg";
import molecule from "/molecule.svg";
import talk from "/talk.svg";
import rocket from "/rocket.svg";

const Roadmap = () => {
  return (
    <div
      className="w-full p-2 sm:p-4 md:p-8 relative"
      style={{ minWidth: "320px" }}
    >
      {/* Molecule decoration - top left */}
      <div className="absolute left-0 top-0 w-16 md:w-32 md:h-32 z-10">
        <img
          src={molecule}
          alt="Molecule decoration"
          className="w-full h-full object-contain opacity-90"
        />
      </div>

      {/* Header */}
      <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col items-center text-center relative z-10">
        <h2 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-medium mb-1 md:mb-3">
          Roadmap for <span className="text-purple-600">Token Exchange</span>
        </h2>
        <div className="w-32 sm:w-40 md:w-60 h-1 rounded-full bg-purple-600"></div>
      </div>

      <div className="relative flex flex-col md:flex-row">
        {/* Left side - Roadmap Timeline */}
        <div className="md:w-1/2 relative z-10">
          {/* Mobile timeline view (visible on small screens) */}
          <div className="md:pb-0 pb-36 flex flex-col items-start md:pl-[15%] lg:pl-[50%]">
            {/* Item 1 */}
            <div className="flex mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 mr-2 sm:mr-4 flex flex-col items-center">
                <img
                  src={block}
                  alt="Block"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-medium">
                  Testnet Launch
                </h3>
                <p className="text-green-400 text-xs sm:text-base">Mar 2025</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 mr-2 sm:mr-4 flex flex-col items-center">
                <img
                  src={chain}
                  alt="Chain"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-medium">
                  Mainnet Launch
                </h3>
                <p className="text-green-400 text-xs sm:text-base">Q2 2025</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 mr-2 sm:mr-4 flex flex-col items-center">
                <img
                  src={hands}
                  alt="Hands"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-medium">
                  Integration Pilot with Ecosystem
                </h3>
                <h3 className="text-sm sm:text-lg font-medium">Partners</h3>
                <p className="text-green-400 text-xs sm:text-base">Q3 2025</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex mb-4 sm:mb-6">
              <div className="w-10 sm:w-12 mr-2 sm:mr-4 flex flex-col items-center">
                <img
                  src={charity}
                  alt="Charity"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
                <div className="h-8 sm:h-10 border-l-2 border-dashed border-black"></div>
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-medium">
                  ERC20 Token Generation
                </h3>
                <h3 className="text-sm sm:text-lg font-medium">Event(TGE)</h3>
                <p className="text-green-400 text-xs sm:text-base">Q4 2025</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex">
              <div className="w-10 sm:w-12 mr-2 sm:mr-4 flex flex-col items-center">
                <img
                  src={stock}
                  alt="Stock"
                  className="w-8 h-8 sm:w-12 sm:h-12"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-medium">
                  Token Listing on Major
                </h3>
                <h3 className="text-sm sm:text-lg font-medium">Changes</h3>
                <p className="text-green-400 text-xs sm:text-base">Q1 2026</p>
              </div>
            </div>

            {/* Right side - Images (hidden on small screens) */}
            <div className="md:hidden md:w-1/2 h-full w-full absolute right-0 top-0">
              {/* Top section with climber and talk images side by side */}
              <div className="flex relative h-full w-full">
                {/* Talk illustration - left side */}
                <div className="w-[200px] h-64 absolute -bottom-16 left-0">
                  <img
                    src={talk}
                    alt="Communication illustration"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Climbing man - right side */}
                <div className="w-[150px] h-64 right-0 absolute -z-10">
                  <img
                    src={e1}
                    alt="Climbing man"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[150px] h-80 absolute -bottom-16 right-0">
                  <img
                    src={rocket}
                    alt="Developer illustration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop timeline view (hidden on small screens) */}
          <div className="hidden  relative">
            {/* Timeline center line */}
            <div className="absolute left-32 top-12 h-full w-0.5 border-l-2 border-dashed border-purple-300 z-0"></div>

            {/* Item 1 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-64 flex items-center justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center z-10">
                  <img src={block} alt="Block" className="w-16 h-16" />
                </div>
              </div>
              <div className="ml-8 mt-4">
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Testnet Launch
                </h3>
                <p className="text-green-400 text-lg md:text-xl">Mar 2025</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-64 flex items-center justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center z-10">
                  <img src={chain} alt="Chain" className="w-16 h-16" />
                </div>
              </div>
              <div className="ml-8 mt-4">
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Mainnet Launch
                </h3>
                <p className="text-green-400 text-lg md:text-xl">Q2 2025</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-64 flex items-center justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center z-10">
                  <img src={hands} alt="Hands" className="w-16 h-16" />
                </div>
              </div>
              <div className="ml-8 mt-4">
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Integration Pilot with
                </h3>
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Ecosystem Partners
                </h3>
                <p className="text-green-400 text-lg md:text-xl">Q3 2025</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start mb-16 relative">
              <div className="w-64 flex items-center justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center z-10">
                  <img src={charity} alt="Charity" className="w-16 h-16" />
                </div>
              </div>
              <div className="ml-8 mt-4">
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  ERC20 Token Generation
                </h3>
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Event(TGE)
                </h3>
                <p className="text-green-400 text-lg md:text-xl">Q4 2025</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start relative">
              <div className="w-64 flex items-center justify-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center z-10">
                  <img src={stock} alt="Stock" className="w-16 h-16" />
                </div>
              </div>
              <div className="ml-8 mt-4">
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Token Listing on Major
                </h3>
                <h3 className="text-xl md:text-2xl text-purple-600 font-medium">
                  Changes
                </h3>
                <p className="text-green-400 text-lg md:text-xl">Q1 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Images */}
        <div className="hidden md:block md:w-1/2 relative">
          {/* Top section with climber and talk images side by side */}
          <div className="flex">
            {/* Talk illustration - left side */}
            <div className="w-1/2 h-64">
              <img
                src={talk}
                alt="Communication illustration"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Climbing man - right side */}
            <div className="w-1/2 h-64">
              <img
                src={e1}
                alt="Climbing man"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom section with rocket/dev illustration */}
          <div className="mt-8">
            <div className="w-full h-80">
              <img
                src={rocket}
                alt="Developer illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
