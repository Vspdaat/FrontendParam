// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
// import powder from '../asstes/idli.png';

// const BestSellers = () => {
//   const navigate = useNavigate(); // Initialize navigate

//   return (
//     <div  className=" bg-radial-white-black min-h-screen flex flex-col items-center justify-center px-4">
//       <div className=" text-center items-center justify-center py-8">
//         <h1 className="text-white text-[24px] md:text-4xl font-semibold mb-3">Our Best Sellers</h1>
        
//         <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[500px] mb-[20px]'></div>

//         <p className="text-white text-sm max-w-xl mx-auto">
//           Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
//         </p>
//       </div>

//       <div  onClick={() => navigate('/product')} className= " grid grid-cols-1 md:grid-cols-2 gap-[20px]">
//         {/* Product Card */}
//         {Array.from({ length: 4 }, (_, index) => (
//           <div key={index}  className="border-2 border-transparent rounded-[20px]  bg-gradient-to-b from-[#041423a] to-blue-900 text-white relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,1)] transition-shadow duration-300 hover:border-yellow-400" 
         
//           >
//             <h2 className="text-[20px] md:text-[40px] font-semibold mb-2 text-center pt-[20px] md:pt-[30px] px-[15px]  md:px-[30px] md:pt-[30px]">Kodo Millet</h2>
//             <p className="pb-[20px] text-[16px] md:text-[32px]  md:px-[30px] text-center px-[15px] md:pb-[25px] ">Discover the rich flavor of millet from the heart of India</p>

//             <div className="flex flex-row md:flex-row gap-[9px] md:pb-[35px] items-center justify-center  md:px-[30px] px-[15px]">
//               <button 
//                 className=" bg-white md:w-[195px]  md:h-[39px] w-[159px] h-[39px] md:w-1/3 text-[#041423] font-normal py-2 px-3 rounded-md text-center text-[16px] "
//                 onClick={(e) => {
//                   e.stopPropagation(); // Stop event bubbling
//                   navigate('/category'); // Navigate to Category page
//                 }} // Navigate to Category page
//               >
//                 Explore
//               </button>
//               <button
//                 className="flex  md:w-[195px]  md:h-[39px] items-center bg-[#041423] w-[159px] h-[39px] text-white font-normal py-2 px-4 rounded-md  text-[16px]  border-2 border-white"
//                 onClick={(e) => {
//                   e.stopPropagation(); // Stop event bubbling
//                   navigate('/cart'); // Navigate to Cart page
//                 }} // Navigate to Cart page
//               >
//                 Buy Now
//               </button>
//             </div>

//             <div className="flex justify-center items-center  mt-5">
//               <img className="h-76 w-auto md:w-[666px] md:h-[525px]" src={powder} alt="Kodo Millet" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSellers;
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import powder from '../asstes/idli.png';

const BestSellers = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div  className="cursor-pointer bg-radial-white-black min-h-screen flex flex-col items-center justify-center px-[20px] md:px-[80px]">
      <div className=" text-center items-center justify-center py-8">
        <h1 className="text-white text-[24px] md:text-4xl font-semibold mb-3">Our Best Sellers</h1>
        
        <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[500px] mb-[20px]'></div>

        <p className="text-white text-sm max-w-xl mx-auto">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>
      </div>

      <div  onClick={() => navigate('/category')} className= " grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {/* Product Card */}
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index}  className=" md:p-[30px]  border-2 border-transparent rounded-[20px]  bg-gradient-to-b from-[#041423a] to-blue-900 text-white relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,1)] transition-shadow duration-300 hover:border-yellow-400" 
         
          >
            <h2 className="text-[20px] px-[15px] md:px-[0px] md:text-[40px] pt-[15px] md:pt-[0px] font-semibold  text-center ">Kodo Millet</h2>
            <p className=" text-[14px] px-[15px] md:px-[0px] md:text-[15px]  text-center pt-[5px] md:pt-[0px] ">Discover the rich flavor of millet from the heart of India</p>

            <div className="flex flex-row md:flex-row gap-[10px] pt-[25px] px-[15px] md:px-[0px] items-center justify-center   ">
            <button 
  className="flex items-center justify-center bg-white md:w-[195px] md:h-[39px] w-[159px] h-[39px] text-[#041423] font-normal py-[10px] px-[20px] rounded-[5px] text-[16px]"
  onClick={(e) => {
    e.stopPropagation(); // Stop event bubbling
    navigate('/category'); // Navigate to Category page
  }} // Navigate to Category page
>
  Explore
</button>

              <button
                className="flex items-center justify-center  md:w-[195px]  md:h-[39px] items-center bg-[#041423] w-[159px] h-[39px] text-white font-normal py-2 px-4 rounded-md  text-[16px]  border-2 border-white"
                onClick={(e) => {
                  e.stopPropagation(); // Stop event bubbling
                  navigate('/store'); // Navigate to Cart page
                }} // Navigate to Cart page
              >
                Buy Now
              </button>
            </div>

            <div className="flex justify-center items-center md:pt-[38px] pt-[30px]  ">
              <img className="h-auto  w-auto md:w-[666px] md:h-[525px]" src={powder} alt="Kodo Millet" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;