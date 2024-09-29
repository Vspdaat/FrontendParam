import React from 'react';
import millet from '../asstes/Millet.png'; // Replace with your image path

const WhyOurProduct = () => {
  return (
    <div className="bg-[#041423] text-white py-16 md:px-[80px] px-[20px]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className=" text-[28px] md:text-[40px] font-semibold mb-4">Why Our Products</h1>
        <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[500px] mb-[20px]'></div>
        <p className="text-gray-400 text-[12px] md:mb-[18px] md:text-[16px] font-normal">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>
      </div>

      {/* Content Section */}
      <div className="mx-auto flex flex-col lg:grid-cols-2 gap-12">
        
        {/* Card 2 */}
       

        {/* Card 3 */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src={millet}
            alt="Millet"
            className="w-full md:w-[50%] h-[300px] md:h-[485px] rounded-[20px] object-cover"
          />
          <div className="w-full lg:w-1/2">
            <h2 className=" text-[22px] md:text-[40px] font-semibold text-yellow-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </h2>
            <p className="text-gray-300 text-[16px] font-normal">
              Instead, it lets your hair absorb them, helping it become shiny and smoother. Also on top, you will notice your conditioner and night care routine starting to pay off. As all your hair products stay in your hair instead of your cotton pillow, it helps your hair to stay hydrated even more leading to comb-free mornings.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <img
            src={millet}
            alt="Millet"
            className="w-full md:w-[50%] h-[300px] md:h-[485px] rounded-[20px] object-cover  block md:hidden"
          />
          <div className="w-full lg:w-1/2">
            <h2 className=" text-[22px] md:text-[40px]  font-semibold text-yellow-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </h2>
            <p className="text-gray-300 text-[16px] font-normal">
              Instead, it lets your hair absorb them, helping it become shiny and smoother. Also on top, you will notice your conditioner and night care routine starting to pay off. As all your hair products stay in your hair instead of your cotton pillow, it helps your hair to stay hydrated even more leading to comb-free mornings.
            </p>
          </div>
          <img
            src={millet}
            alt="Millet"
            className="w-full md:w-[50%] h-[300px] md:h-[485px] rounded-[20px] object-cover block hidden md:block"
          />
        </div>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <img
            src={millet}
            alt="Millet"
            className="w-full md:w-[50%] h-[300px] md:h-[485px] rounded-[20px] object-cover"
          />
          <div className="w-full lg:w-1/2">
            <h2 className=" text-[22px] md:text-[40px] font-semibold text-yellow-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </h2>
            <p className="text-gray-300 text-[16px] font-normal">
              Instead, it lets your hair absorb them, helping it become shiny and smoother. Also on top, you will notice your conditioner and night care routine starting to pay off. As all your hair products stay in your hair instead of your cotton pillow, it helps your hair to stay hydrated even more leading to comb-free mornings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyOurProduct;