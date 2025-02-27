import React from "react";

const Circles = ({ classN }) => {
  return (
    <div className={`absolute w-64 h-64  ${classN}`}>
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Center white circle */}
        <div className="absolute bg-[#b39ae6] rounded-full w-32 h-32 z-20"></div>
        <div className="absolute  bg-[#d7cbf3] rounded-full w-48 h-48 z-10"></div>
        <div className="absolute  bg-[#f0edf9] rounded-full z-0 w-full h-full "></div>
      </div>
    </div>
  );
};

export default Circles;
