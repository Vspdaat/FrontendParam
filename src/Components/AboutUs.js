import React from 'react';
import innerLogo from '../asstes/innerLogo.png';
import OuterImage from '../asstes/outerImage.png';
import apos from '../asstes/apos.png';
import param from '../asstes/paramnam.png';

const AboutUs = () => {
  return (
    <div className="bg-radial-white-black  flex flex-col items-center px-[20px] md:px-[80px]">
      {/* Review Section */}
      <div className="w-full  text-center py-6 md:py-10 lg:py-14">
        
        <h1 className="text-white text-[23px] md:text-[28px] md:text-[40px] font-semibold mb-[20px]">
          Tell Us What You Feel!
        </h1>
        <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[500px] mb-[20px]'></div>
        <p className="text-white md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[50px]">
          Share your experience and let us know how our spices have elevated your cooking.
        </p>
        <div className="bg-[#00071A] border border-[#ECBC56] rounded-[20px] md:h-[322px] h-[260px]   md:px-[150px] px-[33px] md:py-[50px] py-[29px] ">
          <div className="flex flex-col items-start md:mb-4 mb-12 ">
            <img   src={apos} className='w-[38px] h-[25px] md:w-[60px] md:h-[39px]'></img>
            <textarea
              className="bg-transparent text-[18px] md:text-[40px]  font-normal placeholder-gray-700 md:w-[700px]   outline-none resize-none md:pl-[100px] pt-[27px] w-full  md:pt-[0px]"
              placeholder="Type your review here and share your thoughts with us..."
            />
          </div>
          <div className="text-right">
            <button className="bg-white text-[16px] text-black font-normal py-2 px-6 rounded-[5px] hover:bg-gray-200 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full  py-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className=" flex text-white text-[40px] md:text-[40px]  font-normal mb-4">About</h2>    
            <img className='md:h-[40px] h-[25px] w-[538px] mb-[30px] ' src={param}></img>
            <p className="text-justify  w-[100%] text-white text-[14px] md:text-[16px] font-normal mb-[30px] md:w-[586px] w-full">
              At Paarampariyaa, we are dedicated to preserving the rich heritage of Indian cuisine. Our passion lies in
              crafting authentic spices that bring the traditional flavors of India to your kitchen, ensuring every dish
              is a true celebration of culture and taste.
            </p>
            <p className="text-justify  w-[100%] text-white text-[14px] md:text-[16px] md:w-[586px] w-full  mb-[30px]">
              Join us on a flavorful journey and explore our spices to bring the taste of tradition to your table today!
            </p>
            <div className="flex  flex-row gap-4 md:gap-[20px]">
              <button className="bg-white w-[195px] h-[39px]  md:w-[196px] text-black font-normal py-[8px] md:px-[20px] rounded-md text-[12px] md:text-[16px] ">
                Explore our Spices
              </button>
              <button className="bg-[#041423] w-[195px] md:w-[140px]  h-[39px] text-white font-normal py-[8px] px-[20px] rounded-md text-[12px] md:text-[16px] border-2 border-white">
                Contact Us
              </button>
            </div>
          </div>

          
          <div className="relative flex-1 flex justify-center items-center">
            <img
              className="rounded-lg md:w-[630px] md:h-[420px]"
              src={OuterImage}
              alt="Various spices arranged in a circular pattern with a logo in the center"
            />
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 md:w-1/6 "
              src={innerLogo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
