import React from "react";
import climb from "/e1.svg";
import video from "/video.svg";
import pi from "/pi.svg";
import MobEnroll from "/MobEnroll.svg";
import enroll from "/enroll.svg";

export default function Enroll() {
  return (
    <>
      <div className="hidden md:block h-auto w-full bg-white py-12 relative overflow-hidden">
        <div className="w-full">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="flex space-x-2 text-center justify-center items-center">
              <h1 className="text-5xl lg:text-5xl font-inter font-light text-black text-center">
                User
              </h1>
              <h1 className="text-5xl lg:text-5xl font-inter font-semibold text-[#9747FF] text-center">
                Enrollment
              </h1>
            </div>
          </div>

          {/* Background with Cards */}
          <div
            className="w-full relative bg-contain bg-no-repeat bg-center mx-auto"
            style={{
              backgroundImage: `url(${enroll})`,
              minHeight: "800px",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Card 1 - User Enrolls */}
            <div
              className="absolute bg-[#f1eeff] rounded-xl p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#e9e1ff] hover:shadow-lg
                  lg:left-[15%] lg:top-[1%] lg:w-[350px]
                  md:left-[10%] md:top-[10%] md:w-[300px]"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="bg-[#9747FF] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold transition-transform duration-300 group-hover:rotate-12">
                  1
                </div>
                <div>
                  <p className="font-medium">
                    User{" "}
                    <span className="text-[#9747FF] font-medium">Enrolls</span>{" "}
                    to Course
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Pays for Course */}
            <div
              className="absolute bg-[#f1eeff] rounded-xl p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#e9e1ff] hover:shadow-lg
                  lg:left-[35%] lg:top-[23%] lg:w-[300px]
                  md:left-[30%] md:top-[25%] md:w-[280px]"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="bg-[#9747FF] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold transition-transform duration-300 group-hover:rotate-12">
                  2
                </div>
                <div>
                  <p className="font-medium">
                    Pays for the{" "}
                    <span className="text-[#9747FF] font-medium">Course</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    +5% more if paid in EDU
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Milestone Based Reward */}
            <div
              className="absolute bg-[#f1eeff] rounded-xl p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#e9e1ff] hover:shadow-lg 
                  lg:left-[20%] lg:top-[45%] lg:w-[350px]
                  md:left-[5%] md:top-[45%] md:w-[280px]"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="bg-[#9747FF] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold transition-transform duration-300 group-hover:rotate-12">
                  3
                </div>
                <div>
                  <p className="text-[#9747FF] font-medium">
                    Milestone Based Reward
                  </p>
                  <p className="text-sm text-gray-600">
                    Gets +5% EDU for 30% Course Completion
                  </p>
                  <div className="flex mt-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-xs text-[#9747FF]">
                          🏆
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Get Certification */}
            <div
              className="absolute bg-[#f1eeff] rounded-xl p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#e9e1ff] hover:shadow-lg
                  lg:left-[31%] lg:top-[79%] lg:w-[300px]
                  md:left-[25%] md:top-[70%] md:w-[280px]"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="bg-[#9747FF] rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold transition-transform duration-300 group-hover:rotate-12">
                  4
                </div>
                <div>
                  <p className="font-medium">
                    Get{" "}
                    <span className="text-[#9747FF] font-medium">
                      Certification
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">Mints SBT to Learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:hidden">
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex space-x-2 text-center justify-center items-center">
            <h1 className="text-3xl  font-inter font-light text-black text-center">
              User
            </h1>
            <h1 className="text-3xl  font-inter font-semibold text-[#9747FF] text-center">
              Enrollment
            </h1>
          </div>
        </div>
        <img
          src={MobEnroll}
          alt="Enroll"
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}