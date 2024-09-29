import React from 'react';
import banner from '../asstes/banner.png'
const Banner = () => {
  return (
    <div className="w-full  md:h-[621px] overflow-hidden">
      <img
        src={banner} // Replace with your image URL
        alt="Banner"
        className="object-fill w-full  h-[231px] md:h-full"
      />
   
    </div>
  );
};

export default Banner;
