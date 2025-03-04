import React, { useState } from "react";
import MobRoadmap from "./MobRoadmap";
import road from "/road.svg";
import mobroad from "/mobroad.svg";

export default function Roadmap() {
  return (
    <>
      <div className="hidden md:block w-full mb-16">
        <img src={road} alt="road" className="w-full" draggable="false" />
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden mb-16">
        <img src={mobroad} alt="road" className="w-full" draggable="false" />
      </div>
    </>
  );
}