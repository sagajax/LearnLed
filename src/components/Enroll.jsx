import React from 'react';
import climb from "/e1.svg";
import video from "/video.svg";
import pi from "/pi.svg";
import MobEnroll from './MobEnroll';

export default function Enroll() {
  return (
    <>
    <div className="min-h-screen hidden md:block bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Video image near top/header */}
      <div className="absolute right-80 top-24">
        <img src={video} alt="Video" className="w-[170px] h-[190px]" />
      </div>
      
      {/* Pi symbol on left side */}
      <div className="absolute left-4 bottom-48">
        <img src={pi} alt="Pi Symbol" className="w-[138px] h-[132px]" />
      </div>
      
      {/* Climbing person near footer/bottom */}
      <div className="absolute right-0 bottom-0">
        <img src={climb} alt="Climbing" className="w-[670px] h-[589px]" />
      </div>
      
      <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center mb-5">
      <div className="flex space-x-2 text-center justify-center items-center">
        <h1 className="text-5xl font-inter font-light text-black mb-12 text-center ">
          USER
        </h1>
        <h1 className="text-5xl font-inter font-semibold text-[#9747FF] mb-12 text-center">
          ENROLLMENT
        </h1>
      </div>
      <div className="w-48 h-1 bg-[#9747FF] -mt-10 rounded-full"></div>
    </div>
        
        <div className="relative flex flex-col gap-6">
          {/* Step 1 */}
          <div className="relative mb-8">
            <div className="w-full flex">
              <div className="flex items-center justify-start ">
                <div className="flex flex-col rounded-2xl bg-[#f1eeff] justify-center px-5 py-3 w-[300px] shadow-sm hover:bg-[#e3defa] transition-all duration-500">
                  <div className="flex justify-center items-center text-center w-8 h-8 bg-[#9747FF] text-white font-inter rounded-full mb-1">
                    1
                  </div>
                  <h3 className="text-lg font-inter font-semibold text-black">
                    User Enrolls to Course
                  </h3>
                </div>
              </div>
            </div>
            <div className='w-36 h-36 z-10  absolute left-20 -top-7'>

            <img src="/v1.svg" alt="Arrow" className="w-32 h-32 absolute left-[20%] top-[80%]" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-8 ">
            <div className="w-full flex z-50 ">
              <div className="flex items-center justify-end pr-80 ml-auto">
                <div className="flex flex-col rounded-2xl bg-[#f1eeff] justify-center px-5 py-3 w-[300px] shadow-sm hover:bg-[#e3defa] transition-all duration-500">
                  <div className="flex justify-center items-center text-center w-8 h-8 bg-[#9747FF] text-white font-inter rounded-full mb-1">
                    2
                  </div>
                  <h3 className="text-lg font-inter font-semibold text-black">
                    Pays for the Course
                  </h3>
                  <p className="mt-1 text-sm font-inter text-[#7A7A7A]">
                    +5% more if paid in EDU
                  </p>
                </div>
              </div>
            </div>
            <div className='w-36 h-36 z-10  absolute right-110 top-27'>
            <img src="/v2.svg" alt="Arrow" className="w-full h-full" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-8">
            <div className="w-full flex">
              <div className="flex items-center justify-start">
                <div className="flex flex-col rounded-2xl bg-[#f1eeff] justify-center px-5 py-3 w-[300px] shadow-sm hover:bg-[#e3defa] transition-all duration-500">
                  <div className="flex justify-center items-center text-center w-8 h-8 bg-[#9747FF] text-white font-inter rounded-full mb-1">
                    3
                  </div>
                  <h3 className="text-lg font-inter font-semibold text-black">
                    Milestone #1
                  </h3>
                  <p className="mt-1 text-sm font-inter text-[#7A7A7A]">
                    Gets +5% EDU for 30% Course Completion
                  </p>
                </div>
              </div>
            </div>
            <div className='w-36 h-36 z-10  absolute left-25 top-4'>

            <img src="/v3.svg" alt="Arrow" className="w-32 h-32 absolute left-[20%] top-[80%]" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative mb-8">
            <div className="w-full flex">
              <div className="flex items-center justify-end pr-80 ml-auto">
                <div className="flex flex-col rounded-2xl bg-[#f1eeff] justify-center px-5 py-3 w-[300px] shadow-sm hover:bg-[#e3defa] transition-all duration-500">
                  <div className="flex justify-center items-center text-center w-8 h-8 bg-[#9747FF] text-white font-inter rounded-full mb-1">
                    4
                  </div>
                  <h3 className="text-lg font-inter font-semibold text-black">
                    Milestone #4
                  </h3>
                  <p className="mt-1 text-sm font-inter text-[#7A7A7A]">
                    Gets +25% EDU
                  </p>
                </div>
              </div>
            </div>
            <div className='w-36 h-36 z-10  absolute right-110 top-0'>

            <img src="/v4.svg" alt="Arrow" className="w-32 h-32 absolute right-[20%] top-[80%]" />
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative">
            <div className="w-full flex">
              <div className="flex items-center justify-start">
                <div className="flex flex-col rounded-2xl bg-[#f1eeff] justify-center px-5 py-3 w-[300px] shadow-sm hover:bg-[#e3defa] transition-all duration-500">
                  <div className="flex justify-center items-center text-center w-8 h-8 bg-[#9747FF] text-white font-inter rounded-full mb-1">
                    5
                  </div>
                  <h3 className="text-lg font-inter font-semibold text-black">
                    Get Certification
                  </h3>
                  <p className="mt-1 text-sm font-inter text-[#7A7A7A]">
                    Mints SBT to Learners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='md:hidden'>
      <MobEnroll />
    </div>
    </>
  );
}