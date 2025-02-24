import React, { useState } from "react";

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
    <div className="w-full flex flex-col items-center justify-center bg-white p-8">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium">
            Roadmap for <span className="text-purple-500 font-semibold">Token Exchanging</span>
          </h1>
          <p className="text-gray-600 mt-2">Your Guide to Our Milestones.</p>
        </div>

        <div >
          {roadmapItems.map((item, index) => (
            <div key={item.id} className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 text-center py-8 px-6 rounded-full w-80">
                  <span className="font-extrabold text-gray-800 text-3xl">{item.date}</span>
                </div>
                {index < roadmapItems.length - 1 && (
                  <div className="h-16 border-l-8 border-dashed border-black my-1"></div>
                )}
              </div>

              <div className="ml-8 mt-3">
                <h3 className={`text-3xl font-extrabold ${item.titleColor}`}>
                  {item.title}
                </h3>
                {item.subtitle && (
                  <h3 className={`text-3xl font-bold ${item.subtitleColor}`}>
                    {item.subtitle}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}