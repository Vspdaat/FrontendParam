import React from "react";
import dhal from "../../asstes/dhal.png"; // Replace with your actual image path

const MilletGrid = () => {
  const items = new Array(8).fill("Kodo Millet");

  return (
    <div className="bg-[#041423] flex justify-center p-5">
      {/* Enable horizontal scroll on smaller screens */}
      <div className="flex flex-row gap-[20px] mt-2 overflow-x-auto sm:overflow-x-visible scrollbar-hide">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-[129px] flex-shrink-0 text-center border-[0.5px] border-[#ECBC56] p-4 rounded-xl"
          >
            <img
              src={dhal}
              alt="Bowl of Kodo Millet"
              className="w-[101px] h-[86px] mb-2 rounded-full"
            />
            <p className="text-white text-lg w-[102px] h-[19px]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilletGrid;