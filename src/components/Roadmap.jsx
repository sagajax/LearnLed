import React, { useState } from "react";
import MobRoadmap from "./MobRoadmap";
import road from "/road.svg";
import mobroad from "/mobroad.svg";
export default function Roadmap() {
  const [roadmapItems] = useState([
    {
      id: 1,
      date: "Mar 2025",
      title: "Testnet Launch",
      titleColor: "text-purple-500",
      status: "completed",
    },
    {
      id: 2,
      date: "Feb 2025",
      title: "Mainnet Launch",
      titleColor: "text-black",
      status: "pending",
    },
    {
      id: 3,
      date: "Q3 2025",
      title: "Integration Pilot with",
      subtitle: "Ecosystem Partners",
      titleColor: "text-black",
      subtitleColor: "text-purple-500",
      status: "pending",
    },
    {
      id: 4,
      date: "Q4 2025",
      title: "ERC20 Token Generation",
      subtitle: "Event (TGE)",
      titleColor: "text-purple-500",
      subtitleColor: "text-purple-500",
      status: "pending",
    },
    {
      id: 5,
      date: "Q5 2025",
      title: "Token Listing on",
      subtitle: "Major Exchanges",
      titleColor: "text-black",
      subtitleColor: "text-purple-500",
      status: "pending",
    },
  ]);

  return (
    <>
      <div className="hidden md:block w-full  mb-16">
        <img src={road} alt="road" className="w-full" />
      </div>

      {/* Mobile View */}
      <div className="md:hidden mb-16">
        <img src={mobroad} alt="road" className="w-full" />
      </div>
    </>
  );
}
