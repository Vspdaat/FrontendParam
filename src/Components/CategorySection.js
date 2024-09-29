// import React from 'react';
// import grains from '../asstes/grains.png'; // Ensure the path is correct

// const CategorySection = ({ categoryName ,description}) => {
//   return (
//     <div className="bg-radial-white-black w-full h-auto py-4">
//       {/* Container for Category Name and Description */}
//       <div className="relative w-full  md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8">
//         <h2 className="text-yellow-400 font-bold md:text-[40px] text-[20px] mb-4 md:mb-0 text-center md:text-left">
//         {categoryName}
//         </h2>
//         <p className=" text-[16px] w-full md:w-[50%] text-center md:text-left  md:px-0">
//        {  description}
//         </p>
//       </div>

//       {/* Image with Overlay */}
//       <div className="relative">
//         <img
//           src={grains} // Ensure you have the correct path to the image
//           alt="Millets"
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//         />
//         {/* Play Button Overlay */}
//         {/* <div className="absolute inset-0 flex items-center justify-center">
//           <button className="bg-white bg-opacity-10 text-gray-800 rounded-full p-4 shadow-lg hover:bg-opacity-75 transition duration-300 ease-in-out">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               stroke="none"
//             >
//               <path d="M8 5v14l11-7z" /> 
//             </svg>
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;
import React from 'react';
import { useLocation } from 'react-router-dom';
import grains from '../asstes/grains.png'; // Ensure the path is correct

const CategorySection = () => {
  const location = useLocation();
  const { categoryName, description } = location.state || {};

  return (
    <div className="bg-radial-white-black w-full h-auto py-4">
      {/* Container for Category Name and Description */}
      <div className=" relative w-full  md:pl-[40px] flex flex-col md:flex-row justify-between items-center text-white rounded-lg mb-8">
        <h2 className="text-[#ECBE56] font-bold text-[23px] md:text-[40px] mb-4 md:mb-0 text-center md:text-left">
        {categoryName || "Millets"}
        </h2>
        <p className=" px-[5px] text-[12px] md:text-[16px]  w-full md:w-[40%] text-center md:text-left  md:px-0">
        {description || "Essential millets that capture the flavors of Indian cuisine"}
        </p>
      </div>

      {/* Image with Overlay */}
      <div className="relative">
        <img
          src={grains} // Ensure you have the correct path to the image
          alt="Millets"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white bg-opacity-10 text-gray-800 rounded-full p-4 shadow-lg hover:bg-opacity-75 transition duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M8 5v14l11-7z" /> {/* Play Button Icon */}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;