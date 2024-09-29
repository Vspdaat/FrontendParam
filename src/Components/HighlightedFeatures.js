import React from 'react';

const HighlightedFeatures = ({ features }) => {
  return (
    <div className="bg-gradient-to-b from-[#0a1a2a] to-[#001f3f] py-10  ">
      <div className="text-center">
        <h2 className="text-[28px] font-bold text-white md:text-[40px] font-semibold">Highlighted Features</h2>
        <div className='mx-auto border-dashed border-t-[1px] border-[#ECBC56] w-[230px] md:w-[441px] mb-[20px] mt-[20px]'></div>

        <p className="text-white text-[16px] font-normal mt-2">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>
      </div>

      {/* Flex container for horizontal scrolling on mobile */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-[10px] lg:px-[80px] gap-[1rem] justify-center mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 bg-cover bg-center min-w-[280px] md:w-[350px] h-[474px]"
              style={{ backgroundImage: `url(${feature.imageUrl}) `}}
            >
              <div className="absolute inset-0"></div>

              <div className="relative z-10 p-4">
                <h3 className="text-gray-200 font-bold text-[16px] font-normal">{feature.label}</h3>
                <p className="text-lg font-semibold text-white mt-2 text-[20px] font-semibold">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightedFeatures;