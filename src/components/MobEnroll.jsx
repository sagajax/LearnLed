import React from 'react';
import v1 from '/v1.svg';
import v2 from '/v2.svg';
import v3 from '/v3.svg';
import ele from '/ele.svg';
import i1 from '/i1.svg';
import wallet from '/wallet.svg';
import cert from '/cert.svg';

const MobEnroll = () => {
  return (

    <div className="w-full min-w-[300px] p-2 sm:p-4 relative">
        <div className="flex space-x-2 text-center justify-center items-center mb-5">
          <h1 className="text-2xl font-inter font-light text-black mb-5 text-center">
            USER
          </h1>
          <h1 className="text-2xl font-inter font-semibold text-[#9747FF] mb-5 text-center">
            ENROLLMENT
          </h1>
        </div>
      <div className="relative">
        {/* Step 1 */}
        <div className="mb-10 sm:mb-20 relative">
          {/* Arrow 1 - responsive sizing */}
          <div className="absolute" style={{ top: '60%', left: '5%', height: '25vw', minHeight: '70px', maxHeight: '120px', zIndex: 0 }}>
            <img src={v1} alt="Arrow from step 1 to 2" className="h-full" />
          </div>
          
          <div className="bg-purple-100 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-[65vw] max-w-[240px] min-w-[160px] relative z-10">
            <div className="absolute -left-2 -top-2">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-lg sm:text-xl font-semibold">
                1
              </div>
            </div>
            <div className="ml-4 sm:ml-6 text-center">
              <p className="text-xs sm:text-sm font-medium">
                User <span className="text-purple-600 font-medium">Enrolls</span> to the<br />Course
              </p>
            </div>
          </div>
          <div className="relative left-65 -top-[20px] transform -translate-y-1/2  w-[40px] ">
            <img src={i1} alt="Book icon" className="w-[40px] h-[40px] " />
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-16 sm:mb-20 relative flex justify-end">
          {/* Arrow 2 - responsive sizing */}
          <div className="absolute" style={{ top: '80%', right: '5%', height: '25vw', minHeight: '70px', maxHeight: '120px', zIndex: 0 }}>
            <img src={v2} alt="Arrow from step 2 to 3" className="h-full" />
          </div>
          
          <div className="bg-purple-100 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-[65vw] max-w-[240px] min-w-[160px] relative z-10">
            <div className="absolute -left-2 -top-2">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-lg sm:text-xl font-semibold">
                2
              </div>
            </div>
            <div className="ml-4 sm:ml-6 text-center">
              <p className="text-xs sm:text-sm font-medium">
                Pays for the <span className="text-purple-600 font-medium">Course</span><br />
                <span className="text-[10px] sm:text-xs text-gray-500">+5% more if paid in EDU</span>
              </p>
            </div>
          </div>
          <div className="absolute left-5 top-[80%] transform -translate-y-1/2">
            <img src={wallet} alt="Wallet icon" className="w-[61px] h-[61px] " />
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12 sm:mb-20 relative">
          {/* Arrow 3 - responsive sizing */}
          <div className="absolute" style={{ top: '90%', left: '0%', height: '25vw', minHeight: '70px', maxHeight: '120px', zIndex: 0 }}>
            <img src={v3} alt="Arrow from step 3 to 4" className="h-full" />
          </div>
          
          <div className="bg-purple-100 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-[65vw] max-w-[240px] min-w-[160px] relative z-10">
            <div className="absolute -left-2 -top-2">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-lg sm:text-xl font-semibold">
                3
              </div>
            </div>
            <div className="ml-4 sm:ml-6 text-center">
              <p className="text-xs sm:text-sm">
                <span className="text-purple-600 font-medium">4 Milestones</span><br />
                Get 5% EDU for 30% Course<br />
                Completion
              </p>
            </div>
          </div>
          <div className="absolute right-0 -bottom-5">
            <img src={ele} alt="Educator illustration" className="w-[116px] h-[116px]" />
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative flex justify-center ml-12 sm:ml-16">
          <div className="bg-purple-100 rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 w-[65vw] max-w-[240px] min-w-[160px] relative z-10">
            <div className="absolute -left-2 -top-2">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-lg sm:text-xl font-semibold">
                4
              </div>
            </div>
            <div className="ml-4 sm:ml-6 text-center">
              <p className="text-xs sm:text-sm font-medium">
                Get <span className="text-purple-600 font-medium">Certification</span><br />
                Mints SBT to Learners
              </p>
            </div>
          </div>
          <div className="relative left-5 top-[60px] transform -translate-y-1/2">
            <img src={cert} alt="Certificate icon" className="w-[45px] h-[45px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobEnroll;