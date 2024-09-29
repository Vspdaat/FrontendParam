// import React from 'react';
// // import flavour from "../assets/Group.png";
// import flavour from "../asstes/Group.png"
// import Natural from "../asstes/Frame 60.png"
// import Premium from "../asstes/Frame 61.png"
// import Health from "../asstes/Group 11.png"

// const WhyChooseUs = () => {
//   const features = [
//     {
//       title: "Authentic Flavors",
//       description: "Experience genuine flavors rooted in Indian heritage",
//       icon: flavour,
//     },
//     {
//       title: "100% Natural",
//       description: "No artificial flavors, colors, or preservatives are added",
//       icon: Natural,
//     },
//     {
//       title: "Premium Quality",
//       description: "Only the finest and natural ingredients in every product",
//       icon: Premium,
//     },
//     {
//       title: "Health Focused",
//       description: "Nutrient-rich products for a healthier lifestyle",
//       icon: Health,
//     },
//   ];

//   return (
//     <section className="bg-radial-white-black   md:px-[80px] px-[20px] py-[55px]  text-white">
//       <div className="container ">
//         <h2 className="text-[28px] md:text-[40px]  font-semibold text-center mb-5 ">Why Choose Us?</h2>
//         <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[500px] mb-[20px]'></div>
//         <p className="text-center md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[50px]">
//           Finest collection of organic millets, spices, and more delivered straight to your door.
//         </p>
//         <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="px-[30px] py-[40px] bg-[#00071A] rounded-[20px] flex flex-col items-center text-center md:w-[305px] w-full md:h-[334px] h-[320px] "
//             >
//               <img src={feature.icon} alt={feature.title} className="w-[114px] h-[127px] mb-[40px]" /> {/* Use src attribute */}
//               <h3 className="text-[24px]  font-medium mb-[12px]">{feature.title}</h3>
//               <p className='text-[16px] font-normal'>{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React from 'react';
// import flavour from "../assets/Group.png";
import flavour from "../asstes/Group.png"
import Natural from "../asstes/Frame 60.png"
import Premium from "../asstes/Frame 61.png"
import Health from "../asstes/Group 11.png"

const WhyChooseUs = () => {
  const features = [
    {
      title: "Pure and Safe Ingredients",
      description: "Experience genuine flavors rooted in Indian heritage",
      icon: flavour,
    },
    {
      title: "Wholesome Nutrition",
      description: "Packed with nutrient-rich millets, our foods provide natural nourishment in every bite.",
      icon: Natural,
    },
    {
      title: "Crafted with Care",
      description: "We combine traditional methods with modern standards to create food that’s truly good for you.",
      icon: Premium,
    },
    {
      title: "Commitment to Wellness",
      description: "PAARAMPARIYAA offers clean, sustainable products that promote a balanced and healthier lifestyle.",
      icon: Health,
    },
  ];

  return (
    <section className="bg-radial-white-black   md:px-[80px] px-[20px] py-[55px]  text-white">
      <div className="container ">
        <h2 className="text-[28px] md:text-[40px]  font-semibold text-center mb-5 ">Why Choose Us?</h2>
        <div className=' mx-auto border-dashed border-t-2 border-[#ECBC56]  w-[230px] md:w-[500px] mb-[20px]'></div>
        <p className="text-center md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[50px]">
          Finest collection of organic millets, spices, and more delivered straight to your door.
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-[15px] py-[20px] bg-[#00071A] rounded-[20px] flex flex-col items-center text-center  w-full h-[330px] md:w-[270px]  "
            >
              <img src={feature.icon} alt={feature.title} className="w-[100px] h-[115px] mb-[40px]" /> {/* Use src attribute */}
              <h3 className="text-[18px]  font-semibold mb-[12px]">{feature.title}</h3>
              <p className='text-[13px] font-normal'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;