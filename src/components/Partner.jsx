import React from 'react';
import Marquee from 'react-fast-marquee';
// Keep your original imports
import o1 from '/o1.png';
import o2 from '/o2.svg';
import o3 from '/o3.svg';
import o4 from '/o4.svg';
import o5 from '/o5.png';
import o6 from '/o6.png';
import o7 from '/o7.svg';

export default function Partner() {
  // Array of your imported images
  const partnerImages = [o1, o2, o5, o4, o5, o6, o7];
  const partnerImagesMobile = [o1, o2, o5, o6, o7];
  return (
    <div className="bg-white mt-10 px-4 md:px-0">
      {/* Title section - kept as in your original */}
      <div className="flex items-center justify-center space-x-2 ">
        <h1 className="text-3xl md:text-5xl font-light">Our</h1>
        <h1 className="text-[#9747FF] text-3xl md:text-5xl font-semibold">Partners</h1>
      </div>
      
      {/* Desktop: Marquee / Mobile: Grid layout */}
      <div className="py-6 md:py-10">
        {/* Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:block">
          <Marquee speed={40} gradientWidth={0} className="space-x-20">
            {partnerImages.map((img, index) => (
              <img key={index} src={img} alt="" className="mx-4" />
            ))}
          </Marquee>
        </div>
        
        {/* Visible on mobile, hidden on medium screens and up */}
        <div className="grid grid-cols-2 gap-8 md:hidden">
          {partnerImagesMobile.map((img, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={img} alt="" className="h-14 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}