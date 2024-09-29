import React from "react";
import Hero from "../asstes/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat md:h-[627px] h-[500px]"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0"></div> {/* Optional dark overlay */}
      <div className="relative container   h-full flex items-center">
        {/* Text Section */}
        <div className="text-white w-[300px] md:w-[650px] px-[20px] md:px-[80px] z-10 ">
          {/* Heading */}
          <h2 className="">
            <span className="text-white  font-normal text-[25px] md:text-[40px]  inline-block   ">Discover the 
            </span> <br />
            <span className="font-semibold leading-none md:text-[57px] text-[35px] text-[#ECBC56]">
            True Flavors, <br/> No Additives

            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="md:text-[24px] text-[16px] font-normal mt-14"> 
          Experience the pure taste of our handcrafted millets and spices. <br/>
Elevate your lifestyle with our preservative-free products.

          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// import React from "react";
// import Hero from "../assests/hero.png";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat "
//       style={{ backgroundImage: url(${Hero}) }}
//     >
//       <div className="absolute inset-0"></div> {/* Optional dark overlay */}
//       <div className="relative container mx-auto h-full flex items-center">
//         {/* Text Section */}
//         <div className="text-white space-y-6 px-4 md:max-w-lg z-10">
//           {/* Heading */}
//           <h2 className="md:text-[3rem] leading-tight sm:text-[2rem] sm:leading-snug">
//             <span className="text-white">Discover the</span> <br />
//             <span className="font-bold text-yellow-500">
//               Authentic Taste <br /> of India
//             </span>
//           </h2>
          
//           {/* Paragraph */}
//           <p className="md:text-2xl font-light ">
//             Authentic Indian millets, carefully crafted to bring the rich and
//             vibrant flavors of India to your dishes
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;