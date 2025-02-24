import React from "react";

const Circles = ({ classN }) => {
  return (
    <div className={`absolute w-48 h-48  ${classN}`}>
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Center white circle */}
        <div className="absolute bg-purple-500 rounded-full w-32 h-32 z-20"></div>
        <div className="absolute  bg-purple-400 rounded-full w-40 h-40 z-10"></div>
        <div className="absolute  bg-purple-300 rounded-full z-0 w-full h-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default Circles;
