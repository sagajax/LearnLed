import { useState } from "react";
import i2 from "/i2.svg";
import i3 from "/i3.svg";
import i4 from "/i4.svg";
import i5 from "/i5.svg";
import i6 from "/i6.svg";
import cc0 from "../assets/cc0.png";
import cc2 from "../assets/cc2.png";
import cc3 from "../assets/cc3.png";
import cc4 from "../assets/cc4.png";
import cc5 from "../assets/cc5.png";
import cc6 from "../assets/cc6.png";
import cc7 from "../assets/cc7.png";

export default function Roadmap() {
  const [roadmapItems, setRoadmapItems] = useState([
    {
      id: 1,
      title: "Testnet Launch",
      icon: i2,
      status: "completed",
    },
    {
      id: 2,
      title: "Mainnet Launch",
      icon: i3,
      status: "pending",
    },
    {
      id: 3,
      title: "Integration Pilot with Ecosystem Partners",
      icon: i4,
      status: "pending",
    },
    {
      id: 4,
      title: "ERC20 Token Generation Event (TGE)",
      icon: i5,
      status: "pending",
    },
    {
      id: 5,
      title: "Token Listing on Major Exchanges",
      icon: i6,
      status: "pending",
    },
  ]);

  const scatteredImages = [
    { src: cc0, className: "top-25 right-54" },
    { src: cc2, className: "top-54 right-40" },
    { src: cc3, className: "top-82 right-100" },
    { src: cc4, className: "top-116 right-42" },
    { src: cc5, className: "top-146 right-84" },
    { src: cc6, className: "top-176 right-28" },
  ];

  const toggleStatus = (id) => {
    setRoadmapItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "completed" ? "pending" : "completed",
            }
          : item
      )
    );
  };

  const RoadmapItem = ({
    id,
    title,
    icon,
    status,
    isLast,
    imageClassName,
    titleClassName,
  }) => {
    return (
      <div className="flex group">
        <div className="flex flex-col justify-start items-center">
          <button
            onClick={() => toggleStatus(id)}
            className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-[#903dfd] hover:bg-purple-300"
          >
            <img
              src={icon}
              alt=""
              className={`w-13 h-13 object-contain group-hover:scale-110 transition-all duration-300 ${
                imageClassName ? imageClassName : ""
              }`}
            />
          </button>
          {!isLast && (
            <hr className="w-1 h-20 border-dashed border-l-4 border-gray-400 dark:border-gray-600" />
          )}
        </div>
        <div className="ml-6 pb-20">
          <h2
            className={`text-2xl lg:text-3xl mt-6 text-[#9747FF] font-bold transition-all duration-300 ${
              titleClassName ? titleClassName : ""
            }`}
          >
            {title}
          </h2>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-auto flex flex-col items-center relative mt-10">
      <div
        className="h-[85%] w-[400px] lg:w-[600px] bg-[#b596f8] absolute top-30 -right-30 z-[-1] opacity-40 blur-[100px] rounded-full"
      ></div>
      <div className="relative min-h-screen w-full lg:w-[70%] overflow-x-hidden">
        <div className="mx-auto p-8">
          <div className="flex items-center justify-center text-center pb-14 text-black gap-2 w-full">
            <h1 className="text-5xl font-light">Roadmap for</h1>
            <h1 className="text-[#9747FF] text-5xl font-semibold">
              Token Exchanging
            </h1>
          </div>
          <div>
            <RoadmapItem
              key={roadmapItems[0].id}
              id={roadmapItems[0].id}
              title={roadmapItems[0].title}
              icon={roadmapItems[0].icon}
              status={roadmapItems[0].status}
              isLast={false}
              imageClassName="ml-2"
              titleClassName="" 
            />
            <RoadmapItem
              key={roadmapItems[1].id}
              id={roadmapItems[1].id}
              title={roadmapItems[1].title}
              icon={roadmapItems[1].icon}
              status={roadmapItems[1].status}
              isLast={false}
              titleClassName="text-black" 
            />
            <RoadmapItem
              key={roadmapItems[2].id}
              id={roadmapItems[2].id}
              title={roadmapItems[2].title}
              icon={roadmapItems[2].icon}
              status={roadmapItems[2].status}
              isLast={false}
            />
            <RoadmapItem
              key={roadmapItems[3].id}
              id={roadmapItems[3].id}
              title={roadmapItems[3].title}
              icon={roadmapItems[3].icon}
              status={roadmapItems[3].status}
              isLast={false}
            />
            <RoadmapItem
              key={roadmapItems[4].id}
              id={roadmapItems[4].id}
              title={roadmapItems[4].title}
              icon={roadmapItems[4].icon}
              status={roadmapItems[4].status}
              isLast={true}
              titleClassName="text-black" 
            />
          </div>
        </div>

        {/* Scattered Images */}
        {scatteredImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Scattered image ${index + 1}`}
            className={`absolute w-14 h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 ${image.className}`}
          />
        ))}
      </div>
    </div>
  );
}
