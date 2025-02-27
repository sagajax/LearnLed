import React from "react";
import climb from "/e1.svg";
import video from "/video.svg";
import pi from "/pi.svg";
import MobEnroll from "./MobEnroll";
import enroll from "/enroll.svg";

export default function Enroll() {
  return (
    <>
      <div className="h-auto w-full bg-white py-12 relative overflow-hidden">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-2 text-center justify-center items-center">
              <h1 className="text-xl lg:text-5xl font-inter font-light text-black text-center">
                USER
              </h1>
              <h1 className="text-xl lg:text-5xl font-inter font-semibold text-[#9747FF] text-center">
                ENROLLMENT
              </h1>
            </div>
          </div>
          <div
            className="w-full select-none pointer-events-none"
            onContextMenu={(e) => e.preventDefault()}
          >
            <img
              src={enroll}
              alt="Enrollment Illustration"
              className="w-full"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </>
  );
}
