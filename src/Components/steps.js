import React from 'react';
import millets from '../asstes/Frame 143.png'; // Replace with your actual image path

const StarRecipe = () => {
  return (
    <div className="bg-[#0a1a2a] py-10 px-4 md:px-16">
      {/* Main Container */}
      <div className="mx-auto max-w-[1300px]">
        {/* Title Section */}
        <h2 className="text-center text-white text-2xl md:text-4xl md:px-[100px] font-semibold mb-4 w-full md:w-[1112px] px-4 md:px-0 md:ml-[80px]">
          Try Our Star Recipe (max 3 steps). Some items don't have this area in that case, we can delete this area.
        </h2>

        {/* Horizontal Line */}
        <div className="mx-auto border-t border-dashed border-[#ECBC56] w-32 md:w-[640px] mb-4"></div>

        {/* Subtitle */}
        <p className="text-center text-white text-sm max-w-[692px] mx-auto mb-10">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>

        {/* Recipe Steps and Description */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-[1300px] h-auto">
          {/* Recipe Steps */}
          <div className="flex flex-col md:flex-row gap-6 md:w-2/3">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center w-full md:w-[288px] h-auto">
              <img src={millets} alt="Step 1" className="rounded-lg w-full h-[200px] md:h-[200px]" />
              <div className="absolute top-[10px] left-[10px] bg-yellow-500 text-white font-semibold rounded-[12px] px-[10px] py-[8px]">
                Step 1
              </div>
              <p className="text-white mt-2 text-left">
                Wash the 100g Millet in a bowl with 200ml hot water
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center w-full md:w-[288px] h-auto">
              <img src={millets} alt="Step 2" className="rounded-lg w-full h-[200px] md:h-[200px]" />
              <div className="absolute top-[10px] left-[10px] bg-yellow-500 text-white font-semibold rounded-[12px] px-[10px] py-[8px]">
                Step 2
              </div>
              <p className="text-white mt-2 text-left">
                Add the soaked Millet to a pot with 400ml of water
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center w-full md:w-[288px] h-auto">
              <img src={millets} alt="Step 3" className="rounded-lg w-full h-[200px] md:h-[200px]" />
              <div className="absolute top-[10px] left-[10px] bg-yellow-500 text-white font-semibold rounded-[12px] px-[10px] py-[8px]">
                Step 3
              </div>
              <p className="text-white mt-2 text-left">
                Bring the water to a boil, then reduce to a simmer
              </p>
            </div>
          </div>

          {/* Right-side Description */}
          <div className="md:w-1/3 flex flex-col justify-center mt-6 md:mt-0 ml-0 md:ml-[30px]">
            <p className="text-white text-center md:text-left text-[16px] mt-[30px] font-[500] w-full md:w-[310px] h-auto">
              Fluff the Millet in the bowl with a fork and serve hot. This recipe highlights the simplicity and versatility of millets, making them a staple ingredient in various dishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarRecipe;