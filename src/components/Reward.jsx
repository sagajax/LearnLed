import React from "react";

export default function Reward() {
  // Add Orbitron font import and animate progress
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Animate progress bar
    const timer = setTimeout(() => {
      setValue(45);
    }, 300);

    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-white mt-30 mb-20">
      <div className="flex items-center justify-center space-x-2 text-4xl md:text-5xl font-bold">
        <h1 className="text-[#9747FF]">Reward</h1>
        <h1 className="font-light">System Mechanism</h1>
      </div>

      <div className="py-24">
        <div className="relative w-full max-w-5xl mx-auto pt-8">
          {/* Percentage labels */}
          <div className="absolute -top-6 left-0 w-full flex justify-between text-black font-bold">
            <span>+5%</span>
            <span>+5%</span>
            <span>+11%</span>
            <span>+16%</span>
            <span>+20%</span>
          </div>

          {/* Progress bar with endpoints */}
          <div className="h-4 w-full bg-[#e0d4f6] rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer group relative flex items-center">
            {/* Left endpoint */}
            <div className="absolute left-0 w-8 h-4 overflow-hidden flex items-center">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            </div>

            <div
              className="h-full bg-[#9747FF] rounded-full transition-all duration-300 ease-out group-hover:bg-[#8033ff]"
              style={{ width: `${value}%`, marginLeft: "4px" }}
            ></div>

            {/* Right endpoint */}
            <div className="absolute right-0 w-8 h-4 overflow-hidden flex items-center justify-end">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Milestone markers */}
          <div className="absolute top-4 w-full flex">
            {/* 30% milestone */}
            <div className="absolute left-[30%] -translate-x-1/2">
              <div className="bg-green-500 text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md">
                30%
              </div>
            </div>

            {/* 50% milestone */}
            <div className="absolute left-[50%] -translate-x-1/2">
              <div className="bg-green-500 text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md">
                50%
              </div>
            </div>

            {/* 70% milestone */}
            <div className="absolute left-[70%] -translate-x-1/2">
              <div className="bg-green-500 text-white rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md">
                70%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The +5% section */}
      <div className="mt-8 space-x-2 text-center">
        <span
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className="text-6xl text-[#9747FF] font-bold"
        >
          +5%
        </span>
        <span
          style={{ fontFamily: "Orbitron, sans-serif" }}
          className="text-4xl text-black font-bold"
        >
          When paid in EDU
        </span>
      </div>
    </div>
  );
}
