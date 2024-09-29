// import React, { useState, useEffect } from 'react';
// import { ImQuotesLeft } from 'react-icons/im'; // Import the ImQuotesLeft icon
// import innerImage from '../asstes/Promotional Section.png';

// const Testimonials = () => {
//     const testimonials = [
//         {
//             text: "The product is really amazing and from morning, I have drank the beetroot malt two times. It’s really amazing and my family members enjoyed the product. Good output. Keep giving us some more healthy products like this.",
//             author: "Mr.MANIKANDAN"
//         },
//         {
//             text: "Mam I have tried your beetroot malt and murungai idly podi it was very nice That beetroot malt has exceeded my expectations and has become a part of my diet. Thankyou soo much will order soon again All the best for your work and keep going 😊😊",
//             author: "Dr.khaviya"
//         },
//         {
//             text: "Hi Sir… Actually I thought of telling you after a month of experiencing the product… As of now I’m feeling great nd that’s a good stuff for people… this beetroot malt is so good.",
//             author: "Mr.Rahul"
//         }
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as necessary
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize(); // Check on component mount

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//     };

//     return (
//         <div className="bg-radial-white-black text-white py-10">
//             <div className="px-[20px] md:px-[80px]">
//                 <h2 className="text-center text-[28px] md:text-[40px] font-semibold mb-[20px]">
//                     See What Others Are Saying
//                 </h2>

//                 {/* Dashed Line */}
//                 <div className="mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[570px] mb-[20px]"></div>

//                 <p className="text-center text-white md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[80px]">
//                     Authentic stories of satisfaction and experience, fostering enduring trust with each interaction.
//                 </p>

//                 {/* Testimonial Cards Display */}
//                 <div className="relative flex justify-center items-center">
//                     {/* For medium and larger screens */}
//                     <div className="hidden md:flex flex-row justify-center items-center md:w-[2037px] overflow-hidden relative">
//                         {testimonials.map((testimonial, index) => (
//                             <div
//                                 key={index}
//                                 className={`testimonial-item bg-[#111B2D] p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out 
//                                 ${currentIndex === index ? 'opacity-100 scale-200 z-10' : 'opacity-90 scale-100 blur-sm'} 
//                                 w-full  md:w-[900px]  px-[0px] text-center`}
//                                 style={{
//                                     transform: `translateX(${(index - currentIndex) * (-65 + 100)}px)`, // Using gap as 100
//                                 }}
//                             >
//                                 <blockquote className="flex flex-col text-sm sm:text-base lg:text-lg italic mb-4">
//                                     <ImQuotesLeft className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mb-2" />
//                                     <p>"{testimonial.text}"</p>
//                                 </blockquote>
//                                 <p className="text-right text-sm sm:text-base">- {testimonial.author}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Single card logic for mobile screens */}
//                     <div className="md:hidden flex justify-center">
//                         <div
//                             className="testimonial-item bg-[#111B2D] p-4 rounded-lg shadow-lg transition-all duration-700 ease-in-out w-[260px] h-[257px] text-center"
//                         >
//                             <blockquote className="flex flex-col text-sm italic mb-0">
//                                 <ImQuotesLeft className="w-6 h-6 text-yellow-500 mb-0" />
//                                 <p>{testimonials[currentIndex].text}</p>
//                             </blockquote>
//                             <p className="text-right text-sm ">- {testimonials[currentIndex].author}</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex flex-row justify-center items-center mt-8 lg:mt-12 space-x-[10px]">
//                     <button
//                         className="bg-gray-900 hover:bg-gray-700 text-white text-md font-bold py-2 border border-white px-4 rounded-[5px]"
//                         onClick={handlePrev}
//                     >
//                         &larr;
//                     </button>
//                     <button
//                         className="bg-gray-900 hover:bg-gray-700 text-white text-md font-bold py-2 px-4 border border-white rounded-[5px]"
//                         onClick={handleNext}
//                     >
//                         &rarr;
//                     </button>
//                     <button
//                         className="bg-white hover:bg-gray-600 text-gray-700 font-normal py-2 px-1 rounded-[5px] w-[149px] h-[39px]"
//                         onClick={handleNext}
//                     >
//                         Find out more
//                     </button>
//                 </div>

//                 {/* Bottom Image Section */}
//                 <div className="relative mt-12 md:mt-16">
//                     <img
//                         src={innerImage}
//                         alt="Background"
//                         className="rounded-[20px] shadow-lg w-full h-[250px] md:h-[448px]"
//                     />

//                     {/* Shape overlays (conditionally rendered based on screen size) */}
           
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonials;
import React, { useState, useEffect } from 'react';
import { ImQuotesLeft } from 'react-icons/im'; // Import the ImQuotesLeft icon
import innerImage from '../asstes/Promotional Section.png';

const Testimonials = () => {
    const testimonials = [
        {
            text: "The product is really amazing and from morning, I have drank the beetroot malt two times. It’s really amazing and my family members enjoyed the product. Good output. Keep giving us some more healthy products like this.",
            author: "Mr.MANIKANDAN"
        },
        {
            text: "Mam I have tried your beetroot malt and murungai idly podi it was very nice That beetroot malt has exceeded my expectations and has become a part of my diet. Thankyou soo much will order soon again All the best for your work and keep going 😊😊",
            author: "Dr.khaviya"
        },
        {
            text: "Hi Sir… Actually I thought of telling you after a month of experiencing the product… As of now I’m feeling great nd that’s a good stuff for people… this beetroot malt is so good.",
            author: "Mr.Rahul"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as necessary
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check on component mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    

    return (
        <div className="bg-radial-white-black text-white py-10">
            <div className="px-[20px] md:px-[80px]">
                <h2 className="text-center text-[28px] md:text-[40px] font-semibold mb-[20px]">
                    See What Others Are Saying
                </h2>

                {/* Dashed Line */}
                <div className="mx-auto border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[570px] mb-[20px]"></div>

                <p className="text-center text-white md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[80px]">
                    Authentic stories of satisfaction and experience, fostering enduring trust with each interaction.
                </p>

                {/* Testimonial Cards Display */}
                <div className="relative flex justify-center items-center">
                    {/* For medium and larger screens */}
                    <div className="hidden md:flex flex-row justify-center items-center md:w-[] overflow-hidden relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-item bg-[#111B2D] p-6 sm:p-8 rounded-lg shadow-lg transition-all duration-500 ease-in-out 
                                ${currentIndex === index ? 'opacity-100 scale-200 z-10' : 'opacity-90 scale-100 w-1/2 blur-sm'} 
                                w-full  md:w-[900px]  px-[0px] text-center`}
                                style={{
                                    transform: `translateX(${(index - currentIndex) * (-65 + 100)}px)`, // Using gap as 100
                                }}
                            >
                                <blockquote className="flex flex-col text-sm sm:text-base lg:text-lg italic mb-4">
                                    <ImQuotesLeft className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mb-2" />
                                    <p>"{testimonial.text}"</p>
                                </blockquote>
                                <p className="text-right text-sm sm:text-base">- {testimonial.author}</p>
                            </div>
                        ))}
                    </div>

                    {/* Single card logic for mobile screens */}
                    <div className="md:hidden flex justify-center">
                        <div
                            className="testimonial-item bg-[#111B2D] p-4 rounded-lg shadow-lg transition-all duration-700 ease-in-out w-[260px] h-[257px] text-center"
                        >
                            <blockquote className="flex flex-col text-sm italic mb-0">
                                <ImQuotesLeft className="w-6 h-6 text-yellow-500 mb-0" />
                                <p>{testimonials[currentIndex].text}</p>
                            </blockquote>
                            <p className="text-right text-sm ">- {testimonials[currentIndex].author}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-row justify-center items-center mt-8 lg:mt-12 space-x-[10px]">
                    <button
                        className="bg-gray-900 hover:bg-gray-700 text-white text-md font-bold py-2 border border-white px-4 rounded-[5px]"
                        onClick={handlePrev}
                    >
                        &larr;
                    </button>
                    <button
                        className="bg-gray-900 hover:bg-gray-700 text-white text-md font-bold py-2 px-4 border border-white rounded-[5px]"
                        onClick={handleNext}
                    >
                        &rarr;
                    </button>
                    <button
                        className="bg-white hover:bg-gray-600 text-gray-700 font-normal py-2 px-1 rounded-[5px] w-[149px] h-[39px]"
                        onClick={handleNext}
                    >
                        Find out more
                    </button>
                </div>

                {/* Bottom Image Section */}
                <div className="relative mt-12 md:mt-16">
                    <img
                        src={innerImage}
                        alt="Background"
                        className="rounded-[20px] shadow-lg w-full h-[250px] md:h-[448px]"
                    />

                    {/* Shape overlays (conditionally rendered based on screen size) */}
                    {!isMobile && (
                        <div className="absolute inset-0">

                            {/* Green Triangle */}
                            <div className="absolute w-1/2 h-full left-0 top-0">
                                <div className="rounded-t-[20px] rounded-l-[20px] rounded-r-[100px]  w-full h-full bg-green-500 border-2 border-white opacity-0 hover:opacity-70 transition-opacity duration-300"
                                    style={{
                                        clipPath: 'polygon(0 0, 68% 0, 0 100%)'
                                    }}
                                ></div>
                            </div>

                            {/* Blue Parallelogram */}
                            <div className="absolute w-[35%] h-[250px] md:h-[448px] left-[34%] top-0">
                                <div className=" pl-2 w-[580px] rounded-l-[20px] h-full bg-blue-500 border-2 border-white opacity-0 hover:opacity-70 transition-opacity duration-300"
                                    style={{
                                        transform: 'skew(-53deg)', // Skew to form a parallelogram
                                        transformOrigin: 'top left ',
                                    }}
                                ></div>
                            </div>

                            {/* Pink Parallelogram */}
                            <div className="absolute w-[35%] h-[250px] md:h-[448px] left-[67%] top-0">
                                <div className="w-[580px] rounded-l-[20px] rounded-r-[20px] h-full bg-pink-500 border-2 border-white opacity-0 hover:opacity-70 transition-opacity duration-300"
                                    style={{
                                        transform: 'skew(-53deg)', // Same skew for a parallelogram
                                        transformOrigin: 'top left',
                                    }}
                                ></div>
                            </div>

                            {/* White Triangle */}
                            <div className="absolute w-1/2 h-full left-[70%] top-0">
                                <div className="w-[60%] h-full rounded-r-[20px] bg-white border-2 border-white opacity-0 hover:opacity-70 transition-opacity duration-300"
                                    style={{
                                        clipPath: 'polygon(100% 2%, -10% 99%, 99% 99%)'
                                    }}
                                ></div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;